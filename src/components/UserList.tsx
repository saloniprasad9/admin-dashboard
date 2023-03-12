import { useState , useEffect } from 'react';
import { IAdmin } from './admin.type';
import UserModal from './UserModal';
import './UserList.styles.css';



type Props = {
    list : IAdmin[];
    onDeleteClickHandler : (data : IAdmin) => void;
    onEdit : (data : IAdmin) => void;
}

const UserList = (props: Props) => {
    const { list , onDeleteClickHandler , onEdit} = props; 
    const [showModal , setShowModal] = useState(false);
    const [dataToShow , setDataToShow] = useState( null as IAdmin | null )
    const viewUser = (data : IAdmin) => {
        setDataToShow(data)
        setShowModal(true);
    }

    const onCloseModal = () => setShowModal(false);

   return (
        <div>
            <article>
                <h3 className='list-header'>User List</h3>
            </article>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
                {list.map(user => {
                    return <tr key={user._id}>
                        <td>{`${user.firstName} ${user.lastName}`}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.age}</td>
                        <td>
                            <div>
                                <input type="Button" value="View" onClick={() => viewUser(user)}/>
                                <input type="Button" value="Edit" onClick={() => onEdit(user)}/>
                                <input type="Button" value="Delete" onClick={() => onDeleteClickHandler(user)}/>
                            </div>
                        </td>
                    </tr>
                })}
            </table>
            {showModal && dataToShow !== null  &&( 
                <UserModal onClose={onCloseModal} data={dataToShow}/>
            )}
        </div>
   ) 
}

export default UserList;