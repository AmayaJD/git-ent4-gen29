import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'



function App() {

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUsers, deleteUser, updateUser  ] = useFetch(baseUrl)

  const [infoUpdate, setInfoUpdate] = useState()
  const [activeCreate, setActiveCreate] = useState(false)


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
        <h1 className='title'>Users</h1>
        <button onClick={activeModal}>➕ Create user</button>
      </div>
      <div  className={`${activeCreate ? 'active_container__formUser' : 'container__formUser'}`}>
          <div className='container__create'>
          <FormUser
            createUsers={createUsers}
            infoUpdate={infoUpdate}
            updateUser={updateUser}
            setInfoUpdate={setInfoUpdate}
            setActiveCreate={setActiveCreate}
          />
          </div>
      </div>
      

      <div className='container__card'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setActiveCreate={setActiveCreate}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
