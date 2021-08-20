import React from 'react'
import { View, Text, Image } from 'react-native'
import Hello from '../../containers/Hello/Hello'
import World from '../../containers/World/World'
import Home1 from '../../../res/home1.png'
import Home2 from '../../../res/home2.png'
import Notify1 from '../../../res/notify1.png'
import Notify2 from '../../../res/notify2.png'

import styles from './styles'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 114,
        },
        tabStyle: {
          height: 114,
          backgroundColor: '#fff',
        },
      }}
    >
      <Tab.Screen
        name="Hello"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              text="首页"
              focused={focused}
              icon={
                <Image
                  source={focused ? Home1 : Home2}
                  style={styles.TabIcon}
                />
              }
            />
          ),
        }}
        component={Hello}
      />
      <Tab.Screen
        name="World"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              text="通知"
              focused={focused}
              icon={
                <Image
                  source={focused ? Notify1 : Notify2}
                  style={styles.TabIcon}
                />
              }
            />
          ),
        }}
        component={World}
      />
    </Tab.Navigator>
  )
}

const TabIcon = ({ icon, text, focused }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'transparent',
        borderTopWidth: focused ? 2 : 0,
        paddingTop: 10,
        bottom: 35,
        marginTop: 15,
      }}
    >
      {icon}
      <Text
        style={{
          color: focused ? 'black' : '#8E92A2',
          fontSize: 12,
          marginTop: -4,
          fontFamily: 'PingFang-SC-Medium',
        }}
      >
        {text}
      </Text>
    </View>
  )
}

export default BottomTab
