import { Animation, StatusBar, Style } from "@capacitor/status-bar";

export const statusBar = StatusBar;

export const setStatusBarStyle = function (style: Style) {
  return statusBar.setStyle({ style: style });
};
export const setStatusBarBackgroundColor = function (color: string) {
  return statusBar.setBackgroundColor({ color: color });
};
export const showStatusBar = function (animation: Animation) {
  return statusBar.show({
    animation: animation,
  });
};
export const hideStatusBar = function (animation: Animation) {
  return statusBar.hide({
    animation: animation,
  });
};
export const getStatusBarInfo = function () {
  return statusBar.getInfo();
};
//animation = true | false
export const setStatusBarOverlays = function (isOverlays: boolean) {
  return statusBar.setOverlaysWebView({ overlay: isOverlays });
};
