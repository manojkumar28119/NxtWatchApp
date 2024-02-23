import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../Context/NxtWatchContext'
import './index.css'
import {
  PageContainer,
  FormContainer,
  InputContainer,
  LabelElement,
  InputElement,
  CheckBoxLabel,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    userPassInput: '',
    showPassword: false,
    errMsg: '',
    showSubmitError: false,
  }

  onChangePassword = event => {
    this.setState({userPassInput: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangeCheckBox = event => {
    this.setState({showPassword: event.target.checked})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errMsg, showSubmitError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, userPassInput} = this.state

    const url = 'https://apis.ccbp.in/login'

    const userDetails = {username: usernameInput, password: userPassInput}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {activeTheme} = value
          const imageUrl =
            activeTheme === 'Li'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const renderUserName = () => {
            const {usernameInput} = this.state
            return (
              <InputContainer>
                <LabelElement activeTheme={activeTheme} htmlFor="username">
                  USERNAME
                </LabelElement>
                <InputElement
                  type="text"
                  activeTheme={activeTheme}
                  id="username"
                  placeholder="Username"
                  onChange={this.onChangeUserName}
                  value={usernameInput}
                />
              </InputContainer>
            )
          }

          const renderPassword = () => {
            const {showPassword, userPassInput} = this.state

            return (
              <InputContainer>
                <LabelElement activeTheme={activeTheme} htmlFor="password">
                  PASSWORD
                </LabelElement>
                <InputElement
                  type={showPassword ? 'text' : 'password'}
                  activeTheme={activeTheme}
                  id="password"
                  placeholder="Password"
                  onChange={this.onChangePassword}
                  value={userPassInput}
                />
              </InputContainer>
            )
          }

          return (
            <PageContainer activeTheme={activeTheme}>
              <FormContainer
                activeTheme={activeTheme}
                onSubmit={this.onSubmitForm}
              >
                <img
                  src={imageUrl}
                  alt="website logo"
                  className="website-logo"
                />
                {renderUserName()}
                {renderPassword()}
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="showpassword"
                    onClick={this.onChangeCheckBox}
                  />
                  <CheckBoxLabel
                    htmlFor="showpassword"
                    activeTheme={activeTheme}
                  >
                    Show Password
                  </CheckBoxLabel>
                </div>
                <div className="btn-container">
                  <button
                    type="submit"
                    onClick={this.onSubmitForm}
                    className="login-button"
                  >
                    Login
                  </button>
                  {showSubmitError && <p className="err-msg">*{errMsg}</p>}
                </div>
              </FormContainer>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
