import React from 'react'

const Image = (props) => {
    return (
        <section className="image-container">
            <img src={`./images/${props.image}`} alt="location image" className='location-image' />
        </section>
    )
}

export default Image