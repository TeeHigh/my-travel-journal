import {BiTrash, BiEdit} from 'react-icons/bi'

function Card(props){
    return (
        <div className='card'>
            <section className="image-container">
                <img src={`./images/${props.item.image}`} alt="location image" className='location-image' />
            </section>
            <section className="text-section">
                <div className="location-row">
                    <img src="./images/location-icon.png" alt="location-icon" className="location-icon" />
                    <p className="country">{props.item.country}</p>
                    <a href={props.item.link} className="map-view" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <strong className="duration">{props.item.duration}</strong>
                <article className="article">{props.item.article}</article>
                {/* <i className="fa-regular fa-pen-to-square">BiEdit BiTrash</i> */}
                <div className='icons'>
                    <BiEdit className="edit-icon action-btn" />
                    <BiTrash className="delete-icon action-btn" onClick={() => confirm('Are you sure you want to delete?')} />
                </div>
            </section>
        </div>
    )
}

export default Card