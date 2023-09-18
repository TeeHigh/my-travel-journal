import {BiTrash, BiEdit} from 'react-icons/bi'

const Actions = ({id, onDelete, openModal}) => {
    
    return (
        <div className='icons'>
            <BiEdit className="edit-icon action-btn" 
                onClick={openModal}
                // keyId={id}
            />
            <BiTrash className="delete-icon action-btn" onClick={() => 
                {
                    const confirmBox = window.confirm('Are you sure you want to delete?')

                    if (confirmBox){
                        onDelete(id)
                    }
                }
            } 
            />
        </div>
    )
}

export default Actions