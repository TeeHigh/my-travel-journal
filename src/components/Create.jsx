import React from 'react'

const Create = ({openModal}) => {
    return (
        <div className='create-container'>
            <button className='create-btn' onClick={() => openModal()} >Create +</button>
        </div>
    )
}

export default Create