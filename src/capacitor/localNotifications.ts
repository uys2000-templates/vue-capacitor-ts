import {
  ActionPerformed,
  ActionType,
  Channel,
  DeliveredNotificationSchema,
  LocalNotificationDescriptor,
  LocalNotificationSchema,
  LocalNotifications,
} from "@capacitor/local-notifications";

export const scheduleNotifications = function (
  notifications: LocalNotificationSchema[]
) {
  return LocalNotifications.schedule({ notifications: notifications });
};
export const getPendingNotifications = function () {
  return LocalNotifications.getPending();
};
export const registerNotificationActionTypes = function (
  actionType: ActionType[]
) {
  return LocalNotifications.registerActionTypes({ types: actionType });
};
export const cancelNotification = function (
  localNotificationDescriptor: LocalNotificationDescriptor[]
) {
  return LocalNotifications.cancel({
    notifications: localNotificationDescriptor,
  });
};
export const getDeliveredNotifications = function () {
  return LocalNotifications.getDeliveredNotifications();
};
export const removeDeliveredNotifications = function (
  deliveredNotificationSchema: DeliveredNotificationSchema[]
) {
  return LocalNotifications.removeDeliveredNotifications({
    notifications: deliveredNotificationSchema,
  });
};
export const removeAllDeliveredNotifications = function () {
  return LocalNotifications.removeAllDeliveredNotifications();
};

export const createNotificationChannel = function (channel: Channel) {
  return LocalNotifications.createChannel(channel);
};
export const deleteNotificationChannel = function (id: string) {
  return LocalNotifications.deleteChannel({ id: id });
};
export const listNotificationChannels = function () {
  return LocalNotifications.listChannels();
};

export const checkNotificationPermissions = function () {
  return LocalNotifications.checkPermissions();
};
export const requestNotificationPermissions = function () {
  return LocalNotifications.requestPermissions();
};

export const localNotificationReceivedListener = function (
  callback?: (notification: LocalNotificationSchema) => void
) {
  return LocalNotifications.addListener(
    "localNotificationReceived",
    (notification) =>
      callback ? callback(notification) : console.log(notification)
  );
};
export const localNotificationActionPerformedListener = function (
  callback?: (notificationAction: ActionPerformed) => void
) {
  return LocalNotifications.addListener(
    "localNotificationActionPerformed",
    (notificationAction) =>
      callback ? callback(notificationAction) : console.log(notificationAction)
  );
};
export const removeAllNotificationListeners = function () {
  return LocalNotifications.removeAllListeners();
};
