
const Create = ({openModal, setShowModal}) => {
    return (
        <div className='create-container'>
            <button className='create-btn' onClick={() => setShowModal(true)} >Create +</button>
        </div>
    )
}

export default Create