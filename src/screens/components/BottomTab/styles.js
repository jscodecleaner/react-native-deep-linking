import { StyleSheet, Dimensions } from 'react-native'

const win = Dimensions.get('window')

export default StyleSheet.create({
  NavigatorStyles: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 50,
  },
  TabIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
})
