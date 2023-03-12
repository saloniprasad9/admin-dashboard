import './UserModal.styles.css';
import { IAdmin } from './admin.type';
type Props = {
    onClose : () => void;
    data: IAdmin;
};

const UserModal = (props : Props) => {
    const { onClose , data} = props;
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div>
                    <h1>User Details</h1>
                    <div>
                        <div>
                            <label>
                                FirstName : {data.firstName}
                            </label>
                        </div>
                        <div>
                            <label>
                                LastName : {data.lastName}
                            </label>
                        </div>
                        <div>
                            <label>
                                PhoneNumber : {data.phoneNumber}
                            </label>
                        </div>
                        <div>
                            <label>
                                Age : {data.age}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;