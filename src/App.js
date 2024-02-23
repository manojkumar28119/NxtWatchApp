import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import NxtWatchContext from './Context/NxtWatchContext'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {activeTheme: 'Li', savedVideos: []}

  onChangeTheme = () => {
    this.setState(prevState =>
      prevState.activeTheme === 'Li'
        ? {activeTheme: 'Da'}
        : {activeTheme: 'Li'},
    )
  }

  addingSavedVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoDetails],
    }))
  }

  removeSavedVideo = id => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(each => each.id !== id),
    }))
  }

  render() {
    const {activeTheme, savedVideos} = this.state
    console.log(savedVideos)

    return (
      <NxtWatchContext.Provider
        value={{
          activeTheme,
          savedVideos,
          changeTheme: this.onChangeTheme,
          addSavedVideo: this.addingSavedVideo,
          removingSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
