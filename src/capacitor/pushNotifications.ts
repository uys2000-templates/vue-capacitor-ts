import {
  PushNotificationSchema,
  PushNotifications,
  Channel,
  Token,
  RegistrationError,
  ActionPerformed,
} from "@capacitor/push-notifications";

export const regiserForNotification = function () {
  return PushNotifications.register();
};
export const checkNotificationPermissions = function () {
  return PushNotifications.checkPermissions();
};
export const requestNotificationPermissions = function () {
  return PushNotifications.requestPermissions();
};

export const getDeliveredNotifications = function () {
  return PushNotifications.getDeliveredNotifications().then(
    ({ notifications }) => notifications
  );
};
export const removeDeliveredNotifications = function (
  notifications: PushNotificationSchema[]
) {
  return PushNotifications.removeDeliveredNotifications({
    notifications: notifications,
  });
};
export const reoveAllDeliveredNotifications = function () {
  return PushNotifications.removeAllDeliveredNotifications();
};

export const createNotificationChannel = function (channel: Channel) {
  return PushNotifications.createChannel(channel);
};
export const deleteNotificationChannel = function (id: string) {
  return PushNotifications.deleteChannel({ id: id });
};
export const listNotificationChannels = function () {
  return PushNotifications.listChannels();
};

export const notificationRegistrationListener = function (
  callback?: (token: Token) => void
) {
  return PushNotifications.addListener("registration", (token) =>
    callback ? callback(token) : console.log(token)
  );
};
export const notificationRegistrationErrorListener = function (
  callback?: (error: RegistrationError) => void
) {
  return PushNotifications.addListener("registrationError", (error) =>
    callback ? callback(error) : console.log(error)
  );
};
export const notificationPushReceivedListener = function (
  callback?: (notification: PushNotificationSchema) => void
) {
  return PushNotifications.addListener(
    "pushNotificationReceived",
    (notification) =>
      callback ? callback(notification) : console.log(notification)
  );
};
export const notificationPushActionPerformedListener = function (
  callback?: (notification: ActionPerformed) => void
) {
  return PushNotifications.addListener(
    "pushNotificationActionPerformed",
    (notification) =>
      callback ? callback(notification) : console.log(notification)
  );
};
export const removeAllNotificationListeners = function () {
  return PushNotifications.removeAllListeners();
};
