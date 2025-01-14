export function isIphoneX(): boolean;
export function hasIsland(): boolean;
export function ifIphoneX<T, U>(iphoneXVal: T, regularVal: U): T | U;
export function ifIphoneX<T>(iphoneXVal: T): T;
export function ifHasIsland<T, U>(islandVal: T, regularVal: U): T | U;
export function ifHasIsland<T>(islandVal: T): T;
export function getStatusBarHeight(safe?: boolean): number;
export function getBottomSpace(): number;
