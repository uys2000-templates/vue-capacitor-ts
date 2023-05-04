import { Share } from "@capacitor/share";

export const canShare = function () {
  return Share.canShare().then(({ value }) => value);
};
export const share = function (
  title: string,
  text: string,
  url: string,
  files: string[],
  dialogTitle: string
) {
  return Share.share({ title, text, url, files, dialogTitle }).then(
    ({ activityType }) => activityType
  );
};
