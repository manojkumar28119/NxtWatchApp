import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import './index.css'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {ParaText, MenuListItem} from './styledComponents'

const MenuItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeTheme} = value

      const {match} = props

      const {path} = match

      const activeMenuItem = path

      const iconClassName =
        activeTheme === 'Li' ? 'menu-item-icon-dark' : 'menu-item-icon'

      const activeTextMode =
        activeTheme === 'Li' ? 'active-text-light' : 'active-text-dark'

      return (
        <ul className="menu-list-items">
          <MenuListItem
            isActive={activeMenuItem === '/'}
            activeTheme={activeTheme}
          >
            <Link to="/" className="nav-link list-item">
              <AiFillHome
                className={
                  activeMenuItem === '/' ? 'active-icon' : iconClassName
                }
              />
              <ParaText
                className={
                  activeMenuItem === '/' ? 'active-text' : 'menu-item-name'
                }
                activeTheme={activeTheme}
              >
                Home
              </ParaText>
            </Link>
          </MenuListItem>
          <MenuListItem
            isActive={activeMenuItem === '/trending'}
            activeTheme={activeTheme}
          >
            <Link to="/trending" className="nav-link list-item">
              <HiFire
                className={
                  activeMenuItem === '/trending' ? 'active-icon' : iconClassName
                }
              />
              <ParaText
                className={
                  activeMenuItem === '/trending'
                    ? 'active-text'
                    : 'menu-item-name'
                }
                activeTheme={activeTheme}
              >
                Trending
              </ParaText>
            </Link>
          </MenuListItem>
          <MenuListItem
            isActive={activeMenuItem === '/gaming'}
            activeTheme={activeTheme}
          >
            <Link to="/gaming" className="nav-link list-item">
              <SiYoutubegaming
                className={
                  activeMenuItem === '/gaming' ? 'active-icon' : iconClassName
                }
              />
              <ParaText
                className={
                  activeMenuItem === '/gaming'
                    ? 'active-text'
                    : 'menu-item-name'
                }
                activeTheme={activeTheme}
              >
                Gaming
              </ParaText>
            </Link>
          </MenuListItem>
          <MenuListItem
            isActive={activeMenuItem === '/saved-videos'}
            activeTheme={activeTheme}
          >
            <Link to="/saved-videos" className="nav-link list-item">
              <MdPlaylistAdd
                className={
                  activeMenuItem === '/saved-videos'
                    ? 'active-icon'
                    : iconClassName
                }
              />
              <ParaText
                className={
                  activeMenuItem === '/saved-videos'
                    ? 'active-text'
                    : 'menu-item-name'
                }
                activeTheme={activeTheme}
              >
                Saved Videos
              </ParaText>
            </Link>
          </MenuListItem>
        </ul>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(MenuItem)
