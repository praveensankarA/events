// Write your code here

import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {currentStatues, currentItem, keyWords} = props

  const renderDefault = () => (
    <div className="default-page">
      <p className="default-para">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderReady = () => (
    <div className="main-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="not-registered-img"
      />
      <p className="register-now-para">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art from.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )
  const renderRegistered = () => (
    <div className="main-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />

      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderTimeout = () => (
    <div className="main-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="not-registered-img"
      />
      <h1 className="register-closed-head">Registrations Are Closed Now!</h1>
      <p className="register-closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (currentItem.registrationStatus) {
    case keyWords.Ready:
      return renderReady()
    case keyWords.alreadyBooked:
      return renderRegistered()
    case keyWords.timeOut:
      return renderTimeout()
    default:
      return renderDefault()
  }
}

export default ActiveEventRegistrationDetails
