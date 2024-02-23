import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import MenuList from '../MenuList'
import NxtWatchContext from '../../Context/NxtWatchContext'
import SavedVideoItem from '../SavedVideoItem'
import './index.css'

import {
  VideosContainer,
  TrendingCardIcon,
  IconCard,
  IconText,
  FailureHeading,
  FailureText,
  NoSavedVideosCard,
  TrendingVideosCard,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeTheme, savedVideos} = value
      console.log(savedVideos)

      const renderNoVideosView = () => (
        <NoSavedVideosCard>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
            className="no-saved-videos-image"
          />
          <FailureHeading activeTheme={activeTheme}>
            No Saved videos found
          </FailureHeading>
          <FailureText activeTheme={activeTheme}>
            You can save your videos while watching them
          </FailureText>
        </NoSavedVideosCard>
      )

      const renderSavedVideo = () => (
        <TrendingVideosCard>
          <ul className="saved-video-list">
            {savedVideos.map(each => (
              <SavedVideoItem video={each} key={each.id} />
            ))}
          </ul>
        </TrendingVideosCard>
      )

      return (
        <>
          <Header />
          <div className="menu-nd-videos-card">
            <MenuList />
            <VideosContainer
              data-testid="savedVideos"
              activeTheme={activeTheme}
            >
              <TrendingCardIcon activeTheme={activeTheme}>
                <IconCard activeTheme={activeTheme}>
                  <HiFire className="trend-icon" />
                </IconCard>
                <IconText activeTheme={activeTheme}>Saved Videos</IconText>
              </TrendingCardIcon>
              {savedVideos.length === 0
                ? renderNoVideosView()
                : renderSavedVideo()}
            </VideosContainer>
          </div>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
