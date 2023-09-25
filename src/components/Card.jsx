import Image from './Image'
import Country from './Country'
import Title from './Title'
import Article from './Article'
import Actions from './Actions'
import Duration from './Duration'

function Card({ item, onDelete, openEditModal }) {

    return (
        <div className='card'>
            <Image image={item.image} />
            <section className="text-section">
                <div className="location-row">
                    <img src="./images/location-icon.png" alt="location-icon" className="location-icon" />
                    <Country country={item.country} />
                    {item.mapURL && <a href={item.mapURL} className="map-view" target="_blank">View on Google Maps</a>}
                </div>
                <Title title={item.title} />
                <Duration duration={item.duration} />
                <Article article={item.article} />
                <Actions onDelete={onDelete} id={item.id} openEditModal={openEditModal} item={item}/>
                {/* {console.log(item.id, item.title)} */}
            </section>
        </div>
    )
}

export default Card