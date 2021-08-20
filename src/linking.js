const config = {
  screens: {
    BottomTab: {
      screens: {
        Hello: {
          path: 'hello',
        },
        World: {
          path: 'world',
        },
      },
    },
  },
}

const linking = {
  prefixes: ['app://demo.app', 'http://demo.app', 'https://demo.app'],
  config,
}

export default linking
