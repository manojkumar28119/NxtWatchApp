import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import LoaderComponent from '../LoaderComponent'
import FailureView from '../FailureView'

import TrendingVideoItem from '../TrendingVideoItem'

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
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.inProgress, videosList: []}

  componentDidMount() {
    this.getTrendingVideosApi()
  }

  getTrendingVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/trending`

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

      if (videos.length !== 0) {
        const updatedVideosList = videos.map(each => ({
          channel: each.channel,
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }))

        this.setState({
          apiStatus: apiStatusConstants.onSuccess,
          videosList: updatedVideosList,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.noResults})
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.onFailure})
    }
  }

  renderVideosView = () => {
    const {videosList} = this.state

    return (
      <TrendingVideosCard>
        <ul className="trending-list-items">
          {videosList.map(each => (
            <TrendingVideoItem video={each} key={each.id} />
          ))}
        </ul>
      </TrendingVideosCard>
    )
  }

  onClickRetryBtn = () => {
    this.getTrendingVideosApi()
  }

  renderTrendingView = () => {
    const {apiStatus} = this.state

    let trendingView

    switch (apiStatus) {
      case apiStatusConstants.onSuccess:
        trendingView = this.renderVideosView()
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
                <VideosContainer
                  activeTheme={activeTheme}
                  data-testid="trending"
                >
                  <TrendingCardIcon activeTheme={activeTheme}>
                    <IconCard activeTheme={activeTheme}>
                      <HiFire className="trend-icon" />
                    </IconCard>
                    <IconText activeTheme={activeTheme}>Trending</IconText>
                  </TrendingCardIcon>
                  {this.renderTrendingView()}
                </VideosContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
