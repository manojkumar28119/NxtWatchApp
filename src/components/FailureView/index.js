import NxtWatchContext from '../../Context/NxtWatchContext'
import './index.css'
import {NoResultsCard, FailureText, FailureHeading} from './styledComponents'

const FailureView = props => {
  const {onClickRetryBtn} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme} = value

        const imageUrl =
          activeTheme === 'Li'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <NoResultsCard>
            <img src={imageUrl} alt="failure view" className="failure-image" />
            <FailureHeading activeTheme={activeTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText activeTheme={activeTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <button
              type="button"
              onClick={onClickRetryBtn}
              className="retry-btn"
            >
              Retry
            </button>
          </NoResultsCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
