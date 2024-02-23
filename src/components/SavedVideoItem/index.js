import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtWatchContext from '../../Context/NxtWatchContext'

import './index.css'
import {
  VideoTitle,
  ChannelNameText,
  ViewCountItem,
  PublishedItem,
  UnOrderdItems,
  NameTextMb,
} from './styledComponents'

const SavedVideoItem = props => {
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
          <Link to={`/videos/${id}`} className="nav-link  ">
            <li className="trending-item-card">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-trn-videos"
              />

              <div className="desk-view-trending">
                <VideoTitle activeTheme={activeTheme}>{title}</VideoTitle>

                <ChannelNameText activeTheme={activeTheme}>
                  {name}
                </ChannelNameText>
                <UnOrderdItems activeTheme={activeTheme}>
                  <ViewCountItem>{viewCount}views</ViewCountItem>
                  <PublishedItem>{publishedDate} ago</PublishedItem>
                </UnOrderdItems>
              </div>
              <div className="mobile-trnd-video-card">
                <img src={profileImageUrl} alt="profile" className="profile" />
                <div>
                  <VideoTitle activeTheme={activeTheme}>{title}</VideoTitle>
                  <UnOrderdItems activeTheme={activeTheme}>
                    <NameTextMb>{name}</NameTextMb>
                    <ViewCountItem>{viewCount} views</ViewCountItem>
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

export default SavedVideoItem
