import {Component} from 'react'
import MenuItem from '../MenuItem'

import {MenuContainer, ContactText, ContactUsH1} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'
import './index.css'

class MenuList extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <MenuContainer activeTheme={activeTheme}>
              <MenuItem />
              <div className="contact-us-card">
                <ContactUsH1 activeTheme={activeTheme}>CONTACT US</ContactUsH1>
                <div className="contact-icons-card">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="contact-icon"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="contact-icon"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="contact-icon"
                  />
                </div>
                <ContactText activeTheme={activeTheme}>
                  Enjoy! Now to see your <br /> channels and <br />
                  recommendations!
                </ContactText>
              </div>
            </MenuContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default MenuList
