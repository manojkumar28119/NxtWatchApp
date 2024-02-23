import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Cookies from 'js-cookie'
import LoaderComponent from '../LoaderComponent'
import FailureView from '../FailureView'
import Header from '../Header'
import MenuList from '../MenuList'

import './index.css'

import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  VideoDetailsCard,
  TitleText,
  UnOrderdItems,
  ViewCountItem,
  PublishedItem,
  VideoDetailsIconsCard,
  IconAndTextCardLike,
  HrLine,
  NameText,
  SubcribeCount,
  Description,
  IconAndSaveTextCard,
  IconAndTextCardDisLike,
} from './styledComponents'

const apiStatusConstants = {
  onSuccess: 'SUCCESS',
  onFailure: 'Failure',
  inProgress: 'INPROGRESS',
  noResults: 'NORESULTS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.inProgress,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetailsApi()
  }

  getVideoDetailsApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/${id}`

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
      const videoDetails = data.video_details

      const updatedVideoDetails = {
        id: videoDetails.id,
        channel: videoDetails.channel,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }

      this.setState({
        apiStatus: apiStatusConstants.onSuccess,
        videoDetails: updatedVideoDetails,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.onFailure})
    }
  }

  onClickLikeBtn = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDisLikeBtn = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  onClickRetryBtn = () => {
    this.getVideoDetailsApi()
  }

  changingSaveStatus = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  renderVideoDetails = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      description,
      channel,
      publishedAt,
      title,
      viewCount,
      videoUrl,
      id,
    } = videoDetails

    const {name} = channel
    const profileImageUrl = channel.profile_image_url
    const subscriberCount = channel.subscriber_count

    const formatedDate = formatDistanceToNow(new Date(publishedAt), {
      includeSeconds: true,
    })

    const isInclude =
      formatedDate.includes('almost') ||
      formatedDate.includes('about') ||
      formatedDate.includes('over')

    const publishedDate = isInclude
      ? `${formatedDate.split(' ').slice(1, 2)} years`
      : formatedDate

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            activeTheme,
            addSavedVideo,
            removingSavedVideo,
            savedVideos,
          } = value

          const checkingVideoIsSaved = savedVideos.filter(
            each => each.id === id,
          )

          console.log(checkingVideoIsSaved.length !== 0)

          const isPresent = checkingVideoIsSaved.length !== 0

          const onClickSaveBtn = () => {
            if (!isPresent === true) {
              addSavedVideo(videoDetails)
            } else {
              removingSavedVideo(id)
            }

            this.changingSaveStatus()
          }

          return (
            <div>
              <div className="video-container">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={videoUrl}
                  controls
                />
              </div>
              <TitleText activeTheme={activeTheme}>{title}</TitleText>
              <div className="video-details-card">
                <UnOrderdItems activeTheme={activeTheme}>
                  <ViewCountItem>{viewCount}views</ViewCountItem>
                  <PublishedItem>{publishedDate} ago</PublishedItem>
                </UnOrderdItems>
                <VideoDetailsIconsCard activeTheme={activeTheme}>
                  <IconAndTextCardLike
                    onClick={this.onClickLikeBtn}
                    activeTheme={activeTheme}
                    isLiked={isLiked}
                  >
                    <BiLike className="like-icon" />
                    Like
                  </IconAndTextCardLike>
                  <IconAndTextCardDisLike
                    onClick={this.onClickDisLikeBtn}
                    activeTheme={activeTheme}
                    isDisliked={isDisliked}
                  >
                    <BiLike className="like-icon" />
                    Dislike
                  </IconAndTextCardDisLike>
                  <IconAndSaveTextCard
                    isSaved={isPresent}
                    onClick={onClickSaveBtn}
                    activeTheme={activeTheme}
                  >
                    <MdPlaylistAdd className="like-icon" />

                    {isPresent ? 'Saved' : 'Save'}
                  </IconAndSaveTextCard>
                </VideoDetailsIconsCard>
              </div>
              <HrLine activeTheme={activeTheme} className="hr-line" />
              <div className="profile-nd-details-card">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="profile-img"
                />
                <div>
                  <NameText activeTheme={activeTheme}>{name}</NameText>
                  <SubcribeCount activeTheme={activeTheme}>
                    {subscriberCount} subscribers
                  </SubcribeCount>
                  <Description className="desk-text" activeTheme={activeTheme}>
                    {description}
                  </Description>
                </div>
              </div>
              <Description className="mobile-text" activeTheme={activeTheme}>
                {description}
              </Description>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderVideoDetailsView = () => {
    const {apiStatus} = this.state

    let videoDetailView

    switch (apiStatus) {
      case apiStatusConstants.onSuccess:
        videoDetailView = this.renderVideoDetails()
        break
      case apiStatusConstants.inProgress:
        videoDetailView = <LoaderComponent />
        break
      case apiStatusConstants.onFailure:
        videoDetailView = <FailureView onClick={this.onClickRetryBtn} />
        break
      default:
        break
    }

    return videoDetailView
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
                <VideoDetailsCard
                  data-testid="videoItemDetails"
                  activeTheme={activeTheme}
                >
                  {this.renderVideoDetailsView()}
                </VideoDetailsCard>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
