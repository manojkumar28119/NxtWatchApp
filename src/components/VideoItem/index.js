import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../Context/NxtWatchContext'

import './index.css'

import {
  NameText,
  TitleText,
  UnOrderdItems,
  ViewCountItem,
  PublishedItem,
} from './styledComponents'

const VideoItem = props => {
  const {video} = props
  const {channel, publishedAt, thumbnailUrl, viewCount, title, id} = video
  const {name} = channel
  const profileImageUrl = channel.profile_image_url

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
        const {activeTheme} = value

        return (
          <Link to={`/videos/${id}`} className="video-item nav-link">
            <li>
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-img"
              />
              <div className="profile-nd-details-card">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="profile-img"
                />
                <div>
                  <TitleText activeTheme={activeTheme}>{title}</TitleText>
                  <NameText activeTheme={activeTheme}>{name}</NameText>
                  <UnOrderdItems activeTheme={activeTheme}>
                    <ViewCountItem>{viewCount}views</ViewCountItem>
                    <PublishedItem>{publishedAt} ago</PublishedItem>
                  </UnOrderdItems>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
