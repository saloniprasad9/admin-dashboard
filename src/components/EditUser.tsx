import { useState } from "react";
import { IAdmin } from "./admin.type";
import './UserForm.styles.css';

type Props = {
    data : IAdmin;
    onBackClickHandler : () => void;
    onUpdateClickHandler : (data: IAdmin) => void;
}

const EditUser = (props : Props) => {
    const { data , onBackClickHandler , onUpdateClickHandler} = props;

    const [firstName , setFirstName] = useState(data.firstName);
    const [lastName , setLastName] = useState(data.lastName);
    const [phoneNumber , setPhoneNumber] = useState(data.phoneNumber);
    const [age , setAge] = useState(data.age);

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
        const updatedData: IAdmin = {
            _id : data._id,
            firstName : firstName,
            lastName : lastName,
            phoneNumber : phoneNumber,
            age : age,
        }
        onUpdateClickHandler(updatedData);
        onBackClickHandler();
    };



    return( 
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
                    <input type="submit" value="Update User"/>
                </div>  
            </form>
        </div>
    );
}

export default EditUser;