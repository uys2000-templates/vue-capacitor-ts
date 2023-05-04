import { ConnectionStatusChangeListener, Network } from "@capacitor/network";

export const getNetworkStatus = function () {
  return Network.getStatus();
};

export const networkStatusChangeListener = function (
  callback?: ConnectionStatusChangeListener
) {
  return Network.addListener("networkStatusChange", (status) =>
    callback ? callback(status) : console.log(status)
  );
};
export const removeNetworkListeners = function () {
  return Network.removeAllListeners();
};
