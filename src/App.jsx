import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import ModalCreateUpdate from './components/ModalCreateUpdate'
import ModalDelete from './components/ModalDelete'



function App() {

  const baseUrl = 'https://users-cruds-backend-dev-mzjj.3.us-1.fl0.io'
  // const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUsers, deleteUser, updateUser  ] = useFetch(baseUrl)

  const [infoUpdate, setInfoUpdate] = useState()
  const [activeCreate, setActiveCreate] = useState(false)
  const [modalAlert, setModalAlert] = useState(false)
  const [deleteAlter, setDeleteAlter] = useState(false)
  const [updateCreate, setUpdateCreate] = useState(false)


  useEffect(() => {
    getUsers('/users')
  }, [])

  // console.log(users)

  const activeModal = () => {
    setActiveCreate(true)
  }
  
  return (
    <div className='container_principal'>

      <div className='container_varius'>
        <h1 className='title'>Users <i className='bx bxs-user-pin' ></i></h1>
        <button className='btn_create' onClick={activeModal}><i className='bx bx-plus'></i> Create new user</button>
      </div>
      <div  className={`${activeCreate ? 'active_container__formUser' : 'container__formUser'}`}>
          <div className='container__create'>
          <FormUser
            createUsers={createUsers}
            infoUpdate={infoUpdate}
            updateUser={updateUser}
            setInfoUpdate={setInfoUpdate}
            setActiveCreate={setActiveCreate}
            setModalAlert={setModalAlert}
            setUpdateCreate={setUpdateCreate}
          />
          </div>
      </div>

      <ModalCreateUpdate 
        modalAlert={modalAlert}
        setModalAlert={setModalAlert}
        setActiveCreate={setActiveCreate}
        updateCreate={updateCreate}
        />
      
      <ModalDelete 
        deleteAlter={deleteAlter}
        setDeleteAlter={setDeleteAlter}
        />

      <div className='container__card'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setActiveCreate={setActiveCreate}
              setDeleteAlter={setDeleteAlter}
              setUpdateCreate={setUpdateCreate}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
