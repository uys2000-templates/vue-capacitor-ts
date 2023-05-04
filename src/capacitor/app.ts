import {
  App,
  BackButtonListener,
  RestoredListener,
  StateChangeListener,
  URLOpenListener,
} from "@capacitor/app";

export const getAppInfo = function () {
  return App.getInfo();
};
export const getAppState = function () {
  return App.getState();
};
export const getAppLaunchUrl = function () {
  return App.getLaunchUrl();
};

export const exitApp = function () {
  return App.exitApp();
};
export const minimizeApp = function () {
  return App.minimizeApp();
};

export const appStateChangeListener = function (
  callback?: StateChangeListener
) {
  return App.addListener("appStateChange", (appState) =>
    callback ? callback(appState) : console.log("appStateChange", appState)
  );
};
export const appPauseListener = function (callback?: () => void) {
  return App.addListener("pause", () =>
    callback ? callback() : console.log("pause")
  );
};
export const appResumeListener = function (callback?: () => void) {
  return App.addListener("resume", () =>
    callback ? callback() : console.log("resume")
  );
};
export const appOpenUrlListener = function (callback?: URLOpenListener) {
  return App.addListener("appUrlOpen", (event) =>
    callback ? callback(event) : console.log("appUrlOpen")
  );
};
export const appRestoredResultListener = function (
  callback?: RestoredListener
) {
  return App.addListener("appRestoredResult", (event) =>
    callback ? callback(event) : console.log("appUrlOpen")
  );
};
export const appBackButtonListener = function (callback?: BackButtonListener) {
  return App.addListener("backButton", (event) =>
    callback ? callback(event) : console.log("appUrlOpen")
  );
};

export const appRemoveListeners = function () {
  return App.removeAllListeners();
};
