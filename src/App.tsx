import { useState , useEffect } from 'react';
import axios from "axios";
import './App.css';

import { IAdmin , PageEnum, UserResponse} from './components/admin.type';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

const App = () => {
  const  [userList, setUserList]  = useState([] as IAdmin[]);


  const fetchData = async () => {
    try {
      const result = await axios.get<UserResponse>(
        'https://blue-journalist-bbrpv.ineuron.app:4000/users'
      );
      console.log("logged" ,result.data.data);
      setUserList(result.data.data);
    } catch (error) {
      console.log( "error",error ); 
    }
  };
  
 useEffect(() => {
    fetchData();
  }, []);

  const [shownPage , setShownPage] = useState(PageEnum.list);
  const [dataToEdit , setDataToEdit] = useState({} as IAdmin);
  const onAddUserHandler = () => {
    setShownPage(PageEnum.add);
  }

  const addUserHandler = async (data: IAdmin) =>{
    try {
      const result = await axios.post(
        `https://blue-journalist-bbrpv.ineuron.app:4000/user/create`,data
      );
      console.log("logged" ,result);
      fetchData();
    } catch (error) {
      console.log( "error",error ); 
    }
  }
  
  const deleteUser = async (data: IAdmin) =>{
    try {
      const result = await axios.delete(
        `https://blue-journalist-bbrpv.ineuron.app:4000/user/${data._id}`
      );
      console.log("logged" ,result);
      //setUserList(result);
      fetchData();
    } catch (error) {
      console.log( "error",error ); 
    }



  }

  const editUserData = (data: IAdmin) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  } 

  const updateData = async (data: IAdmin) =>{
    try {
      const result = await axios.patch(
        `https://blue-journalist-bbrpv.ineuron.app:4000/user/${data._id}`,data
      );
      console.log("logged" ,result);
      fetchData();
    } catch (error) {
      console.log( "error",error ); 
    }
  }
  

  const showListPage = () => {
    setShownPage(PageEnum.list);
  }
  return (
    <>
      <article className="article-header">
        <header>
          <h1> Admin DashBoard</h1>
        </header>
      </article>
      <section className='section-content'>
        {shownPage === PageEnum.list && (
          <>
            <input type="button" value="Add User" onClick={onAddUserHandler} className="add-user-button"/>
            <UserList list={userList} onDeleteClickHandler={deleteUser} onEdit={editUserData}/>
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddUser onBackClickHandler={showListPage} onSubmitClickHandler={addUserHandler}/>
        )}
        
        {shownPage === PageEnum.edit && <EditUser data={dataToEdit} onBackClickHandler={showListPage} onUpdateClickHandler={updateData}/>}


      </section>
    </>
  )
  
}

export default App;