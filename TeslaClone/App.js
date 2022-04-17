import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

import * as Notifications from 'expo-notifications';
import * as Permission from 'expo-permissions';

export default function App() {
    useEffect(() => {
        Permission.getAsync(Permission.NOTIFICATIONS).then((response) => {
            if(response.status !== "granted") {
                return Permission.askAsync(Permission.NOTIFICATIONS);
            }
            return response;
        })
        .then((response) => {
            if(response.status !== "granted") {
                return; 
            }
        });
    }, []);
    

    // async function registerForPushNotification() {
    //     const {status} = await Permissions.getAsync(Permissions.NOTIFICATION);
    //     if (status!='granted') {
    //         const {status} = await Permissions.getAsync(Permissions.NOTIFICATION)
    //     }
    //     if (status!='granted') {
    //         alert('Fail to get the push token');
    //         return;
    //     } 
    //     token = (await Notifications.getExpoPushTokenAsync()).data;
    //     return token
    // }

   const handleNotification = () => {
       Notifications.scheduleNotificationAsync({
           content: {
               title: "local Notification",
               body: "This is my local notification"
           },
           trigger: {
               seconds: 5
           }
       });
   };
   return (
      <View style={styles.container}>
          
         <Header/>
         <Button 
            style={{marginVertical: '100'}}
            title={"Open Notification"}
            onPress={handleNotification}
         />

         
         <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});