import React from 'react'

const Image = (props) => {
    return (
        <section className="image-container" style={{backgroundImage: `url(${props.image}) `}}>
            {/* <img src={props.image} alt="location image" className='location-image' /> */}
        </section>
    )
}

export default Image