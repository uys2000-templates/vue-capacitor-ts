import { Preferences } from "@capacitor/preferences";

export const configureLocalStore = function (group: string) {
  return Preferences.configure({ group });
};
export const getLocalObject = function (key: string) {
  return Preferences.get({ key }).then(({ value }) =>
    value ? JSON.parse(value) : false
  );
};
export const setLocalObject = function (key: string, value: unknown) {
  return Preferences.set({ key, value: JSON.stringify(value) });
};
export const removeLocalObject = function (key: string) {
  return Preferences.remove({ key });
};
export const clearLocalStore = function () {
  return Preferences.clear();
};
export const getLocalStoreKeys = function () {
  return Preferences.keys().then(({ keys }) => keys);
};
