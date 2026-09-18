// Auto-generated Strava athlete dataset
export interface StravaActivity {
  id: number;
  name: string;
  distanceKm: number;
  movingTimeSec: number;
  formattedDuration: string;
  pace: string;
  avgSpeedKmh: number;
  elevationGainM: number;
  startDate: string;
  type: string;
  prCount: number;
  kudosCount: number;
  polyline: string | null;
  stravaUrl: string;
}

export interface StravaDataset {
  athlete: {
    id: number;
    name: string;
    city: string;
    country: string;
    profilePhoto: string;
    profileMedium: string;
    stravaUrl: string;
  };
  stats: {
    allRuns: {
      count: number;
      distanceKm: number;
      movingTimeHours: number;
      elevationM: number;
    };
    ytdRuns: {
      count: number;
      distanceKm: number;
      movingTimeHours: number;
      elevationM: number;
    };
    recentRuns: {
      count: number;
      distanceKm: number;
      movingTimeHours: number;
    };
  };
  lastSyncedAt: string;
  activities: StravaActivity[];
}

export const STRAVA_DATA: StravaDataset = {
  "athlete": {
    "id": 177395919,
    "name": "Görkem Berk GÜNDOĞDU",
    "city": "İstanbul",
    "country": "Türkiye",
    "profilePhoto": "https://dgalywyr863hv.cloudfront.net/pictures/athletes/177395919/45007246/1/large.jpg",
    "profileMedium": "https://dgalywyr863hv.cloudfront.net/pictures/athletes/177395919/45007246/1/medium.jpg",
    "stravaUrl": "https://www.strava.com/athletes/177395919"
  },
  "stats": {
    "allRuns": {
      "count": 33,
      "distanceKm": 212,
      "movingTimeHours": 19.2,
      "elevationM": 493
    },
    "ytdRuns": {
      "count": 29,
      "distanceKm": 198.3,
      "movingTimeHours": 17.8,
      "elevationM": 488
    },
    "recentRuns": {
      "count": 2,
      "distanceKm": 14.6,
      "movingTimeHours": 1.4
    }
  },
  "lastSyncedAt": "2026-09-18T15:19:36.337Z",
  "activities": [
    {
      "id": 19995002514,
      "name": "easy",
      "distanceKm": 5.03,
      "movingTimeSec": 1500,
      "formattedDuration": "25m 00s",
      "pace": "4:58",
      "avgSpeedKmh": 12.1,
      "elevationGainM": 0,
      "startDate": "2026-09-01T21:21:32Z",
      "type": "Run",
      "prCount": 1,
      "kudosCount": 1,
      "polyline": "au|zFam||E@BAJOf@MTE@K@[ECCTCM?WYOCCIGACGKEKOKEMQK?IMKCCOQEOQQGIQIBGGIECEKEOQWOASNU?KLc@Nw@LMDULYRw@J]NWF_@b@oANq@Re@BMHKzAeFL]JS?IJa@^kAj@wAJe@FKBQ\\}@b@_BVg@r@`@TPh@GPB^T\\HTRJBH?HNTLFARZ?RS|@KTCNFRD@Hx@CBAXK`@EB?RGJCPIPUz@GLId@INFJIFGJ[`AQz@EHE@Mb@IRMNEP[f@Mf@M^ANKPUl@?FMZKNYv@Ot@i@xAMr@OVId@MXMf@MXEBIGG?WEKMOEIGE?ECE?EKIIAGUKg@i@]SGM]OQUcAi@AGBQFKLk@FKR{@b@gARy@HU@MDMLMBQHQBWNYTs@FIf@iB\\_AZeAd@sARw@^eAH[NSDSHMR_AFMr@_C@QXi@B?l@d@RJNBBGZCd@Lf@Zl@\\JBDFHBLJNTSbAC@Kb@?PBFHDH`@@^Ib@GJSx@]dAG\\Up@Kb@IRAFGJ_@~AMNOb@_@v@IHY~@CPQ\\Oh@ILAFSZWlAOPWjAUx@OZCTm@rB?FMPI?OGE?UG]_@E?GIE?OMIMMIOQ]SMIAGWMWWSE}@u@H_@LU@Q^eA@Gl@wBDETw@l@mB\\{@VeAd@iABYHK?OFIb@sAJO@OJY?OJWJe@JUNg@T_@BWHUt@{B?MFEHOPo@BGFAD@JL`@RTRDCVEJBP?NDBDJ@n@^TFPTDBDJD?HBLL?DMp@Uh@CV@DR`@Bp@O`@GX?LEJCROb@ALM\\IVEVGLY`AINa@dBMLM`@GBCFEDEVMLAHQZOh@a@bASp@CNE@GTALUt@?L",
      "stravaUrl": "https://www.strava.com/activities/19995002514"
    },
    {
      "id": 19870606114,
      "name": "first w duo",
      "distanceKm": 9.57,
      "movingTimeSec": 3397,
      "formattedDuration": "56m 37s",
      "pace": "5:55",
      "avgSpeedKmh": 10.1,
      "elevationGainM": 3,
      "startDate": "2026-08-23T22:33:26Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 1,
      "polyline": "s_g{Faup|EFHGGED@XIJEV[`AS\\A`@Kf@Q\\[hASlAEFEZgAjFE`@_@xA@RWv@_@zAMl@ObAWbAMZKt@k@tBUrAKRKt@c@rBGNuAhGE@iAdHSp@q@rDEf@_@zACd@o@bD{@|CWnAKT?JO\\E`@MV?PINYlAIJIXMt@_@`Ao@hCe@`CCTBNOXC\\KRe@bCCX[~@Gf@a@x@EXGFOzAe@|AObASr@KRUz@CXQZO~@Wz@KLSbAILI@Ij@KHKb@INMj@MXCPBJOd@]xBG|@[bAKx@Qf@m@~Cw@bCkA|BQj@O|@Sb@CNDJY`@s@xBORa@hAWfA[d@Av@Yr@AHGPCCADIZ?JMH_@jB_@v@EVGH@NGV?V]z@CVMXSPk@dBINSLEZQR_@jAWh@e@rA[`AEZMFKf@SPa@pAe@nBk@pAU`Ai@bBMVIJSlAEHe@MG`@[jAk@fAKt@Ol@a@bAc@x@e@zBs@nAM`@OTEVQb@y@zAg@N{@|@_@v@EVIHQn@M?G`@g@z@[r@]rAg@rAWh@u@zBu@vAKb@I@@PUv@V_@Nq@Nc@Zm@HEjAaDj@mARgAN_@v@qB`@u@H]NS^eA~@kANc@LKVe@LAf@]XaAPKLYLe@Ra@VcAB@He@b@eANSX{@LiAJYXg@^oAf@qCj@mBNQD]Ty@t@sAXkARe@HCF]Z]\\}@Zg@N}@JUJGJg@~@cCBUf@cA\\sALSH[Xu@B?XmA@WTa@ViANS@MvAcF@]Zo@@OVs@r@gCDKD?\\mAVwATk@?OFGBWL]@_@t@eC?[Pg@@SPw@@e@HMN}@B?Jg@BAb@sBdAkBTm@@[HS@WJ]L]VWFw@^uAd@uALs@JOTuAJSZkAPa@n@oCRa@BWVeARo@Ju@t@aDJWBa@HKFc@D@Ha@HA@i@PqARmAJSH{@~@qCBAFWDAAGLs@Xq@?MRo@?OHQ^cBJWD[n@gCZaBFMHq@LYD_@`AoD\\eB@Wj@{BNgA@k@H[Bs@LYz@wDJQNeAJODa@P_@Do@LWRuAHKVkBx@aCNoAHQ@@@Wp@}CBUB@Fg@Ry@f@wCr@eDDGPaARe@AO\\y@l@aCFGXsACCNS?ONk@?MJMTeANuA",
      "stravaUrl": "https://www.strava.com/activities/19870606114"
    },
    {
      "id": 19819858678,
      "name": "bu havada 10 olmuyor alüminyum",
      "distanceKm": 8.16,
      "movingTimeSec": 2642,
      "formattedDuration": "44m 02s",
      "pace": "5:24",
      "avgSpeedKmh": 11.1,
      "elevationGainM": 8,
      "startDate": "2026-08-20T10:40:27Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "wbj{Faeh|E?LCFE?Yv@{@rAg@^O?WLGLE@QTKTc@l@i@xAKBEEM?KJGLCAGVOXSn@YdAU`@Sb@q@rBWj@KNkA|C_@p@uAdDQXYp@SXw@hBYd@_@d@k@z@KJ_@p@Qd@g@bACLu@~@k@nAIFAJEJ?FKDAJWVy@lAcAnBi@|@y@`AyBpDML]j@WXy@vAcAbCi@|@a@j@]\\c@l@aAbBoApAo@f@kAlAOJsAlAm@b@_A|@eCrB]Le@XkCbAMJk@Rq@JOJqAb@u@Zc@`@[RCFMLa@ZyBzCc@t@]`@y@pA]b@OLUb@q@l@iBjBoAlAe@j@g@`@WJGJSHWX_C~A]RO@cAp@yAt@e@Na@Rg@LeA`@k@Lw@Hg@L]`@AD@`@QP_ALCGUBeAGCEm@IAGS?EEgAMIEGGKAc@D[C]BUJo@p@YNO@c@GGEMAQKm@QwAG_@@KAGEy@LWEKFiAPQJeAXUP?DSBEJGA?BKHe@VAC@DBBBIBCBSZUN@ZIb@WVEFIb@Mj@KR@?CHCd@EbA@XAa@WFABEtAJDBCJNADDCEZ?HFBA@KFNDB\\GBJHHDRDDDEJFTB^WPYh@g@VEj@AbAHrAh@JCBDC?F@p@HA@RFv@FRIT?b@IT?BDPKv@Kj@CTGHBNIrA[\\SBC@KH@z@SLMLEJKTOZMTQHARSj@[FIbAe@VUHA|@s@v@a@^_@TIT]~A{A`@i@VQFGEGVQRGLS`@a@@ENKX[b@g@DIVQ`@w@PMP]HWHIN[n@u@FEJUTU^i@HIHCHOd@c@ZMDILMXI`@St@WPAHGb@C`@K|@_@`@Uj@SVQDE@INAZQxB{AhDkDVKTSf@q@ZSFKb@_@HQRGv@q@x@{AF_@Vi@`AgAf@s@NWZ]Xs@B]f@gALWNMDQ?MLKFAFOV[LUNKF@FWPQBIHCFYf@{@JC\\_@P?d@e@Xq@PSAGFI?ILMFWLIFOFCNYBOFIDMNUN[JBJ]HCBQAKXa@Re@t@gADKNOHSLMbAyBXc@Pa@ZWf@i@L[LMT_@Vm@BMf@qAA[^c@JE?EDIH_@NWBSj@_ADQFK@SDMAELSLYDAJ[FINa@NU?ILUFULo@B[Ru@bAsBJKBOLWJa@@MRi@LOJ]r@kARc@FCJQXIDB",
      "stravaUrl": "https://www.strava.com/activities/19819858678"
    },
    {
      "id": 19749976501,
      "name": "üzerine basket",
      "distanceKm": 5.01,
      "movingTimeSec": 1585,
      "formattedDuration": "26m 25s",
      "pace": "5:16",
      "avgSpeedKmh": 11.4,
      "elevationGainM": 3,
      "startDate": "2026-08-15T12:46:09Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "ybg{Fylp|E@GIR@FI\\O`@Gn@Ux@Mr@Mf@ALELGl@KNGXC`@M`@QjASp@APGVIHAPIb@C@O|@mBpIO|@OVA\\I@BD?NKd@EFCVKVGb@EA?HENC@WhAEH?JeAhEGn@IXYrBaArEC\\K`@Mt@YbAG\\Cn@Ml@GHAVMh@CRIJ?HS`A}AzFCN@FW~@Sd@Ot@C@GRId@Yx@Or@APILm@pCQp@ADBZAFK\\EFEd@INCXQd@SnAWdAEACDGt@KDEJEd@Op@KJEf@On@M\\Kb@CN@LEHGZKLEB?NKVOv@_@hAG\\KFC\\Wn@AXINEXSZ[z@I\\I@@ZOTGPCC?LQn@?DHPKTEZAf@GV?VCRQn@ETE@BTMVOx@IPGXMRK@OM_@OCEGAGMBE@WDSB]ZaALq@\\y@v@aBRq@DUHSNs@\\y@^oAJe@Pg@XqAJYd@uBZiAHODa@HKJ[b@iBHSb@iBBOFK^_Bz@wD^sBLc@b@cCp@_DDEhAkENc@Fa@Pg@`@mBf@kBpBsJZ{@Lk@l@{C\\uALkA@_@\\{AAIDKDCHm@`@qBHQVaAXsAFQP_AFM@WHSRqADKLeADERy@NYLi@BCAGDSAEDEHYLk@Lw@?GBC@O@APy@DIFYf@aC@OL_@J{@DIX{ANg@Ji@@A@QJc@JY@IBCBEHc@HIBOJWFq@Tg@CUBKAGHuA",
      "stravaUrl": "https://www.strava.com/activities/19749976501"
    },
    {
      "id": 19679451972,
      "name": "30 derecede alkol çıkartması",
      "distanceKm": 6.09,
      "movingTimeSec": 2032,
      "formattedDuration": "33m 52s",
      "pace": "5:34",
      "avgSpeedKmh": 10.8,
      "elevationGainM": 0,
      "startDate": "2026-08-10T13:28:50Z",
      "type": "Run",
      "prCount": 1,
      "kudosCount": 1,
      "polyline": "inh{Fqel|E?JGNQfA[x@Mx@ADG@@JIDAFQ\\EVOPa@|AE@Kl@EHAJEBEl@Bd@Kd@Ab@EFALOl@ITAPW`Ae@fC[hAUj@]fAYb@a@x@[nAG^CBC?ANE?CBMn@g@zAQf@_@v@YlAGHK\\YhAABICGf@IRWlAGLOj@MVEVGEC?ADAf@Qb@ETABEBABARCF?^ILe@pBOPG@GNCB?HINGVS^AFIDWp@GDa@lAO`@CL]v@CLIFCL?HKPETMRAF[n@EDEVc@nAUbAGHSl@m@lBKVALSn@_@z@UZUfA?PBJIPEZOd@EZQv@[~@S^Oh@MNCVEBGLSh@CDCAOjAQXGZWj@c@lAYj@_@^c@n@WLM?ULQPu@jAC?ADOh@[v@GTQV?Fi@lAOVM\\GD[|@UdBGFUr@QXUj@a@x@O^?HQ`@CNU\\ITKHQ`@e@lAC^C@S`@I\\s@fBEBKVi@t@YRMBYd@KHGPc@r@Qj@IZKDANw@jAo@n@Wj@Wv@SZGFE@ECIe@Ne@P]T[Vm@TYPa@h@{@BONQVg@^e@Pe@JMXg@\\c@l@_Ah@iANSRs@JKL]Xg@p@kBn@cAJe@DAHa@r@uAd@yAh@mAH[PY\\{AHSJMLa@JMBQJKLUt@{BT_@XYLGV[FKBOBEB?DUTg@D?BEJEP?JOTy@N]NMLa@FI\\{@HWB[BMDABEDUFIBMLYRi@f@mBb@gAH[BCHY?GHO@MBCHg@BCBQJ[D[FGXuANWFSJUBOJWHc@NSB?Nk@LSRy@FIDYFIH[FK^c@HU@ALe@JOHGDO?GDI@QTe@DEHa@FINc@HMJ]B?BGRq@Xg@@QRo@BCJ]HMJc@BAJi@HQB?R}@N_@Je@Te@Nq@BYBA@IJSDa@DAHe@JYH_@FM?KFAFILc@FKJ[@QHO\\qATk@D[\\aAd@yBNc@Nk@Fe@Tm@X_BJ_@FAH{@Ty@BWHc@H{@L[ZmBLOT{@DKB?Pc@b@_ALa@BWRk@?GPq@JWFWFG@QFEHW",
      "stravaUrl": "https://www.strava.com/activities/19679451972"
    },
    {
      "id": 19667270820,
      "name": "cheesecake çıkartması",
      "distanceKm": 7.01,
      "movingTimeSec": 2291,
      "formattedDuration": "38m 11s",
      "pace": "5:27",
      "avgSpeedKmh": 11,
      "elevationGainM": 5,
      "startDate": "2026-08-09T14:03:50Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 1,
      "polyline": "wag{Fwqp|EEAMPKn@OXG\\?NEHKf@Un@]bBITSbACD@E{AfI@FJBDD@XSn@AREJCXSx@ITG`@_@bBCZIRy@|FGJM`@c@zACDCKCLaBxGYdBEj@WdASnAGRm@lDk@fCAZQx@In@M^E?Gp@]zAiA~DCBCTQv@KZWfAEHCNIT_@rAGNMp@g@hBUlAM\\CV?^GHQr@ED?LC^Md@WxAIPWfAAPGLC@@FMPQx@GHARMd@E\\KVG\\Sr@GZO`@If@WdAQb@ATOVI`@_@jAOr@q@`BYfAYl@Y|AAZ@RM~@Eh@IJ?RCDGd@EF?H_@pACVKTMl@C@Gd@Sj@CPELGTIL[x@GHIT_@n@Qh@Sz@GJG\\KX?LKXE@GX]|@AFMZINIVIHG`@Qb@CLKP?HWdAc@xAKd@c@lAKf@OZWfAGHCJBDCFC^Yz@EZITE??Re@f@g@vAU^IXE@Sd@YdAYb@Kn@SXI^Wb@Kd@KLEVWh@Qr@?HE@Qh@KPQp@KTCPg@hBOTOh@KNAFCDCR?FKROp@Oh@Q`AQb@CXMr@OXIh@Wd@a@dAGFMj@KLSn@ET?JKPMFILDJAFe@pAi@jA_AhAMH?BGBIG]\\WPW^c@z@IVGFCNKLyAfD?DE?HCFIRk@JIXu@LOB]HELY@OL]RMBIHKHQT[VOBKDAFBTOJ@f@}@TSLYDAJWH]P_@\\kAFG?QNOBM?IP[@OFGD]TWBSHM?K^y@BMHGh@yBFK@OHS?MFKJg@@[BGB?D]BIF?Ha@Lc@DGFBNqATa@Nk@\\_ABUb@eATaAN]@GRi@J_@JOPi@JEJi@NW?KDOd@}@ZmALK@OHENULi@@MR]DUDAJ]LO\\s@T}@BWJ]D[FI@YPSH[BSB@@QDIAA@KFELq@NYJ[BUCIHMNc@LUFe@JSD[@EDA@OJUDSFOLSDQRYNi@NUPw@NOF]DI?IBMJW?SFOBWJK@M\\q@@KR[H]FAHSJa@JWJ_@DCAIVaA?ELY?GFQNw@FK@SHYAEDGPm@FIHYAQBC@YFYCGDKASFa@Pg@@WRe@Rs@HECKHY@UCE@MFOHKFYNODMBSHUD[DGFYJWF]JEBGDe@FOFGD[Pu@?OFIHWZ}ALUFWHKHs@HM?KDEAGFM@YNWJGAGJ_@B_@HCDWDABECIDa@HE?MJ]?KJ[?OBC?INaAJ[",
      "stravaUrl": "https://www.strava.com/activities/19667270820"
    },
    {
      "id": 19635933629,
      "name": "bebeğim",
      "distanceKm": 10.53,
      "movingTimeSec": 3558,
      "formattedDuration": "59m 18s",
      "pace": "5:38",
      "avgSpeedKmh": 10.7,
      "elevationGainM": 21,
      "startDate": "2026-08-07T06:58:29Z",
      "type": "Run",
      "prCount": 1,
      "kudosCount": 1,
      "polyline": "smkyFmgyoDTQ^s@V@l@c@Cs@NQJwBPITmAVMCuA@ORSKy@Jo@GyCI[PUXCIc@T_A?e@CKQ?GOiAs@HEOy@YUa@{@YSOi@OIg@iAKRFIEK[c@k@c@MWa@IaAiB_@AOSa@KSgAs@y@}@yAHQ}@q@qBoC[mAg@}@EYFW_@wAk@_BOwA]{@BS_@mDc@oABUs@iBq@yD]w@OgAKOU_BeAqBgAuAuAq@c@g@u@UEY[KgAkAw@i@Yi@oCmBa@]Uq@[Mw@mAs@m@qA{BeCiCg@{@a@]sDiBYe@i@Qa@e@_@Ui@s@mBmAGUo@OA]K?iAw@{BaBw@o@Ea@[Yk@uB[c@K_Au@uABOK{@M_@Ya@mBiA]c@Aq@SMC[OSCy@m@{B@UOc@Bm@O]G}@WYEy@c@}@Ba@c@eCBOLCq@mAFUS_BBy@MYBUKy@WaBKKDk@LMAHMMOyAsBcITEEmAFo@_@KQYJ}@M{A]s@Ak@QSDY_@{AAy@[yCBi@OUSg@CmAKOSeBGAKmAQAMa@i@q@BMe@e@Rw@_@g@EURUAGWWk@OG_@IC@oA]{@Co@Oe@G@?[WK?c@Wa@FU[e@Qy@g@SCo@Qk@C_@H[IJIYDISk@G?DOQQUsAk@cC[y@@QKCC_AS[FEs@u@GSKCF]KC@i@GUq@s@Eg@w@cBG}@{@kBMw@k@o@Km@i@w@@OMkAOQFc@MUIc@Dy@KiBYgBKuAa@eBm@mBo@mAc@eBO}@?]Qi@OqBQ]McBWu@c@m@e@a@MJXBg@UgBkBiCmA{Be@cAJS]cAIeAg@_Fw@KLUAa@a@u@?a@YqBi@m@DoC{@s@i@aAQgAk@aAKyDmB{@MeBgBMa@Cs@g@y@mAa@kAs@Ok@u@mAu@eCUe@uB_Ds@eBUWo@c@s@MiBAOMy@OUF_BWKMi@BkAYkBwA]Me@aAWCIg@SEc@y@[mAYmB@i@_@}CGmA_@{Ae@cAg@q@]O{@Rg@WwAOqBXwAl@Y^LQbAi@jDm@FA@RTGfAb@dEfKIFNdBT~@@r@\\pARVDXd@ZALh@dA`Av@\\J|@z@t@PrANTKt@XPQNBb@\\fAPFGf@b@`@@BIj@h@b@Z",
      "stravaUrl": "https://www.strava.com/activities/19635933629"
    },
    {
      "id": 19587457609,
      "name": "bayılmacalı",
      "distanceKm": 12.54,
      "movingTimeSec": 4024,
      "formattedDuration": "1h 7m",
      "pace": "5:21",
      "avgSpeedKmh": 11.2,
      "elevationGainM": 27,
      "startDate": "2026-08-03T21:23:44Z",
      "type": "Run",
      "prCount": 1,
      "kudosCount": 0,
      "polyline": "kdkyFwezoDcAU}@_AA_@MG@Ye@yAg@UkA}AqAmBiAw@DQOUUAmA{@{@mB_@KI]y@u@QgAqA{@C]{@kB?Ya@c@I}@[i@@UMOK{@]{@A_@QeAWSQiA@u@]iBu@}CISIHCYW_@Gy@Yi@?s@W{AWs@Iu@QYa@cBHi@y@GD]{GwDGc@[IaDgDkAo@oAgBsBkB{@cBs@y@a@C_@eAkAmAw@gA{Aa@q@_AaAg@KQJIkA[y@kAwCiBAQy@c@EUcAg@uAsAg@OYa@eAyD]{@}@iB@c@S_AiDsCIy@OOQyA}@iDQ{BSa@CeAWm@?m@cAcBTe@[mAFa@U{BKIOyD_@e@I[f@O?k@y@_BSyB_@eCOO]cESe@Ly@_@_BYc@@sAUm@QqBDg@c@wAy@aIq@gCaCyEDi@s@uAUyB{@gBAc@QMAi@c@mAIgA]u@DMQu@g@wAg@aACq@SQ_CuH?_AiAcB_@_AMcAcAcBa@mC]SwAaDBiCo@aECwAa@}C_B{EgAoDIcAWOI{Bc@gCkAqBkA_Ac@MCUy@c@AT`@`@l@HfBdBx@nB^pBXdEf@fBz@z@Lj@?~BTBd@p@^nA?nAr@fC@fAGrAd@bDTv@l@j@PpBf@zAXd@^ThAhD^XXn@t@bEb@~@^P`@vDPPf@dCb@b@R`AG\\n@|AFz@f@nBBx@dAdDDn@\\v@x@~@CRZz@@r@pA|BCTl@lDGTJ~@^j@FpANH@hATp@N~@JrB^|@TjBA`@Nh@GVHh@`AhDNnBAxBr@t@Gl@f@nEE\\V~AE|@r@fCGVHj@Nf@NFNf@FvA^VQRR\\TnDH`@pAtBE^_@P@t@VFCONAFv@J?d@v@jA^J\\VHb@vCPL@\\Xd@Jn@VJRv@Df@XXd@nAzC`Bt@jAlAh@|@~@t@\\d@^Pj@xBbBxA~@`Bj@fAjArAvBv@j@nAhB@ZLCBX^TD\\h@\\|AvB~@ZX^ZBJVpAr@DVp@f@BPx@d@NZrAh@hAxAj@^HXX@LfAx@lAGTXh@Nv@Ef@PV\\hBf@xAt@zA\\tCEZ`@hBTFD`AR^BdAXVBl@VnAb@`Bb@n@ETVFBb@LRAZ~@|@XbAVN",
      "stravaUrl": "https://www.strava.com/activities/19587457609"
    },
    {
      "id": 19454993338,
      "name": "bacak deneme 1 2",
      "distanceKm": 5.11,
      "movingTimeSec": 1594,
      "formattedDuration": "26m 34s",
      "pace": "5:12",
      "avgSpeedKmh": 11.5,
      "elevationGainM": 9,
      "startDate": "2026-07-25T10:55:51Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "uvkyFouxoDDF?PRhA@R\\|@FBBF\\dAZt@ABJNFXT`@?HF?D^HPBP?CDF^`AFVR^FVDDJXFTXl@Lx@LL@JJZHb@DJDBBLHFF\\d@fA@LCHBJCDABIFAFGDGRIP@LGH@lACXMJKRGFAIITWVIPSNCH[Zc@XGJa@\\UVADSLGJSFEJ_@b@E?QJI?GFa@H_@Ng@JOH_@HKDGHg@JKHCAQDm@XMJ_@h@CLIPALi@pAAPIPALGNKHKRKFOXIDILCRGAEHUPOPAJI?KBEFE?SL?BOVGV?RGNATIZ@tAATI^Eb@Cv@S~@Mr@CD?\\KV?RGRGz@Mj@?JSj@UZg@b@EJ]\\INIDUTUL[VENUDQPm@d@UZo@\\g@f@CAGJKFc@h@SDENG@UN]\\OHGJWPIDQTWT[`@UPCLMDQRoAxAAFE@GLCHI?GTIBELk@p@EJa@^IB[VWXWPENKLMTCAALQHICY`@EA]LKHK\\MHEJMLIT_@b@E@ILO@IR{@d@QBQNUBMFYF[TKAGHO@ETc@D[JGASDQNKAQJMPQBKJm@Tc@XSFGFG?OJs@TKBCAEDk@Lg@TCHQPOVM^]h@C@i@p@Q^C~@CFK@KPE@Kh@e@|@ANIPI~@Mt@?NGJa@lBE`@O`@AR_@r@CZ@DC?GDKRIT@BYVAD@LGFCA]jAMRAJKNURMXOHYZGDM@KZ]ZE@_@^KDCF[PMBKRQNm@R_@d@WFMTIFODIFGJK@EDYLE@_Ab@WHUBINCAKHUFQOKFMDOIK?KIQBQSKEUGMFUOYCGGSGI?CE_AUKGAGMCg@IK@KAK?g@Ge@H@A]NYRIBiAz@OTa@XYXIBo@v@[RQRMFKNK\\OBk@b@i@d@m@p@iA|@M@aBr@SPOX?NSVK?KJCAGDO?KFE?_@Bu@KEISCKIc@OKOE@k@[IMUQ?Go@g@i@WKSYYEAIMMI",
      "stravaUrl": "https://www.strava.com/activities/19454993338"
    },
    {
      "id": 19442490266,
      "name": "bacak ağrısı",
      "distanceKm": 5.16,
      "movingTimeSec": 1637,
      "formattedDuration": "27m 17s",
      "pace": "5:17",
      "avgSpeedKmh": 11.4,
      "elevationGainM": 9,
      "startDate": "2026-07-24T11:29:04Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "ivkyFwuxoDQTB@GJBDDZPXV|@LV@CHNLd@Rb@@HABFFDRJNH^FBRr@HL@VFVDBADNLPn@f@fANn@R^L`@LVDRJPHZAHFJBNXj@BJBBVv@Pb@@NCV[t@IXArBI@CDQZWXETECGBS\\a@f@MFE?EBAFE?IJE?a@d@MJEPSJq@p@c@X_DbAa@FCBGEUP}@^ONYPc@l@ETWr@KNMf@AREFATWRUXQZEVGBGFIBQRYPEFWFINOJYx@Mt@ELBRCV@`@CHATIf@A@Ib@HVg@fDKVGZGd@?VGd@Kd@M`@S^WRGLEL_@X_@d@g@\\GXMASPKBEXEBGAKBSRa@XAFIFMBGACB?FED{@p@QTWVe@Xe@h@o@d@KPOFONC?IL_BbBq@z@KFSZOLIPKLKPKHEJONKLc@b@CBIACJQXSHKLGJCPCBO@KPSLMRk@`@G?MFGFAFAVEBS?GVKLgAjAYPIB]VO@WPI?AFQ@KHYDCFOHI?EEEBQPE?IBAFBJe@EYPKASHEJC@OEOXQ?GHOHYLC?{@d@mBv@U@SJE?YNGHKBKVOJKXYh@ORWRUZOZ@XDF?HMJMAEDD^GNC@E?I^QPa@rA?VITSzAM^WhAE`@Ad@KREPOT?F[p@CPONQZB?BNATELYR?DBFADGACDG@EPQRCHEBAHc@`@ALCFSLQVEBE?ENGAUNMLAFSFIHC?UVM?EJCCMBKTOPI@ECMFOPMFEAIJCCGDEJOJGVs@VC?UPC?SFKFEFEAC@IZIEG?CAIHGAOPIBIGAFKJEBCCQDKMKBUAUMEBYKAEG?GKa@?ACg@QG@CCUAUIKACC[KQ@[UOACAE@MEKFKGMDa@Iy@JCDK@WRk@\\ORQDINQNCLKBe@d@WFOLEF?BOPIBUZCBCAUb@QJMN}@r@SVIBKNYRSVa@Z[LQLK@[RK@QJc@ZITC?CLGFGLe@b@CEE@?BE@UEE?CFaA]G@?DM?a@KCCG?GECBKMUOC?YUISEEMEISA@Y]QGKKAEEAGKC?OS?EGSSO?BCA",
      "stravaUrl": "https://www.strava.com/activities/19442490266"
    },
    {
      "id": 19303612043,
      "name": "yeto",
      "distanceKm": 13.03,
      "movingTimeSec": 4016,
      "formattedDuration": "1h 6m",
      "pace": "5:08",
      "avgSpeedKmh": 11.7,
      "elevationGainM": 27,
      "startDate": "2026-07-14T06:18:59Z",
      "type": "Run",
      "prCount": 2,
      "kudosCount": 1,
      "polyline": "qdkyFwezoDkBq@a@uAQG[w@AYOEi@iAe@i@CSeCeCASgAw@Sa@y@a@q@}ADM_@OMc@u@[A[m@o@i@mAy@s@Is@QOm@kB[yBYm@m@kD]aAEw@DS}@sEOEEyA[cAa@BImAg@oBQwAoA_DiA}AgAYq@{@m@YMJ_@s@SACMg@_@OHMe@sAaBqBqAg@e@OO?SsB_Ci@}@c@IC_@yDiEa@u@}@s@{@S{CcCa@FI_@qAcBcAg@wGkF]Ke@{@_ByE_@qAq@mCyC_CuA{FYeC[_A?k@]iASiBaA_CXc@?OSc@UwCBm@MYe@_E@q@}A}Je@uCYq@DoAOwA[m@MoBc@}Dc@{BaA_IeAwA]o@k@yCM?a@yAG}@o@uCQIQi@YkB}@cCEi@Se@A_@Y[Cc@SWSaBg@oAYwAe@i@Km@Y[QcB[]HMGCC[[Wc@mAGcAQ[@[o@_A_@qAKAEa@cAgB[oASYCaDe@iCK{BMc@Ba@UiA_@y@e@wB[]ScB[]c@eCKQ?e@YoDYiAWUIc@g@g@wCmB_@c@gCeA{AUjBXtClAlAhA^n@lA|@d@|@j@nDDnAPdAhAnEV\\D\\NLb@vAdBpLKfBJHAZh@vAEPf@rAPRR|@?j@n@h@p@fBB\\x@r@Ln@KLXz@NFTrATp@J?ZbAHpAJBhArDFp@M@LD^fANNDx@XtAf@`Aj@bB\\vBrAtDVpB`@j@@j@XV?TXl@VpA\\\\p@fDZbDv@`FPVEZXpBTpATf@^bF?Xd@nCFhA~@jE\\nD\\lF`@vCVr@TtBf@|ACZh@pC?XX`ALxAPDNvAPZ@t@R\\j@TbB|Ah@~Bn@|ADt@d@v@\\tAt@tAn@XhBfB|@^jGlFb@l@XHJRrBpA?b@`@AjAv@RZ^LjAhBv@r@FV|@r@f@dA^VrB`CNt@XD^RBPV?x@f@nCjCJV~@`@HTfA^T`@fB|A|BjFtArGXj@N|@Zr@Jx@T`@@lAPrAG^p@fB@\\j@pC|AbFh@|@v@|@Rf@b@^J|@n@fAd@b@d@vApA|@BVRXjAd@Lv@x@Dx@|@Vd@Bd@~@jAFf@XHX`AC`@l@p@Dj@WNRx@A\\",
      "stravaUrl": "https://www.strava.com/activities/19303612043"
    },
    {
      "id": 19184062867,
      "name": "sarrrrdı",
      "distanceKm": 12.41,
      "movingTimeSec": 4245,
      "formattedDuration": "1h 10m",
      "pace": "5:42",
      "avgSpeedKmh": 10.5,
      "elevationGainM": 31,
      "startDate": "2026-07-05T06:52:42Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "cekyFafzoD_A[q@m@CSo@{@UeAQIMc@w@_A?_@sBmBi@QQu@YYc@Io@q@w@iAMs@UGKa@K@[e@BU_Ae@Qq@[QCUo@gAqAgEe@uD[u@i@mBMiBYyAMOIaACKOHIoAi@sAIo@F]QUe@{AEu@e@oBO]y@oAHEN^{@BBy@a@s@e@c@i@]qAg@_@c@aAc@e@}@wAuAyBwAq@q@d@i@_@Tg@]q@_A_Aw@OY?WSK_@}@g@UkBmBU[G]c@k@a@]wA_@g@a@Ma@~DSoF@kAw@}BoBGSyAiAaGgE[c@uBaHS]a@sB[c@uB}Ao@aADSWk@@]YsAQi@SUQq@Ci@Wq@AkAu@aE?a@_@gANc@Wm@AoA]{CDWS_@DSQk@F[KeBSe@Qy@K{@j@aDHG@[GSe@]IHDSATw@EMWE]FAOTPCCr@D@Se@OUN^RNt@Dk@FQa@AoAIMJUC}@OUu@aEOQ?aA[oAKuBo@uDC{@W_@EoAk@mAVQ[s@cAoAMm@OC?w@Qq@EHEOFUk@_AuAkE_@yAFi@g@wAEa@Uw@YKKm@a@e@I_ADSOe@DWy@}BI{@WWQy@SM?S]eAWMIk@PMG[_AiBe@c@La@Ws@k@eADKGOk@k@Ym@J]G_@i@cAa@[Og@Ie@A}BKWDKs@eBXYBU]sBBe@Sy@Y_@@WiAoEg@w@[sCGEGk@UUFc@WmBcAuDm@e@o@Dc@So@{AU]{Aq@iBi@gBCiDiAsDa@qA_@iAEmBy@mAAyBs@_HkCy@MOQiDiAiAq@]m@kAcAwByAmAgBsBgENg@[kAoAsBi@eB_@a@wAk@oBAoHeAiCqAeBqBs@sA[yAc@cD@u@c@{De@yAu@kA]YuAa@SJi@My@@mA\\gH`D@LJ?~@a@`@e@zA{@r@u@zDIx@Vd@`@z@vA^lCK@APVhCFL@x@LNNtA@dBh@tAZ^l@TDRb@ErEdC`Cn@PVXInD^hBj@tBbCnD~Gh@|AxAxBlDfCnAxAPd@bD|@d@ErE~Ar@j@n@D`@^r@RhGdAjAh@nA?x@\\v@@nCb@t@Zf@?j@^xBTnBn@jAh@hAjA@NRHz@p@^d@Xt@b@bDTVIn@",
      "stravaUrl": "https://www.strava.com/activities/19184062867"
    },
    {
      "id": 19141200612,
      "name": "hızlanınca sağ dalak yavaşlayınca sağ baldır acıyor",
      "distanceKm": 7.51,
      "movingTimeSec": 2368,
      "formattedDuration": "39m 28s",
      "pace": "5:15",
      "avgSpeedKmh": 11.4,
      "elevationGainM": 11,
      "startDate": "2026-07-01T20:59:14Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "qvkyF}txoDIZCABAJXFHBTX|@FFZ`ANVH\\z@vBRp@b@bAJ`@R`@n@fBNj@`@`Ad@zANTNb@@PD@J\\?\\]z@K^A\\?l@CZW^GBW`@CJKDIJe@p@]Tk@p@c@Z]ZQVUJWXYN}@Xc@Jm@T]HIFIAKH{@Xc@Xm@t@u@|BMTFVAFMDi@v@IVa@b@_@\\e@XK?ELKDKNM`@Ch@Q^?l@AT?j@El@GR@p@CLAPKXCXGJQfAAZK`@MlASfAu@x@QXwAvAOBST]TWZ]N]`@c@Vi@h@KBINe@ZMXODcAv@iBjBE?ELQFUTi@r@UD?DELmA`BONe@t@MDMTOJMD_@b@YPO^IDUZK?ELOTcAf@CNELkAxA]PMT[LEAIJo@X_@V_@HSPg@DCDODURWFOJMCc@RM@IBEJaAf@WFUNe@RM@OLWFCFQ@_@RI?c@L[RU^IHGR[p@e@f@MVI@K`@?ZQ\\k@~AKLELQp@WfBa@pBK\\IJ@TSv@Yj@APIFOf@Yp@AJ@PEVSEE\\w@t@IRsA~AWRe@d@IPyB|A_@d@G?GHMBeBdAq@PKL]NIVOAIFEHWDo@@[G]KYUE?CFQK[BEUiAQYQWBWKMME@q@QW@]IO@uAXq@f@E?Y^kA~@{@`AiA~@y@|@]VKNcBxAo@b@_@JWRGAADq@ZM^AJQR]TELGB]@QEYBOCGK_@CKDYEUUm@a@UUOSUSMEIMa@]_A_Ak@[o@s@GK@GEJAN@Fd@\\@HTZFBFCPX\\VND?JXTRJBJX`@JBJN\\Xj@PLHLBBFTHHJJABL\\FPC\\AJBXE`@MBADDTQBKHFD?NS^SJ?T[t@[TWH?b@o@PKHMB?VWv@g@HQDAJMvAiAbAiALG`AmA\\[b@[h@SVALKb@EN@XPXFPLZ\\JF`@|@JQPFd@G`AFPCZFp@AFDF?h@MH@b@MNORGZEx@i@\\MHOVCp@]Z]XKTSPERK@KBCb@@NWVIHKb@MF[LGJO\\Yb@k@@If@WX}@JUDUHQFAAE?CBBBGBc@HAJi@CMZg@HCJUFEVq@b@_BH_@Ba@Jk@ZuCX{@f@{@B@FULWHIBS\\e@Fc@NO@GLMBOCMP[^k@~@a@BKBCR?LKRC^?XUh@UDG`@K",
      "stravaUrl": "https://www.strava.com/activities/19141200612"
    },
    {
      "id": 19120570264,
      "name": "erken kalkamadığım için ceza koşusu",
      "distanceKm": 2.74,
      "movingTimeSec": 845,
      "formattedDuration": "14m 05s",
      "pace": "5:08",
      "avgSpeedKmh": 11.7,
      "elevationGainM": 6,
      "startDate": "2026-06-30T11:39:23Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "kwkyFqtxoDF?Td@HXABFLXx@Xj@BPFHFRHP@RBHJNJXFV\\r@DTRf@Tp@FHJ^LNDVr@vBXh@Lh@FFH`@r@`BR|@ETg@jAAj@BhAEHMAAJo@`AG@QNEJI@MPiAdAKLQJWZmAdAOFG?MHYF]PIB?E^EKBEVEBYIAGQJ]LEAo@RWJOHWDEBCFa@TSVI?Q`@Mj@Wv@I^KRCLIRWTUb@c@n@]Vu@d@UXSf@SlA?fAC^QlA?T_@dDGTE@IF@TQnBGV?PMR]p@QNuAzAYPOLKFGLQFOLOFMNKHKBEJI?KCEZELIAC@YZOHU\\MDILULILWVEJMBSNcBxAQXOHUVu@z@INk@n@OLGL]d@yAhBKJMBa@^AGD?A@@CBB?AQVUPETKFw@x@IHGAOLM@OFUd@MPIBAHa@f@c@d@QJCFc@VAHUDWJSLEAIFIA}@ZE?BCC@SN",
      "stravaUrl": "https://www.strava.com/activities/19120570264"
    },
    {
      "id": 19084344246,
      "name": "hayatımın hatası çok sıcak",
      "distanceKm": 3.01,
      "movingTimeSec": 917,
      "formattedDuration": "15m 17s",
      "pace": "5:04",
      "avgSpeedKmh": 11.8,
      "elevationGainM": 7,
      "startDate": "2026-06-27T13:55:04Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "{vkyFgtxoDEGHZ^jA`AzBx@fCXj@J`@NZFZXl@FZj@pAJ^DHrAxDDBLh@Tj@@FCDG?KGGHg@tAOh@i@rAMPc@`@CLUJ_@`@[Va@`@SBY\\KFUV_@ZwBjAa@HK?GEk@?m@XMLINeBjD{@nAYh@MNQLYFSNCDK@]NUAWFYPMNGR?NJfACDBj@IpAABOnAGdBGf@Y|A?L[vAQ~AGLANKTEBELMHWZUN_@^KZERBFAFORO^QXGZKNKBMLOHOTk@b@sAjAiBzA{CtCKBCFMTG?EB_@l@GAE@MZg@x@IFGL{@hAYXMDe@d@_@h@o@l@UZs@Zw@hAKFUXE@CFUTKR[RmAd@KHODIFYD]RI?CECFYLWPe@Pc@HIFO@o@d@mD|AiAZa@L[XADGHG?AACNMV",
      "stravaUrl": "https://www.strava.com/activities/19084344246"
    },
    {
      "id": 19023582200,
      "name": "hava sıcaklığı, fatigue durumu, kulaküstü kulaklığın bunaltısı",
      "distanceKm": 5.08,
      "movingTimeSec": 1601,
      "formattedDuration": "26m 41s",
      "pace": "5:15",
      "avgSpeedKmh": 11.4,
      "elevationGainM": 9,
      "startDate": "2026-06-22T18:19:47Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "gwkyFotxoDPl@HN`@lAFJHDd@rAFBAFH\\JJNj@Xj@X~@Rf@?FB@HZPVFVHNb@nAX~@n@lBBL?FHJX|@LTDT@RKf@MRK^EdBCLIFUb@Y\\CLYPGLY\\ODMJi@f@U\\u@j@EHc@^MHG?EHMBIF_@FMJUDIF[DeA^Q@MD}@`@c@^MXONa@tAE@Ur@Gb@INiA~Am@b@GJOBMHKJQVOd@Mp@BPIXCtADZIh@CV@FABA?ALGPi@|CQx@UlB_@`AY\\KP_@XGNEASVMB?Dm@b@AF_@ROPIBMRQHw@t@CHa@REFSP_@XONc@Ze@b@OHUXu@n@MRYRKP_@XcArA}@`ASXELI@MXKHc@j@QRSHa@^GHGBKNIVMHQTMJYVG@MJQ?MNOZGDk@r@CJI@UXENm@XILE?OHODQL[DMLQBe@VSBKHQDWRu@TYBSLGJQ@ULIHK?IBEHYNgBt@QLI?a@Nq@P]VOTIDSn@OVa@b@SVUj@AHE@CDAHDD?F[f@Qt@EJC@Sj@[zAU`BM`@Kp@Oh@Gf@EHE@IXGA?DEBMd@APMZIFSp@C?BJCBFTIAG@BF?HE@@EDB_@ZW^ENSPMP[RUb@UVEHYTOTa@TKHIDQNg@Xc@`@[RGHMFILI?UR_@NIF]H]ROBCEE?EBSVK@[NCFMCCLG?EFa@Hc@C_A]WGEEO@[MS?QOm@Me@I]QM?a@KQ?e@GU@CBUFI?EFGAEBODCDI?WTICG?ELUNWTGNI@c@d@QLKRMHECEHGC?JKNSFEN_@Z_@b@URs@n@MP[VCFG@SVG@GH?DG@EHQFQRCAc@TUHQLCBG?KJQFO^CTC?URQHIGC@ACOJIESJQBQECCO@AGGCYAKEE@QOAGOIOAg@]IICKGAAEWQQSOIEKWMCEECGOSKMQCCC?AEGC",
      "stravaUrl": "https://www.strava.com/activities/19023582200"
    },
    {
      "id": 18932855662,
      "name": "2nd 10k",
      "distanceKm": 10.04,
      "movingTimeSec": 3324,
      "formattedDuration": "55m 24s",
      "pace": "5:31",
      "avgSpeedKmh": 10.9,
      "elevationGainM": 28,
      "startDate": "2026-06-15T20:17:22Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "_wkyFmtxoDV~@RNJh@V`@Df@LNxB`GPv@lB|E\\pAfAtCSGY`@e@tAMf@i@dAaAx@eAfAOVSF{AtAyBnAm@Jy@Em@V}AlCSl@kBrCyAz@aALs@p@Eb@Jd@Bt@MtBO|@EbB}AxJa@r@qA~@OfAe@t@_@XG\\U@sBq@j@ZMAT?KA^Pd@@r@O@LGIKZWBm@x@}@l@gAhAq@^QZgEzDyAfBaBzBw@h@k@p@EPYJk@t@}@d@kAfBqAjAiDzAk@Fa@Z_B`@mBpArBuAPBf@YFD^Ot@g@X@r@_@FQv@I`Ak@NUr@i@t@gA@WbA]T]p@g@H[PGl@y@VIFS`@[FSzAoB^WfAyAl@g@RBF_@`@c@VA?GZa@b@[L?JWbBsAb@m@PBrA{Af@a@`@M`AmATIl@q@Xi@j@oDZ_CAKL_@BgAF_@HIBwB`@}Bl@y@TAb@Ur@aA^Q^{@?_@Jg@XERuAR_@bAq@fEmAXQ\\?|@e@TUBUz@aAlAcAdAkAz@q@t@Sv@[\\]BQ`@Qd@q@V}@PC`Ao@HS|@o@J]SOdCeCHc@NIz@yA`Am@l@iAz@uBt@kC\\w@B]ZiABmAHc@Ao@?e@L}@JS@YJKH_@?UGWH?J[EeBJcBN{@^[JeADu@Mq@_Ac@KU{@i@iAe@yDoC_Ac@{@w@oEmC[[y@c@qAg@E_@Rm@?_@i@OOe@c@SY{@YMa@mASKGSm@o@a@U@a@g@cAQC_Aw@m@WCYY]@Sq@[SQMk@k@Wi@gAy@y@BISUw@mBq@m@Oo@OUGi@i@eAUeADk@K]MSCWSWCUI_@[g@@k@Sc@Kq@?m@OaB@UGL^f@Qd@Dr@Ih@l@fANtBb@jA\\~BrAbC`@pAlB~B^pARRJd@b@r@PLNEFf@xAz@Jd@d@j@d@b@GZP?DJZM`AhA^v@VHf@b@?LTRO~@r@LJd@NV@V\\r@NFPl@?fCOLCLN\\I\\BbCGr@F^GZSNDh@EHGj@@PWr@G?BJQrASl@DHCb@YJK`@mAt@}@v@Q@k@Us@f@_@j@m@Nq@h@MVEb@c@Z[COL]ISJ]Ag@P",
      "stravaUrl": "https://www.strava.com/activities/18932855662"
    },
    {
      "id": 18841728810,
      "name": "devam ettirmeyi unutmuşuz 15 km normalde",
      "distanceKm": 7.78,
      "movingTimeSec": 2467,
      "formattedDuration": "41m 07s",
      "pace": "5:17",
      "avgSpeedKmh": 11.3,
      "elevationGainM": 25,
      "startDate": "2026-06-08T21:45:45Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "ewkyFktxoDNPb@~Ad@dADPn@|ABNn@dBRb@Nf@JLBRv@lBFZVj@`@vAZn@n@jBH\\CZUz@MRAd@?JFH@l@BJNBXCPIhA_ALGFMZYj@s@b@SZa@JUjAaAJUEMIIBKZSJATe@~@eAL_@l@s@Zg@BKl@YZa@Ng@JKjAmCPk@@UHKDSJM`@oBPoADc@B}APmBVgALE?SJq@BwACULq@AQDO@k@\\s@HYPeBIe@KWsAiAw@_@qDeCc@O{AgAQKI@Y[YUo@YYY_BeA[IYUq@YIMWIGBQO]m@AGTe@?SEKk@]]m@OOMAISEYWCGc@_@u@GCCUI@ICI]ECESQIGOE?@UUYOYaAcAQYIDSIIBEIEW[WAMc@e@U]SEm@k@CSCC?Q_@m@[QEIY?M[GGQy@Yg@WOq@mAWw@U_@Qi@CUi@cB_A{EWmAII?]I[Eg@ES?]GWAc@KUI_@IeAa@w@?SIc@K]Ie@GEAg@[_@I_@GKI{@IQBKMo@@EPMCOc@s@a@g@a@WKSOKQ]i@k@g@]QBYSKOw@]Y[QC_Au@KS[WKQ?GOG_@k@s@[a@]k@YIU][GS]Y]k@KIIS[YMQeAiAKc@YUw@cA]Q_@g@c@_@iAuAOK[E[MSMMQK?W]i@UEMG@KWc@_@ICMWUAQOEO]I}@w@SEa@YCG_@WOY]UGOKCSUQE}@o@KMYOEK]YMCM_@CUKM[y@Wy@OWGa@GIOm@MSAQQc@]}AIWu@y@c@Q?GeAu@[oA?KEO@KM_@@GMo@KEGKKi@GI@MG_@?MGQEe@KYE[BICM@KKmAOYg@sCIMQKEO?GHG?c@Ii@E{@OcABQAYGKMm@@k@]sBMiCMS@UKW?UCK@EIa@?US}@Bg@G[OSKSG]ECBSG_@BQCi@IO@IUg@@YCKHYAIO_@O{@Qe@SoAOmA@UQy@Eu@SgAQoA@EG]KMBYI[C_@@KGOQqAKS?_@KWI@AUMa@[g@G]S_@K]a@iBe@{@_@qB]eAOS?Mi@aC]cASq@Ga@QSEc@Ug@W_@Cg@Mk@GSIAGM?g@aAyDOUEYBKGYKEIO@SMUKg@MG@MS[?UGGOq@IGK]QUCUIOCSCAKm@OOIYUi@OCGS_@s@?YI[DQ|sBlgF",
      "stravaUrl": "https://www.strava.com/activities/18841728810"
    },
    {
      "id": 18759365333,
      "name": "first 10key",
      "distanceKm": 10.05,
      "movingTimeSec": 3183,
      "formattedDuration": "53m 03s",
      "pace": "5:17",
      "avgSpeedKmh": 11.4,
      "elevationGainM": 18,
      "startDate": "2026-06-02T20:10:07Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "aqkyF_hxoDJP@PRb@VfAj@~@`@|AVRCHHLHf@HL@Pt@`BRv@GV@Fa@vAEpBmAzAe@t@WF}AfBYACPs@v@k@ZaCv@}Ab@uAt@c@l@Qd@?\\{@vBuAnBe@XIPcAt@SnAEhCQfA?PL`@[p@c@bC_@rCM`@kBxBAHc@\\UFQV_@TeB~Am@^sGzFkC|CQHcAzAe@ZOX_B|AmAzA{@f@ERy@hAg@TWd@{DfB{@VWRgATc@^UDUTMAgAn@uDnAi@b@a@x@@JS\\Sr@a@n@ANa@\\Bb@KAOJs@~AHp@M`@OVIp@eAdEO\\MPTd@g@x@UBMj@QHSn@MPQt@OPCR_@J_@j@QNIPs@x@YJk@h@s@ZUBc@d@M\\]?S^UDEJo@Bq@\\]FILMIQ^GC_@Ti@?UIOHKOWCQSi@KQ?q@UCGMAQMCFe@QEFk@[kA@OQs@RYTu@XgBzASFOX_@JCTy@p@u@~@a@ZOVODkAhAIRI@e@b@kA\\STSF[`@CRKNiAh@i@Ci@Su@ASSWCGOu@m@IOSGg@e@EWq@g@KU@G[@g@QIYeAcA`@b@AVJDh@z@VF?JVLVZLAFPLHBP`@X?Ff@PPZRBrA|@\\HDQZRJG`@LVK`B@\\k@\\WP?jAgAl@_@@K^Ud@q@`DkCfBkBh@a@HQzAeA~@Sd@@RNL?\\d@LCJUz@p@HPXBZTTFhBBnAIpA]tAq@TUz@Ul@[PUp@c@z@ONYdBq@L]v@eAp@s@FSRMr@sBEEAYHGAS\\SVw@b@a@Pa@n@}Bj@mFXy@nAcCNo@PSb@qANYAKLQb@UVBNQNAl@]\\E`@Wx@Y^a@ZK\\_@JACSHOf@Id@SZYp@Qr@e@XCRQP@hAg@zAaBd@aAdAi@p@s@dAqAJUTC`AiADQNC\\s@NERYNAf@}@v@aApBkBvBcBrAwAj@[p@q@f@Up@s@b@QtBcCPYNy@HaAHk@LWJgAZaBDcALaADoB\\eBj@y@ZKl@e@p@gATS^w@?Ud@mAPw@PUTWbAi@n@M?ER@j@]tAWrAm@n@c@BKx@s@FMnAiALSp@e@Xo@f@EDKb@EN[XEPU\\OHQNFDACINAAQLy@AKMMD[UMc@AGGs@OEO_@m@e@yAiAsC",
      "stravaUrl": "https://www.strava.com/activities/18759365333"
    },
    {
      "id": 18663894947,
      "name": "başağım ile",
      "distanceKm": 5.02,
      "movingTimeSec": 1732,
      "formattedDuration": "28m 52s",
      "pace": "5:45",
      "avgSpeedKmh": 10.4,
      "elevationGainM": 0,
      "startDate": "2026-05-26T19:57:18Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 1,
      "polyline": "o}h{Feak|ECb@@VEXON[f@Gt@M\\@PGDM`@G\\KNIXC@EXMTGPG^M^@DCLKLS`AKZEBA`@STCXQd@EVQ`@M`@BRIFALKFCTOV?NIFCFAROV?L[|@EDGd@KL@HOXEFK^@JMXc@j@@PMLCN@FYf@ALKTAHGDAD@HMJYbAIHALGDOh@GFIREVEJED?NYNMLKd@OXSz@CBMZ@HA@AFIDO\\EBUf@GV@PU^Gb@Yt@ANIPGVCL@JM^ARUj@AHIVAFOJIZGFCRGJOp@ANEJ?JGFQt@Sp@MPQh@KNMdAKTIJAJGLOLCFUn@GHEREDAREDOH[DGHCN]f@GREBG?EBAHEFGFC@CAIFGJEVGC?HW`@[bAUZQ^Kb@GDCVIHWt@I?@FIVKj@e@dAuAlDC@Kh@KVGDMd@QTQh@OJCFUr@KNCNILCTUTI\\EHKFEHBHIP?FGFE@CLGFCL]j@GTKJITc@f@IRSP]p@AHSTGN?FI@EBEJA\\ELORGBELMHe@|@A@ECQf@EBEPQVAJOJIVGBAFKJAJIDSVUf@MFGLiAdCQRWd@ERQHMLQHYd@QJYt@AJSNAJC??DITKHEHc@d@ILCJCBBNGBADOJIJIDOXI^OZ@UPYNOHUJK@Gf@u@BMf@g@Vk@z@qA@IDA@GHMTSFUJGHAb@y@NQd@kA`@y@`AqAFUHEB@DAHODQHGAGDAHOHKDSRYDOd@k@N]DCFSNYHYHQ^g@Zm@FCJOJYNI^i@D?Nc@P[?Ij@cARg@HMHYDCRe@LOVw@Xm@LG?MLK?GFQJQFW@ULMF[FGN?BUDM@MP[AQCAEBAFPOJCFQBQFINc@LQVs@LWHa@?IFOBURa@Ni@FEHYXc@@IHMFUVi@DUZe@@MZMBEAMNIJQZa@AECH?MNk@@GDIP@VELMFKH_@d@w@l@qA@QPk@@KFUPQr@kBLk@NgAJQ?IDADKHYFG@MFIH]RYDe@TiANWF]N]BSJ]DIJk@",
      "stravaUrl": "https://www.strava.com/activities/18663894947"
    },
    {
      "id": 18557050727,
      "name": "yetti",
      "distanceKm": 5.88,
      "movingTimeSec": 1826,
      "formattedDuration": "30m 26s",
      "pace": "5:11",
      "avgSpeedKmh": 11.6,
      "elevationGainM": 19,
      "startDate": "2026-05-18T19:21:32Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 1,
      "polyline": "_wkyFysxoDT`@Tp@b@hA@LPJJT@PHJB\\FFN^Lb@Pd@DBDRBDRh@P\\d@|AN`@HVALDR`@n@Ld@|AfEDVEV[t@Kh@@XCV@VERW\\GPIFELg@j@GBIHGJG@AFMJc@TENGCSPKPMHEH]PCNm@f@ODQLm@RQB{@ZM@UJM?OH[HMHc@Le@Z_@`@Qb@Ot@ANEHGTKVSXGXMHYb@OFA\\WLKLIPGDQHUPG@QHSZK\\?LQx@@b@Gx@@`@GJCLA`@IZBFM`AI\\?HEXCBG`@EFBDCRBH?FEDGRAFBLGXCXG^IHC\\KLKTcA|@GB_@`@CH[LOVE@MJSTG?GDY\\M@EDc@b@[RI?CCEDAXCBIBQRE?EJUHOP]TCDALM@GBcA~@]RAFc@d@IBOTID]^ILQPQVEBILYZINID_@l@E@a@f@KZSLGHIFUF]VW\\Ub@GT?LYGIBKPGTQB_@R{@rAg@d@KDEJONSFKNIBGJGAYJwAl@AAK@MLKCWLWP_@NCDUDS@SRI@GHOBIFUFm@ZCFDL?HVPPKD@HKJCJOJAn@e@^IFGv@WXSj@QDEPCf@[n@QHK?MBG\\I`AaAXQBGHAXc@h@i@ZSAEBEFSHAXOHAJSLGJKHMBMHERW\\Y`@k@PM?GNSXUH_@DEL@BEFAFSNQTOTm@b@a@Dk@BGVMNOBKJCx@u@NIPQJEf@]f@m@NILOPOBGVSJEDINILSf@[LQHARYz@i@TKFMLKd@q@JGJCF@FSNK@EJQXs@Je@N}AJo@@OXyAAGHa@Bi@CUNw@@_AF_@I[Ni@DABc@Pc@TQ@INOLGj@c@DAZYHWHAJWDAT]DI?MXWN{@Ba@FGJ_@HQf@q@bAg@HIH@DEb@I\\KNCFCHAJKF@PCXQv@UVKj@g@DOREBIJGXa@NIFIJCXUt@{@`@c@Ze@DCN@LE@INOR?NCLE@GJAFMNCJKF[HKDCBGREF@FEJQDq@EOA]OOM?EII?GFKAGB_@KCYCCE?MSK[?GKIG[GE[y@K_@[s@CKO_@_@cA?IIIKc@OQa@uAoA}CIc@u@oBCOQSAOYs@Qm@",
      "stravaUrl": "https://www.strava.com/activities/18557050727"
    },
    {
      "id": 18492347953,
      "name": "intervalsal",
      "distanceKm": 3.16,
      "movingTimeSec": 951,
      "formattedDuration": "15m 51s",
      "pace": "5:01",
      "avgSpeedKmh": 12,
      "elevationGainM": 27,
      "startDate": "2026-05-13T18:38:53Z",
      "type": "Run",
      "prCount": 2,
      "kudosCount": 0,
      "polyline": "ivkyFasxoDP`@VfADDJVVn@Jb@p@zAJd@LPF^DHH@BZDDb@rATf@?JvAvDr@vBVp@B^m@xAA^@j@CN?DJ?JJRBFAFEBKHKN?RGd@a@Ra@HBZo@DDHAFEF[FI@KBGNA|AqAD?RUHEFI@UAGKCHSDG^QHO`@g@LCTe@FCF[r@{@?SDIn@i@RBLIBOFGPk@F]FAJIBGHMjAwCLk@@WDAJg@HONs@D[?YNu@AQBc@AgALg@DYAGLM@IAYHI?[BKLS@ICU@OL_@CAKu@@KLwAHg@JSPOLYEKFUJ}@Ca@KYEGUOEGKCIIG?IKAIm@YGKI?UWG?_@UE?QQ?Ci@[]MEOGIE?EKc@OOIIMo@UOSE?W]SECEWOMAGMc@UOC}@u@WOKCUOKAEOKI]QWGOCA@I?[ECGGEQ@KFCJBHAR@JKf@AHD@ILE\\DTAVDD?\\BFEl@@ROlA?NGTGl@OZ?NQfA@DOd@WlAQD?MDMMFM@IFONCJKPEBKRE@UPILMFUX_@NKJg@RQ^k@\\MNIBCFM@OLSVGB?HMXMBUVG?QFICSLICIDGAKDI?CFGEIBEGG?AISDI?EBAKEC?FKNULOGKQ@C",
      "stravaUrl": "https://www.strava.com/activities/18492347953"
    },
    {
      "id": 18415325355,
      "name": "çıplak koşma zamanları gelmiş",
      "distanceKm": 6.01,
      "movingTimeSec": 2056,
      "formattedDuration": "34m 16s",
      "pace": "5:42",
      "avgSpeedKmh": 10.5,
      "elevationGainM": 41,
      "startDate": "2026-05-07T20:04:20Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 1,
      "polyline": "wvkyFatxoDH^BEDJ@?HT@TZn@@JTd@H`@PV\\hARf@J^Zv@BNNX@L~@jCTf@H\\@PDCJRNj@R`@DRv@xBBH?ZQ^EVEBK^CjAEJCLDBeAvAKF?Fc@f@WRYX[TEH_@XGJ_@ZIBGJE@]ZSJk@NMHWD[JGFI?EJQ?c@NOACFo@Rq@Zc@f@ALGBADEXWj@@FIXMRGZUh@?PQHKRUR[b@OFk@f@SHELKB?DQXCLEF?PCFC`@C@?b@CH?TCV?ZMZAJJ\\KTCf@CDGl@EJE\\GRCVKJAL@TMt@Cd@KPA^_@`AYZCPUJUXIBMJONEJIBMPE?EJOAINCH[FW\\]R?BOLINk@\\MTE@[\\CEILIFQRQBEDCNSHMTSLMDQRg@`@GJ_@Tw@v@QXMJO@EVGBaCbD]lAHUd@o@l@q@DOTSPSh@a@LUHYJERWZUDKf@a@LUVKH[VENONQDOAMBIFEFMNCVOX[HAFEDKXIDQb@YFKPMDMFAFMDCJAZ]JSHAFGVKLMLCHKROv@aA\\]\\i@To@Bq@Lw@?UDGJk@@YHYVsABSAk@DQJs@CQFGBMCI@g@LgAH]Tm@JGLQNGTSJEXSf@o@L[FIBKFEVg@H]@WHQ@MLQH]L[l@k@XSTGJKJAp@Wh@IFEPGL@BE@INAJGFAFELAZOXGfA{@FMHEtAqAF?DEz@cAJE\\q@J@DA\\]XKLDLI@OBABFDGJCB@D?HGDDBEBIPMTa@HAJOLe@@KCG?IGMAUIAGMc@@IC[MG?IIISCWECI[[u@AMGGYw@GWGGSg@Ww@BCa@u@K_@Ui@?IQ_@Qm@[k@?IUo@AIMYI_@KMESO_@EU[m@Qo@MSCSOWEQWi@AMGOKo@MGISAOM[@GS_@QSc@SSEQEEOQEG@EAAFE@]EI??HGBGCGGICKMI[k@]EK?MQc@JmAO{@IGCKIGWIWCUDSHI?ORI@QPK?GCCHQHED[NMJIDOIa@a@?Kc@a@GAEOSEEGMDAJ[@ST[HEHK@SNYLOBEF@HICa@Lc@@CEG?GDUA]LO?_@JG?CAi@LCB]@c@Zk@h@]NEI@JCTYb@_@Ru@TQ^CNO`@GF?JEFEZWv@ECKBIM]USCG@]OE?MEYL",
      "stravaUrl": "https://www.strava.com/activities/18415325355"
    },
    {
      "id": 18363239602,
      "name": "refreshlenmece",
      "distanceKm": 4.84,
      "movingTimeSec": 1587,
      "formattedDuration": "26m 27s",
      "pace": "5:28",
      "avgSpeedKmh": 11,
      "elevationGainM": 44,
      "startDate": "2026-05-03T20:03:19Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 1,
      "polyline": "mwkyFguxoDDPP\\Ph@JPl@fBVj@\\hAfArCh@~ARh@NR?FLh@LJAFHF@JJX?FX|@\\t@ZdAHP?HHLHZARQZI\\MZCb@?z@APKJi@bAUVIDEHYZRIJQ@[RCDKJGLQPIHMNMNGDET@JEBC?Q\\CZONO?ELK@GNGLQFQPA`@i@l@e@@MFOHIr@_@NC?IBG^]?GKMKECGHEDGTK@Eh@i@NI@GHKBAVWH[\\m@LI@QRER[HWHINCKI?NNBHMNIACBAFWHMBMHKN_@FCD[DIAMBIAGV[FMHABGCETs@P{@BEHGBm@JY?GHg@?QJUFeA?c@NcBDQHm@Vo@Jc@AkAEk@@WDW?[TwAHSNOLU@WBWHSAe@E]m@u@m@UWUUMi@_@OS_@OGGQIKMQGQQKEWOGBCEGAQ[M?EKWKIOKCWWSE?GKEIKQGMIEAGIKCSIMMGMYGUW[OCKSEa@[KAMMQ?USE?IIQEW?ACQDCCG?EDEKCVBLCJ?HMVAFBf@ETFDBf@CNGF?HEDHLFh@Ir@Kb@C?Ah@GP?RGTKPBLCZKV?FEDQXMGCHE@CFGD?TQ^AHDFONIEE?G@ILCCi@z@YLEFERYNYXMVGFENECYXEBEACFMBORQJMPG@GHEBAAGDYd@MFG?GDKRMLGBKAEFGBG?CCQFOAKFG?EDKGOFICKDEAEQ?LKCMBEGI@QQAMCC[Q@QEM]a@KGKIAQF[?UDKCGA]FWCGQIM?WQWEUBEAEIUNCLc@RCFQDCJACADi@RIHSHMAMGISKG?Gg@q@AKMCIDGHa@?IBGBGHG@]PKJSBACIFQBOLADKDINWBMDIAKDOCSPECCMC@WAUJIJM?YFU?CDEAE@KH[?ADK@UTG@MHADIFGNIHS?Ib@E@GJMDIJ[FEFEGM@ORYQI@MOMC[CKKOEQQEAIQGCIKI?EBGCMQGQSAECBEACc@OODGEEGGUMEI?_@SKX?HIJAFYHIPIBMTCCGTSPS^I^CDIXOF?FQNIX?FCTDFCZBN?PDPAFFZEDDr@F\\E@?PJH?J",
      "stravaUrl": "https://www.strava.com/activities/18363239602"
    },
    {
      "id": 18320342488,
      "name": "kasımpatı",
      "distanceKm": 6.54,
      "movingTimeSec": 2091,
      "formattedDuration": "34m 51s",
      "pace": "5:20",
      "avgSpeedKmh": 11.3,
      "elevationGainM": 44,
      "startDate": "2026-04-30T17:44:44Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 1,
      "polyline": "kvkyFqsxoDD\\v@bC\\l@Tr@DFN`@DDBPtAzDFTt@rBRr@LR`@pAJPv@|BB\\Wh@AJGJK\\ChBUXQZEBG^]HEDENUNGJu@t@MHG?GNYPINC@CHE?KDKJEPGAKJc@T]JI?IHaBf@EFM@QHYBi@RM@c@Xg@f@ILAXKFKb@Yn@GVCDGBAF@LCLwApB_@VYZ?D]JEDOPIb@G@IhAENA~@BVQb@BPI`@BTENBJSjAOl@E^CJ?JGHA`@?FKh@CZQ~@CF@HGJ]TILUJEJEAeApAMDc@b@OFAHMHKDONSHa@b@e@X]^CJUFe@h@KDQNOVOB[XIBEJSRWHMRg@`@KLIPa@ZEJa@^]p@WRWXCHWPIRQTOROJALEFQJGJO@KHGRUNGNODGPYVCb@NABGH?r@iA`BcBFSHEFO^a@Xa@f@g@LIJQDMLMLa@\\GFIH?t@cAAIBGF?JEFKVORQD@HEPYLELU@ENCHMHGRAHULGHQD?LG@ELENSFALOLIPSDCLOHOH_@DAJINYHAPMPCPURK^g@v@w@Pc@PEFG?k@BEN{BLW?YDKB_@FOD_@DGD_@AKBKAKBk@P]?a@AQBI?SGOECJk@HQDi@FUFCHWJGD?FEd@YDGFAR[HENSDKLGJQXe@HGJYLG@OASDSNm@`@eAf@e@FAJDPAHGHBXSNANDPGPMN?NGHGNAVGJ@@GFCZMD@JKT?NSFCJUJBLQFBJUh@UFKFCHUHIF?FETURWHCFKXIZ_@DMf@o@DED?@GB@@KPYTEZ_@RELMHAHEHA@_@DEHELUHS?SCOGEEMBGD@IC@GEKYK_@FUCMGOWUs@KOCWKOO]I]AKYk@e@uAOYE[KKGQC@E]OU?KQ]o@gBI_@g@oAGWMUKe@KQQe@U}@GIQc@IOM]MKCOEEGoAIOEc@gGcDEWGA[a@KSIk@BSCWBIAGEEAMEEEMKOc@Q_@CQHK@SL_@DIHCJYXG@EF_@JSRGAIK?EIGU_@IEGMY_@YQIHG@GJO@OX[BQJQBUL[HILODEDQDS?GBYEKHQEI?IHIBSCCDGBK@AFIBCDKASBEDMCMJKCK@UNINE@SLELYNc@f@KBa@TG?MHQDMJIG_@S?EGEYKEGG?UMBSAC]IGMOAMKO?UOOAEISOQ?GEGKMESQOEU@a@CAF@XI@EFE@IR?HAJYDEHIAKNCIORBNAHKHG?GDKXWd@?VBTA\\D`AAHHxAEd@@^CDAJHLDTKZIPOHGES?EEYDCEOCKBIF",
      "stravaUrl": "https://www.strava.com/activities/18320342488"
    },
    {
      "id": 18282751496,
      "name": "bebeğim koşusu",
      "distanceKm": 5.49,
      "movingTimeSec": 1969,
      "formattedDuration": "32m 49s",
      "pace": "5:58",
      "avgSpeedKmh": 10,
      "elevationGainM": 23,
      "startDate": "2026-04-27T21:30:04Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 1,
      "polyline": "eevyFo_hpD?GGMEGEQGC_@k@GSIQGc@CgAKOAIDEEg@?aAGY?GAU@AMwBS}@Ei@EQ?KMi@?]K_@Io@IOAGBCCC?OI]OiAOs@B}AG]BMCGBWESEGA[Yg@Iw@KS?MM]O_@Mm@CAI]CUEIk@cBSa@EAGOGSOYAKKOQu@k@}ASWGUUMWUWKSYICAEk@i@MSECUEEIICK?eC_@E@WEQ@AAc@IyAGGE_@AMEc@Ce@Ik@ASEk@BQAQ@GDSA]@KBOEGBGAG@IEI?UGKDS@GCa@DKEa@LK?q@V_@DUF]AOBEEEFGBCFEAEDCFE@CDUG[_@]Sg@MI@KE_@BIPSAE@EFOHEFK@[VM?MLOCQLQAc@RI?WGYBEAEBw@JGLc@H?BIEI?OBGHECQHCHKFEJ?HUPINIDADMDCAMNEHQJINIFEFIBELGF]P?BIFEJMBOVIBGLWBGAGBGJKFCDQJCFE@GAWN?Be@Lm@\\CAEF[HUXKDWNG@zLuHJQPMHOBA@ELQBGNOFQZUDIF?FINABGHEXABCPCFBT@^ED@VIT@D?FG\\C\\@HAFBJ@HBDC@GD@JEh@?FEJSP?FCHMPGPQRKHDREJG^HIBFFPALPP@J??Cf@?d@YNCH?\\ILANGh@GXIn@AH@`AAx@Nf@Gj@?XGH?DBVCbADPFt@FJDd@@XDRAHBXBTAP@XHJ?`B\\n@Fh@XXHXVH?DHRXD@PTZRHBLFTP@HJDLb@NNFNF^JPT|@dA~B@HJ^Xh@?HJZAHDBHNLd@N^?JHV?FVr@EF@FJVDVLTH\\Dr@BH@hCHx@HFALL\\@j@Nn@?JNn@Db@FF@d@XjB@VFT?RNlBCHF^JxA?j@AJJ~@DDAFBP\\t@RXDJFBBDL^?JBNLFE?ABMAP\\NRDRC`@HP?H@NDFZJFZHRTXLRDPDBNVFDFPVLJ@FFHVj@d@Jv@\\P@ARNRDHFDARJ`@D\\A`@FZIVCJBr@KPBTGTOTATKDGNCROPENQH@DGT?HIRCHGJANK^KLKH@BKJARBX[R?BG^Kv@c@HK",
      "stravaUrl": "https://www.strava.com/activities/18282751496"
    },
    {
      "id": 18129534026,
      "name": "son raddeye kadar",
      "distanceKm": 5.73,
      "movingTimeSec": 1731,
      "formattedDuration": "28m 51s",
      "pace": "5:02",
      "avgSpeedKmh": 11.9,
      "elevationGainM": 9,
      "startDate": "2026-04-16T12:47:31Z",
      "type": "Run",
      "prCount": 1,
      "kudosCount": 1,
      "polyline": "awkyFktxoDDBHLLf@f@vANXHXJTDPR`@Jb@P\\BNHLJf@HJLd@P^DRL\\DPHLPf@Xn@h@`BDDDR\\x@Rx@JNBPRb@BH?TERCFE@CLQVAPCBCF?|ASVMb@MLMXKDOVKDGLc@b@E@MJEAKLSL]`@MHMPQJWXa@XOFKHsAd@e@Jg@TUBGHM?ODULUFIACFMLMDMTONQt@Qd@CHBFAFGLARGDI`@WXERQFELSPEHGVU@CHKFMNGBQLKAUVUh@?NQn@CrACJGHAFFVCFID?DB\\DHEPMNBL?PIVETIhAIVGf@GPA^@VIl@M^ORAFg@|@WLCJMNMHQXKDMRUFORQHAFCB_@PMXSA?DQLOVKBMVCBQ@MV]NYZULEHGBU\\SHKBY^K?UTSHELKHABi@b@CHc@j@UNe@h@IDM\\OPQHMJEJEDCJE@CJSTOXKJE@ED?FCDMHCJEBG?Y^UHMNCJSLYb@e@`@E@GHOFCFAHEDGDODKPUNUb@IVCBQ@GFEJKBSRe@TOBkAj@MBOFKJWLI?WHEAEH@JY@IF[JEGIDMZEEQ@GFMCMN]NMBMLi@RMH_@PEEG?EROHEA[LQBMLW?_@Ve@h@OXAJODARKTEP?RIBEFO`@^EVi@HM`@OLKLgAFO@DDGDADBJAHQPMDCJ@PGNAd@[D?VMH@JCV[DCb@CFGLGTUNC\\SF?HGH?BGD@NENOH?TOR?FK`@Q@GF?DEF?RK^CJUJ?H@PIHMD?BUPGNOLCP]`@]BANBHMFANYRQJCBIJEPc@RQNWVGBEAYZER]DA^[R[DCvAaBBIJELWZ[LAP]VYBKFMPMJQHELBFQFMPON[PK\\a@JEPABCNU\\Wd@c@TORCDUNSh@OBKTYRODGFEBILE\\a@HEHa@NE?GDC@Ib@QNKV[LGHOLKDKXUT[DOLOFe@Pa@?[FW?q@HOFc@HYDYDQDo@HW?OD[ASFU@MBCCSBo@GOHQBu@DC?QBEB]DMJQFGD?DIFEBKFAZOPGFWDGDAFKTMF_@D?DC\\g@@GROJa@JALk@@[JWDWP_@@QF?LO`@QLKVKf@IH?PMNCHGPAt@Yb@GLMPEVKt@k@f@i@p@a@HWHALKHQTMV]LKJQROJU@KL@PCBGZWVCFGTCE@B@AEA@",
      "stravaUrl": "https://www.strava.com/activities/18129534026"
    },
    {
      "id": 18076927679,
      "name": "Bacaklar dinlenmemiş",
      "distanceKm": 4.52,
      "movingTimeSec": 1428,
      "formattedDuration": "23m 48s",
      "pace": "5:16",
      "avgSpeedKmh": 11.4,
      "elevationGainM": 23,
      "startDate": "2026-04-12T12:39:51Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "yvkyFctxoDPf@HLH\\\\t@F\\Xl@\\fAJRFZHLDTHHDLCFPVp@jBFLLb@Vh@AFVt@JPZ|@DFCBLTZ~@N`@Lb@DDLb@APk@vAA`ACj@k@t@KXFHRf@GCLOJSNGDITONEDDEHPOn@QHKNHPIJKL_@LGFA\\]E@B[JUNMLUVKASHBF@DCNBHUT]b@a@@GFENSDC`@a@PSBKTMNSJGVF@UJULCT[JCHKD?LORg@RQH]FI?IFEfHkf@STYjBBNANCP@RGd@FV?NCHE^?VI`@GJKd@Wv@C`@DVCFAXCL@T?RIT?HCN@TK`@AR@@ILAJO^AJWb@Ir@]v@GZMTO`@ILEAEBGp@GH?DKJYx@GHQFCFO@KPE@GLC@ORMLYb@K?W`@QNCJYRIJKDu@dAAN?@FAHXABEDGAALEDMLIL]VSFO@EJGDKBMJK@C\\ELI?CZGAQHCPCH]RM@IJSJKJ[NA@BRYFU@KDQZYF_@f@QNG@SRG?IWQWKCK?m@r@E@UXg@LGNMFMRNLJTFCDINIDB@DG@HBFHHCJDG?MPYLYXi@^m@TKHGAWLWB_@NM?MBOHe@Jy@ZKLGBEDE?ED]b@I`@Wl@IH@DK\\IPDPCFGDKPGAGRi@|@LUJGHBLY@OF?DELWH]NW?GCI@SJWPk@JSJKFOLGBGLKx@[@Ml@ENCPKP?ZM`@KHIPAp@WTOLAHQDAl@i@PUJEPSNIZ]LCHQBUH@JCFMZW^q@r@s@FA@DJFDCT?HWJ@TELQFANUJGH?HQJMHY@QAWKGC??CFQ?OGCYAMFM@MAGCEIKAYi@Ka@k@mA[_AEWUu@Wi@AKMW_@eA?IGIa@mAOUBSGGIIe@eA_AmCAK[o@g@gBMY[c@IYE]?M",
      "stravaUrl": "https://www.strava.com/activities/18076927679"
    },
    {
      "id": 18065942254,
      "name": "eminönüsel",
      "distanceKm": 5.25,
      "movingTimeSec": 1596,
      "formattedDuration": "26m 36s",
      "pace": "5:04",
      "avgSpeedKmh": 11.8,
      "elevationGainM": 14,
      "startDate": "2026-04-11T15:26:27Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "cvkyFasxoDH^Vl@J`@LT?HD@^jADFJ\\HJBTHLTr@\\z@J`@FJJ^HPDDFXLVLf@Td@FF?HNZTz@JPDDLf@JVf@~A?Xg@fAEVCV?~@CPOPYj@KDANMFEFE?GBQ\\_@\\[HKLWLADORAJIBKGEFMd@_@REJWTMDM?]TM@k@RE?q@VSFOFKJKDSBMHa@FAFSJMTCBMEOf@SV@FEFAPEFIDKh@GL?LGNYTU`@GTOJQ^_@ZQH?HGFOBSAQj@I@GL?XCH?\\Uj@BJFHCF@PEN@r@Mf@APHP?FKZC^Od@Cb@EDGTUxAI~@IXCVKZSP@Na@TWb@SLQPKBOVSXKAGDGHELEB]@@D[`@SJEHULSXUJCDc@ZMNQLi@j@SFEFELYTG@EPIH_@PKLG?[`@E@YVG@CFi@f@S\\WNIT_@^CNMHCJE@ORMBCDWd@y@hAGDKAGDGX_@TYDCf@EDGAc@j@EJSDSHEFWJCNEJUNEJ]ZKNo@h@ABB@BHM@OJC?vEyDHK^[HGJ?HC\\g@Ta@RMP[PGLKJUJEDANO@GHO\\_@JQLKNYLKDKJGJMLNDGBOCQBUPSJDH?FGFc@BEVI\\_@HELOTMRWVKHMTOT_@J?XQJBH]LQLCRWLIHABKXUJOHCTWLCBGB?RQ?@@GHISRIINUDAVe@n@M?GHKLG@GJIFANe@VKPSDI@IFEN]Hy@JSAMb@qC?IAGLSJy@JYBsAFW?QDCAQBSCWDo@Nk@?IDQDK@ODAHKBE^_@XMb@[V_@FQ\\c@HS@QDALGJYDS?OBKN_@Ng@NUBUb@YBG`@UHA@CBBPQR?HMHQDEPFL?REHKFBNADEH@BGLCAGA@\\ERAv@c@Z[FC?@HIHCZ]D?HKJGACNQRIRWPKLQFCLWJAZq@RQLCHGT]RBNKL?HI@EFGF@FAn@_@HIDQRQTg@DEIc@?QCOIMKCGBMASDOCGBGMMKS[AMUe@AGOOKi@Sw@ECIWEGIUIO]oAQWSs@IKAOWm@COQ_@I]c@iAGQ?IIK?G[u@CM_@y@Ia@a@y@_@cA",
      "stravaUrl": "https://www.strava.com/activities/18065942254"
    },
    {
      "id": 15470614692,
      "name": "Night Run",
      "distanceKm": 5.72,
      "movingTimeSec": 2131,
      "formattedDuration": "35m 31s",
      "pace": "6:13",
      "avgSpeedKmh": 9.7,
      "elevationGainM": 3,
      "startDate": "2025-08-15T21:31:11Z",
      "type": "Run",
      "prCount": 0,
      "kudosCount": 0,
      "polyline": "gfg{F}ap|EM\\Ef@If@KRBb@KXINCNEd@Un@QbAGJO~@GLCJ@HYtAEBKXe@xBGf@KLIl@GD?FEB?L_@zACDUlAMf@{@|DIn@Oh@_@vBCZIZQjAO`@CPCBQ~@Ed@Sv@@PKb@Uh@AZGR?LEL?LCVEVMZYlAKj@?XCHE@Gh@EHMf@CVQ\\CPEF?FIHGRQp@AVIJANa@pACH@Fm@hBKr@KPCR]pAIPSpAIVEt@M`@EZUj@ATObAK`@GHM^?HEN@FEJANKb@EFKDAFEj@IPGT@HI\\GLMp@KRSp@If@Uv@YtAO\\Kh@MZ]pACFQv@KPQl@GFANOZCJi@tAFFAFWjA?TIb@?HKXCb@ITGd@EBG`@GJKz@K`@If@[z@A^IP]fAGH?JGJK^GJIR[d@GRGFO`@?FCF@FKh@IVEFIBGh@IX?FEBAFMT?HQTQl@IHGLCRKR@F]x@BHG@Kj@GH?DGN[fA@HS\\GF?NCJe@`B@HKPG\\KD?HYbAIF?r@KT?LEBM`@Md@KTANOBCBOf@IHAL[\\CLFEHA@OV_@?ENe@LKNCD?FM@?IHI@@UJa@JODSDCLc@FY?SJo@Xq@F_@FKVgANa@X_ABETy@F_@Pc@R{@@OLUNc@?GNYDQNWPa@BUNY@OJQX{@ViARu@Zg@HWNOLc@HIX}@?GJYDIRq@PkA^sABODK@QJg@FIL_@?g@FSDc@CSJ[?MFODa@JIJg@DA@IFK?GXm@CGDOGG@GDGVy@PU?GNk@HKF]FKJg@Na@Dg@@GDAPe@Fi@\\kALq@BCJe@DIBWNUJo@Po@B[DWFINI?ODWL[Fi@Tc@Js@AMDE?QRq@AWXu@?OAIBEFc@XsA?GPg@@OZy@Lo@\\kARi@?GPw@\\gAr@_DXw@|@aEL_@?ODMBUJ]DUFI?KR}@AG@GAIBYLi@BUDEFYBS?MHYHk@Rq@RcAh@iDXgAToAFKb@mBHICEFKDm@FS",
      "stravaUrl": "https://www.strava.com/activities/15470614692"
    }
  ]
};
