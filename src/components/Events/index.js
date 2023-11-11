import {Component} from 'react'
import EventItem from '../EventItem'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]
// Write your code here

const keyWords = {
  initial: 'INITIAL',
  timeOut: 'REGISTRATIONS_CLOSED',
  Ready: 'YET_TO_REGISTER',
  alreadyBooked: 'REGISTERED',
}

class Events extends Component {
  state = {eventsListItems: eventsList, currentStatus: '', currentItem: {}}

  componentDidMount() {
    this.setState({currentStatus: keyWords.initial})
  }

  onChangeCurrentEvent = val => {
    this.setState({currentItem: val, currentStatues: val.registrationStatus})
    console.log(val)
  }

  render() {
    const {eventsListItems, currentStatus, currentItem} = this.state
    return (
      <div className="main-container">
        <div className="event-item-container">
          <h1 className="Event-main-title">Events</h1>
          <ul className="event-list-container">
            {eventsListItems.map(each => (
              <EventItem
                key={each.id}
                item={each}
                onChangeEvent={this.onChangeCurrentEvent}
              />
            ))}
          </ul>
        </div>
        <div className="registration-detail-container">
          <ActiveEventRegistrationDetails
            currentStatues={currentStatus}
            currentItem={currentItem}
            keyWords={keyWords}
          />
        </div>
      </div>
    )
  }
}

export default Events
