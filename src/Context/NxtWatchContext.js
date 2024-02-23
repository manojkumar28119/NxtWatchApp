import React from 'react'

const NxtWatchContext = React.createContext({
  activeTheme: 'Li',
  changeTheme: () => {},
  savedVideos: [],
  addSavedVideo: () => {},
  removingSavedVideo: () => {},
})

export default NxtWatchContext
