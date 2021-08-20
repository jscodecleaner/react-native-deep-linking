import { StyleSheet, Dimensions } from 'react-native'

const win = Dimensions.get('window')
const height = win.height
const width = win.width

export default StyleSheet.create({
  ViewContainer: {
    position: 'relative',
  },
  BackgroundImage: {
    width: width,
    height: '100%',
    zIndex: 1,
  },
  TextContainer: {
    position: 'absolute',
    zIndex: 2,
    marginTop: height * 0.25,
    marginLeft: 33,
    marginRight: 33,
  },
  TitleText: {
    color: 'white',
    fontSize: 60,
    lineHeight: 72,
    // fontFamily: 'PingFang SC Semibold',
    marginBottom: 7,
  },
  InfoTextText: {
    color: 'white',
    fontSize: 12,
    // fontFamily: 'PingFang SC Medium',
    lineHeight: 20,
  },
})
