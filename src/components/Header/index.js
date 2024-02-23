/* eslint-disable jsx-a11y/control-has-associated-label */
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline, IoMenu} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  NavContainer,
  LogoutBtn,
  PopupContainer,
  LogoutPopUpText,
} from './styledComponents'
import './index.css'

const Header = props => {
  const onClickConfirmBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  const renderReactPopup = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme} = value

        return (
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <LogoutBtn activeTheme={activeTheme} type="button">
                  Logout
                </LogoutBtn>
              }
            >
              {close => (
                <PopupContainer activeTheme={activeTheme}>
                  <div>
                    <LogoutPopUpText activeTheme={activeTheme}>
                      Are you sure, you want to logout
                    </LogoutPopUpText>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={onClickConfirmBtn}
                      className="confirm-btn"
                    >
                      Confirm
                    </button>
                  </div>
                </PopupContainer>
              )}
            </Popup>
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme, changeTheme} = value

        const imageUrl =
          activeTheme === 'Li'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        const themeMode =
          activeTheme === 'Li' ? (
            <FaMoon className="dark-icon " />
          ) : (
            <IoSunnyOutline className="light-icon" />
          )

        const onClickChangeTheme = () => {
          changeTheme()
        }

        const mobileIconClassName =
          activeTheme === 'Li' ? 'mb-light-icon' : 'mb-dark-icon'

        return (
          <NavContainer activeTheme={activeTheme} className="nav-card">
            <div className="navbar-content-container">
              <Link to="/">
                <button type="button" className="nav-btn">
                  <img
                    src={imageUrl}
                    alt="website logo"
                    className="home-logo"
                  />
                </button>
              </Link>
              <div className="nav-content-card">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={onClickChangeTheme}
                  data-testid="theme"
                >
                  {themeMode}
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className="profile"
                />
                {renderReactPopup()}
              </div>
              <div className="nav-mobile-content-card">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={onClickChangeTheme}
                  data-testid="theme"
                >
                  {themeMode}
                </button>
                <button className="nav-btn" type="button">
                  <IoMenu className={`ham-icon ${mobileIconClassName}`} />
                </button>
                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <LogoutBtn activeTheme={activeTheme} type="button">
                        <FiLogOut className={mobileIconClassName} />
                      </LogoutBtn>
                    }
                  >
                    {close => (
                      <PopupContainer activeTheme={activeTheme}>
                        <div>
                          <LogoutPopUpText activeTheme={activeTheme}>
                            Are you sure, you want to logout
                          </LogoutPopUpText>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="cancel-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={onClickConfirmBtn}
                            className="confirm-btn"
                          >
                            Confirm
                          </button>
                        </div>
                      </PopupContainer>
                    )}
                  </Popup>
                </div>
              </div>
            </div>
          </NavContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
