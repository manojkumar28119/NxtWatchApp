import {Link} from 'react-router-dom'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  GamingTitle,
  GamingItemCard,
  ThumbnailGaming,
  GamingViewCountText,
} from './styledComponents'

const GamingVideoItem = props => {
  const {video} = props
  const {thumbnailUrl, viewCount, title, id} = video

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme} = value

        return (
          <GamingItemCard>
            <Link to={`/videos/${id}`} className="nav-link">
              <ThumbnailGaming
                src={thumbnailUrl}
                alt="video thumbnail"
                className="gaming-img"
              />
              <GamingTitle activeTheme={activeTheme}>{title}</GamingTitle>
              <GamingViewCountText activeTheme={activeTheme}>
                {viewCount} Watching Worldwide
              </GamingViewCountText>
            </Link>
          </GamingItemCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
