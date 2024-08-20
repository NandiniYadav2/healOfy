import React, { Profiler } from 'react'
import { Colors } from '../components/styles';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Homescreen from '../screens/Homescreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Notifications  from '../screens/Notifications';
import Forumscreen from '../screens/Forumscreen';
import Profile from '../screens/Profile';
import Chat from '../components/Chat';
import Quizscreen from '../screens/Quizscreen';
import Editprofile from '../screens/Editprofile';
import Createscreen from '../screens/Createscreen';
import Appointment from '../screens/Appointment';

const Tab = createBottomTabNavigator();
function BottomTabs(){
  return (
    <Tab.Navigator>

      <Tab.Screen 
      name='Home' 
      component={Homescreen}
        options={{
          toBarLabel: 'Home',
          tabBarLabelStyle: {color: "#124b46"},
          headerShown: false,
          tabBarIcon: ({focused}) =>
          focused ? (
            <Entypo name="home" size={24} color={"#124b46"}/>
          ):(
            <AntDesign name="home" size={24} color="#124b46" />
          ),
        }}
      />

 <Tab.Screen 
      name="Forum" 
      component={Forumscreen}
        options={{
          tabBarLabel: "Forum",
          tabBarLabelStyle: {color: "#124b46"},
          headerShown: false,
          tabBarIcon: ({focused}) =>
          focused ? (
            <MaterialCommunityIcons name="forum" size={24} color="#124b46" />
          ):(
            <MaterialCommunityIcons name="forum-outline" size={24} color="#124b46" />
          ),
        }}
      />

<Tab.Screen 
      name="Quiz"
      component={Quizscreen}
        options={{
          tabBarLabel: "Quiz",
          tabBarLabelStyle: {color: "#124b46"},
          headerShown: false,
          tabBarIcon: ({focused}) =>
          focused ? (
            <MaterialIcons name="quiz" size={24} color="#124b46" />
                      ):(
            <MaterialIcons name="quiz" size={24} color="#124b46" />     
                 ),
        }}
      />

<Tab.Screen 
      name="Profile" 
      component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: {color: "#124b46"},
          headerShown: false,
          tabBarIcon: ({focused}) =>
          focused ? (
            <MaterialCommunityIcons name="account" size={24} color="#124b46" />
          ):(
            <MaterialCommunityIcons name="account-outline" size={24} color="#124b46" />
          ),
        }}
      />

<Tab.Screen 
      name="Chat"
      component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarLabelStyle: {color: "#124b46"},
          headerShown: false,
          tabBarIcon: ({focused}) =>
          focused ? (
            <Ionicons name="chatbox" size={24} color="#124b46" />   
             ):(
              <Ionicons name="chatbox-outline" size={24} color="#124b46" />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();
const {primary, tertiary} = Colors;
const RootStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: 'transparent'
            },
            headerTintColor: tertiary,
            headerTransparent: true,
            headerTitle: '',
            headerLeftContainerStyle: {
                paddingLeft: 20
            }
        }}
        initialRouteName='Login'
        >
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Signup" component={Signup} />
           <Stack.Screen options={{headerTintColor: primary}} name="Welcome" component={Welcome} />
           <Stack.Screen name="Home" component={BottomTabs} />
           <Stack.Screen name="Chat" component={Chat} />
           <Stack.Screen name="Editprofile" component={Editprofile} />
           <Stack.Screen name="Forumscreen" component={Forumscreen} />
           <Stack.Screen name="Createscreen" component={Createscreen} />
           <Stack.Screen name="Notifications" component={Notifications} />
           <Stack.Screen name="Appointment" component={Appointment} />
          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
