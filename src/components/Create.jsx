
const Create = ({setShowModal}) => {
    return (
        <>
            <div className='create-container'>
                <button className='create-btn' onClick={setShowModal} >
                    Create +
                </button>
            </div>

        </>
    )
}

export default Create