import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'

const NOTIFICATION_KEY ='MobileFlashCards:notifications'

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then (Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification() {
  return (
    title: 'Practice makes Perfect! ',
    body: "Don't forget to study today,Take your Quiz Now",
    ios: {
      sound: true,
    }
  )
}


export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then (JSON.parse)
  .then ((data) => {
    // console.log ("Notification is set" + JSON.stringify(data))
    if (data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then (({status}) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            let today = new Date()
            today.setDate (today.getDate())
            today.setHours(9,0,0)

            const notification = createNotification()

            Notifications.scheduleLocalNotificationAsync(notification,
              {
                  time: today,
                  repeat: "day"
              })
            
            AsyncStorage.setItem (NOTIFICATION_KEY, JSON.stringify(true))

          }
        })
    }
  })

}
