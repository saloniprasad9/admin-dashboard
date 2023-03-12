import { useState } from 'react';
import { IAdmin } from './admin.type';
import './UserForm.styles.css';

type Props = {
    onBackClickHandler : () => void
    onSubmitClickHandler : (data: IAdmin) => void
}

const AddUser = (props : Props) => {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [phoneNumber , setPhoneNumber] = useState(0);
    const [age , setAge] = useState(0);
    const { onBackClickHandler , onSubmitClickHandler} = props;
    const onFirstNameChangeHandler = (e : any) => {
        setFirstName(e.target.value);
    }
    const onLastNameChangeHandler = (e : any) => {
        setLastName(e.target.value);
    }
    const onPhoneNumberChangeHandler = (e : any) => {
        setPhoneNumber(e.target.value);
    }
    const onAgeChangeHandler = (e : any) => {
        setAge(e.target.value);
    }
    const onSubmitButtonClickHandler = (e: any) => {
        e.preventDefault();
        const data: IAdmin = {
            _id : 12345,
            firstName : firstName,
            lastName : lastName,
            phoneNumber : phoneNumber,
            age : age,
        }
        onSubmitClickHandler(data);
        onBackClickHandler();
    };

    return (
        <div className="form-container">
        <div>
            <h3>Add User</h3>
        </div>
            <form onSubmit={onSubmitButtonClickHandler}>
                <div>
                    <label>FirstName :</label>
                    <input type="text" value={firstName} onChange={onFirstNameChangeHandler}/>
                </div>   
                <div>
                    <label>LastName :</label>
                    <input type="text" value={lastName} onChange={onLastNameChangeHandler}/>
                </div> 
                <div>
                    <label>Phone Number :</label>
                    <input type="text" value={phoneNumber} onChange={onPhoneNumberChangeHandler}/>
                </div> 
                <div>
                    <label>Age :</label>
                    <input type="text" value={age} onChange={onAgeChangeHandler}/>
                </div>
                <div>
                    <input type="button" value="Back" onClick={onBackClickHandler}/>
                    <input type="submit" value="Add User"/>
                </div>  
            </form>
        </div>
    )
} 

export default AddUser;