// Write your code here
import './index.css'

const EventItem = props => {
  const {item, onChangeEvent} = props
  const onChange = () => {
    onChangeEvent(item)
  }

  return (
    <li className="list-ele">
      <button type="button" onClick={onChange}>
        <img src={item.imageUrl} alt="event" className="event-image" />
        <p className="name-of-event">{item.name}</p>
        <p className="location">{item.location}</p>
      </button>
    </li>
  )
}
export default EventItem
