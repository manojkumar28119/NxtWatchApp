/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoClose} from 'react-icons/io5'
import {IoIosSearch} from 'react-icons/io'

import Header from '../Header'
import NxtWatchContext from '../../Context/NxtWatchContext'
import MenuList from '../MenuList'
import {
  VideosContainer,
  InputCard,
  Input,
  IconCard,
  NoResultsCard,
  FailureText,
  FailureHeading,
  HomeCard,
  BannerCard,
} from './styledComponents'
import VideoItem from '../VideoItem'
import LoaderComponent from '../LoaderComponent'

import './index.css'

const apiStatusConstants = {
  onSuccess: 'SUCCESS',
  onFailure: 'Failure',
  inProgress: 'INPROGRESS',
  noResults: 'NORESULTS',
}

class Home extends Component {
  state = {
    showPremiumSubscription: true,
    apiStatus: apiStatusConstants.inProgress,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosApi()
  }

  onPremiumCloseBtn = () => {
    this.setState({showPremiumSubscription: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClicksearchBtn = () => {
    this.getVideosApi()
  }

  renderSearchCard = activeTheme => {
    const {searchInput} = this.state

    return (
      <InputCard activeTheme={activeTheme}>
        <Input
          activeTheme={activeTheme}
          type="search"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <IconCard
          type="button"
          data-testid="searchButton"
          activeTheme={activeTheme}
          onClick={this.onClicksearchBtn}
        >
          <IoIosSearch />
        </IconCard>
      </InputCard>
    )
  }

  getVideosApi = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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
      <ul className="videos-item-list">
        {videosList.map(each => (
          <VideoItem video={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme} = value

        const imageUrl =
          activeTheme === 'Li'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <NoResultsCard>
            <img src={imageUrl} alt="failure view" className="failure-image" />
            <FailureHeading activeTheme={activeTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText activeTheme={activeTheme}>
              We are having some trouble to complete your request.Please try
              again.
            </FailureText>
            <button
              onClick={this.onClickRetryBtn}
              type="button"
              className="retry-btn"
            >
              Retry
            </button>
          </NoResultsCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickRetryBtn = () => {
    this.getVideosApi()
  }

  renderNoSearchResultsView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme} = value

        return (
          <NoResultsCard>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="failure-image"
            />
            <FailureHeading activeTheme={activeTheme}>
              No search results found
            </FailureHeading>
            <FailureText activeTheme={activeTheme}>
              Try different key words or remove search filter
            </FailureText>
            <button
              type="button"
              onClick={this.onClickRetryBtn}
              className="retry-btn"
            >
              Retry
            </button>
          </NoResultsCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderHomeView = () => {
    const {apiStatus} = this.state

    let homeView

    switch (apiStatus) {
      case apiStatusConstants.onSuccess:
        homeView = this.renderVideosView()
        break
      case apiStatusConstants.inProgress:
        homeView = <LoaderComponent />
        break
      case apiStatusConstants.noResults:
        homeView = this.renderNoSearchResultsView()
        break
      case apiStatusConstants.onFailure:
        homeView = this.renderFailureView()
        break
      default:
        break
    }

    return homeView
  }

  render() {
    const {showPremiumSubscription} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {activeTheme} = value

          return (
            <div className="home-page">
              <Header />
              <div className="menu-nd-videos-card">
                <MenuList />
                <HomeCard
                  activeTheme={activeTheme}
                  data-testid="home"
                  className="premium-card-nd-videos-card"
                >
                  <BannerCard
                    data-testid="banner"
                    showPremiumSubscription={showPremiumSubscription}
                  >
                    <div className="premium--sub-card-1">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                        className="premium-logo"
                      />
                      <p className="premium-text">
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </p>
                      <button type="button" className="get-it-now-btn">
                        GET IT NOW
                      </button>
                    </div>
                    <button
                      type="button"
                      className="premium-close-btn"
                      onClick={this.onPremiumCloseBtn}
                      data-testid="close"
                    >
                      <IoClose className="close-icon" />
                    </button>
                  </BannerCard>
                  <VideosContainer activeTheme={activeTheme}>
                    {this.renderSearchCard(activeTheme)}
                    {this.renderHomeView()}
                  </VideosContainer>
                </HomeCard>
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
