import Loader from 'react-loader-spinner'
import './index.css'
import NxtWatchContext from '../../Context/NxtWatchContext'

const LoaderComponent = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeTheme} = value

      return (
        <div className="loader-container" data-testid="loader">
          <Loader
            type="ThreeDots"
            color={activeTheme === 'Li' ? '#3b82f6' : '#ffffff'}
            height="50"
            width="50"
          />
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default LoaderComponent
