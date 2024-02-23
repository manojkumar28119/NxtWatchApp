import Header from '../Header'
import MenuList from '../MenuList'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  VideosContainer,
  NoResultsCard,
  FailureText,
  FailureHeading,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeTheme} = value

      const imageUrl =
        activeTheme === 'Li'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <div className="menu-nd-videos-card">
            <MenuList />
            <VideosContainer activeTheme={activeTheme}>
              <NoResultsCard>
                <img src={imageUrl} alt="not found" className="failure-image" />
                <FailureHeading activeTheme={activeTheme}>
                  Page Not Found
                </FailureHeading>
                <FailureText activeTheme={activeTheme}>
                  we are sorry, the page you requested could not be found.
                </FailureText>
              </NoResultsCard>
            </VideosContainer>
          </div>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
