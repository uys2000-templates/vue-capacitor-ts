import { Dialog } from "@capacitor/dialog";

export const showAlertDialog = function (
  title: string,
  message: string,
  buttonTitle: string
) {
  return Dialog.alert({ title, message, buttonTitle });
};

export const showPromptDialog = function (
  title: string,
  message: string,
  okButtonTitle: string,
  cancelButtonTitle: string,
  inputPlaceholder: string,
  inputText: string
) {
  return Dialog.prompt({
    title,
    message,
    okButtonTitle,
    cancelButtonTitle,
    inputPlaceholder,
    inputText,
  });
};

export const showConfirmDialog = function (
  title: string,
  message: string,
  okButtonTitle: string,
  cancelButtonTitle: string
) {
  return Dialog.confirm({ title, message, okButtonTitle, cancelButtonTitle });
};
