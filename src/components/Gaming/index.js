import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import LoaderComponent from '../LoaderComponent'
import FailureView from '../FailureView'
import GamingVideoItem from '../GamingVideoItem'

import Header from '../Header'
import MenuList from '../MenuList'

import {
  VideosContainer,
  TrendingCardIcon,
  IconCard,
  IconText,
  TrendingVideosCard,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

import './index.css'

const apiStatusConstants = {
  onSuccess: 'SUCCESS',
  onFailure: 'Failure',
  inProgress: 'INPROGRESS',
  noResults: 'NORESULTS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.inProgress, videosList: []}

  componentDidMount() {
    this.getGamingVideosApi()
  }

  getGamingVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/gaming`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      const {videos} = data

      const updatedList = videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.onSuccess,
        videosList: updatedList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.onFailure})
    }
  }

  renderGamingVideos = () => {
    const {videosList} = this.state
    return (
      <TrendingVideosCard>
        <ul className="gaming-videos-list">
          {videosList.map(each => (
            <GamingVideoItem video={each} key={each.id} />
          ))}
        </ul>
      </TrendingVideosCard>
    )
  }

  onClickRetryBtn = () => {
    this.getGamingVideosApi()
  }

  renderGamingView = () => {
    const {apiStatus} = this.state

    let trendingView

    switch (apiStatus) {
      case apiStatusConstants.onSuccess:
        trendingView = this.renderGamingVideos()
        break
      case apiStatusConstants.inProgress:
        trendingView = <LoaderComponent />
        break
      case apiStatusConstants.onFailure:
        trendingView = <FailureView onClickRetryBtn={this.onClickRetryBtn} />
        break
      default:
        break
    }

    return trendingView
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {activeTheme} = value

          return (
            <>
              <Header />
              <div className="menu-nd-videos-card">
                <MenuList />
                <VideosContainer data-testid="gaming" activeTheme={activeTheme}>
                  <TrendingCardIcon activeTheme={activeTheme}>
                    <IconCard activeTheme={activeTheme}>
                      <SiYoutubegaming className="trend-icon" />
                    </IconCard>
                    <IconText activeTheme={activeTheme}>Gaming</IconText>
                  </TrendingCardIcon>
                  {this.renderGamingView()}
                </VideosContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
