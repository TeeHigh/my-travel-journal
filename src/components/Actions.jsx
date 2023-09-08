import {BiTrash, BiEdit} from 'react-icons/bi'

const Actions = ({id, onDelete}) => {
    
    return (
        <div className='icons'>
            <BiEdit className="edit-icon action-btn" />
            <BiTrash className="delete-icon action-btn" onClick={() => 
                {
                    const confirmBox = window.confirm('Are you sure you want to delete?')

                    if (confirmBox){
                        onDelete(id)
                    }
                    // onDelete(id)
                }
            } 
            />
        </div>
    )
}

export default Actions