import React, { useState, useEffect } from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { useWindowStore } from '../../stores/windowStore';

interface Cell {
  row: number;
  col: number;
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  isTriggeredMine?: boolean;
  isFalseFlag?: boolean;
  neighborMines: number;
}

const GRID_SIZE = 8;
const NUM_MINES = 10;

const createEmptyBoard = (): Cell[][] => {
  const board: Cell[][] = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    const row: Cell[] = [];
    for (let c = 0; c < GRID_SIZE; c++) {
      row.push({
        row: r,
        col: c,
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        isTriggeredMine: false,
        isFalseFlag: false,
        neighborMines: 0,
      });
    }
    board.push(row);
  }
  return board;
};

export const MinesweeperWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const [board, setBoard] = useState<Cell[][]>(createEmptyBoard);
  const [minesInitialized, setMinesInitialized] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: any;
    if (timerActive && !gameOver && !gameWon) {
      interval = setInterval(() => setTimer((t) => Math.min(999, t + 1)), 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, gameOver, gameWon]);

  const resetGame = () => {
    setBoard(createEmptyBoard());
    setMinesInitialized(false);
    setGameOver(false);
    setGameWon(false);
    setTimer(0);
    setTimerActive(false);
  };

  // Step 1: Initialize mines AFTER first click ensuring (firstR, firstC) is always 100% safe
  const populateMinesAndCalculate = (currentBoard: Cell[][], firstR: number, firstC: number): Cell[][] => {
    const newBoard = currentBoard.map((row) => row.map((cell) => ({ ...cell })));

    let minesPlaced = 0;
    while (minesPlaced < NUM_MINES) {
      const r = Math.floor(Math.random() * GRID_SIZE);
      const c = Math.floor(Math.random() * GRID_SIZE);

      // Never place a mine on the first-clicked cell
      if ((r === firstR && c === firstC) || newBoard[r][c].isMine) {
        continue;
      }

      newBoard[r][c].isMine = true;
      minesPlaced++;
    }

    // Calculate neighbor counts
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (newBoard[r][c].isMine) continue;
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < GRID_SIZE && nc >= 0 && nc < GRID_SIZE && newBoard[nr][nc].isMine) {
              count++;
            }
          }
        }
        newBoard[r][c].neighborMines = count;
      }
    }

    return newBoard;
  };

  const revealCell = (r: number, c: number) => {
    if (gameOver || gameWon || board[r][c].isRevealed || board[r][c].isFlagged) return;

    if (!timerActive) setTimerActive(true);

    let activeBoard = board;

    // Step 1: First click safe guarantee
    if (!minesInitialized) {
      activeBoard = populateMinesAndCalculate(board, r, c);
      setMinesInitialized(true);
    }

    const newBoard = activeBoard.map((row) => row.map((cell) => ({ ...cell })));

    // Step 3: Hit a mine - distinguish triggered mine, unexploded mines, and false flags
    if (newBoard[r][c].isMine) {
      for (let row of newBoard) {
        for (let cell of row) {
          if (cell.row === r && cell.col === c) {
            // The exact mine that was clicked (Red background explosion)
            cell.isRevealed = true;
            cell.isTriggeredMine = true;
          } else if (cell.isMine && !cell.isFlagged) {
            // Other unflagged mines (Standard gray background)
            cell.isRevealed = true;
          } else if (!cell.isMine && cell.isFlagged) {
            // False flags: Flag placed where there was no mine
            cell.isRevealed = true;
            cell.isFalseFlag = true;
          }
        }
      }
      setBoard(newBoard);
      setGameOver(true);
      setTimerActive(false);
      return;
    }

    // Flood fill empty cells
    const floodFill = (row: number, col: number) => {
      if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) return;
      if (newBoard[row][col].isRevealed || newBoard[row][col].isFlagged) return;

      newBoard[row][col].isRevealed = true;

      if (newBoard[row][col].neighborMines === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            floodFill(row + dr, col + dc);
          }
        }
      }
    };

    floodFill(r, c);

    // Check win condition
    let unrevealedSafeCells = 0;
    for (let row of newBoard) {
      for (let cell of row) {
        if (!cell.isMine && !cell.isRevealed) unrevealedSafeCells++;
      }
    }

    // Step 2: Auto-flag remaining mines upon winning
    if (unrevealedSafeCells === 0) {
      for (let row of newBoard) {
        for (let cell of row) {
          if (cell.isMine) {
            cell.isFlagged = true;
          }
        }
      }
      setGameWon(true);
      setTimerActive(false);
    }

    setBoard(newBoard);
  };

  const handleContextMenu = (e: React.MouseEvent, r: number, c: number) => {
    e.preventDefault();
    if (gameOver || gameWon || board[r][c].isRevealed) return;

    const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
    newBoard[r][c].isFlagged = !newBoard[r][c].isFlagged;
    setBoard(newBoard);
  };

  const flaggedCount = board.reduce(
    (acc, row) => acc + row.filter((cell) => cell.isFlagged).length,
    0
  );

  // Step 2: When won, lock LCD counter to 000
  const remainingMines = gameWon ? 0 : Math.max(0, NUM_MINES - flaggedCount);

  const getNumberColor = (num: number) => {
    switch (num) {
      case 1:
        return 'text-blue-600';
      case 2:
        return 'text-green-700';
      case 3:
        return 'text-red-600';
      case 4:
        return 'text-indigo-900';
      case 5:
        return 'text-amber-800';
      case 6:
        return 'text-teal-700';
      default:
        return 'text-purple-700';
    }
  };

  return (
    <MasterWindow
      id="minesweeper"
      menuBar={
        <div className="flex items-center gap-3 text-xs">
          <span className="cursor-pointer hover:bg-[#0A246A] hover:text-white px-1 rounded-[2px]" onClick={resetGame}>
            {language === 'tr' ? 'Oyun (Yeni)' : 'Game (New)'}
          </span>
          <span className="cursor-default text-slate-500">
            {language === 'tr' ? 'Yardım' : 'Help'}
          </span>
        </div>
      }
      statusBar={
        <div className="flex items-center justify-between w-full text-[11px] text-slate-600">
          <span>
            {gameOver
              ? language === 'tr'
                ? '💥 Kaybettin!'
                : '💥 Game Over!'
              : gameWon
              ? language === 'tr'
                ? '🎉 Kazandın!'
                : '🎉 You Won!'
              : language === 'tr'
              ? 'Sağ tık: Bayrak'
              : 'Right-click: Flag'}
          </span>
          <span>8x8 · 10 {language === 'tr' ? 'Mayın' : 'Mines'}</span>
        </div>
      }
    >
      <div className="bg-[#C0C0C0] p-3 flex flex-col items-center select-none font-mono">
        {/* LCD Header Panel */}
        <div className="w-full bg-[#C0C0C0] border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-2 mb-3 flex items-center justify-between shadow-inner">
          {/* Remaining Mines LCD */}
          <div className="bg-black text-red-600 px-2 py-0.5 font-mono font-bold text-lg tracking-widest rounded-xs border border-[#404040]">
            {String(remainingMines).padStart(3, '0')}
          </div>

          {/* Smiley Face Reset Button */}
          <button
            type="button"
            onClick={resetGame}
            className="w-7 h-7 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white rounded-[2px] flex items-center justify-center text-base cursor-pointer shadow-xs active:translate-y-0.5"
            title={language === 'tr' ? 'Yeniden Başlat' : 'Restart'}
          >
            {gameOver ? '😵' : gameWon ? '😎' : '😊'}
          </button>

          {/* Timer LCD */}
          <div className="bg-black text-red-600 px-2 py-0.5 font-mono font-bold text-lg tracking-widest rounded-xs border border-[#404040]">
            {String(timer).padStart(3, '0')}
          </div>
        </div>

        {/* 8x8 Grid Area */}
        <div className="bg-[#808080] border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-1">
          <div className="grid grid-cols-8 gap-[1px] bg-[#808080]">
            {board.map((row, r) =>
              row.map((cell, c) => (
                <button
                  key={`${r}-${c}`}
                  type="button"
                  onClick={() => revealCell(r, c)}
                  onContextMenu={(e) => handleContextMenu(e, r, c)}
                  className={`w-6 h-6 text-xs font-bold flex items-center justify-center cursor-pointer transition-none ${
                    cell.isRevealed
                      ? cell.isTriggeredMine
                        ? 'bg-red-600 text-white border border-[#404040]'
                        : cell.isFalseFlag
                        ? 'bg-[#C0C0C0] border border-[#A0A0A0] text-red-600 font-extrabold'
                        : cell.isMine
                        ? 'bg-[#C0C0C0] border border-[#A0A0A0]'
                        : 'bg-[#C0C0C0] border border-[#A0A0A0]'
                      : 'bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white'
                  }`}
                >
                  {cell.isRevealed ? (
                    cell.isTriggeredMine || cell.isMine ? (
                      '💣'
                    ) : cell.isFalseFlag ? (
                      '❌'
                    ) : cell.neighborMines > 0 ? (
                      <span className={getNumberColor(cell.neighborMines)}>
                        {cell.neighborMines}
                      </span>
                    ) : (
                      ''
                    )
                  ) : cell.isFlagged ? (
                    '🚩'
                  ) : (
                    ''
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </MasterWindow>
  );
};
