
const Create = ({openCreateModal}) => {
    return (
        <>
            <div className='create-container'>
                <button className='create-btn' onClick={openCreateModal} >
                    Create +
                </button>
            </div>

        </>
    )
}

export default Create