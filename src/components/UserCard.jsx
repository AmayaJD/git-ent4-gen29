import '../assets/styles/UserCard.css';
const UserCard = ({ user, deleteUser, setInfoUpdate, setActiveCreate, setDeleteAlter, setUpdateCreate }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
        setDeleteAlter(true)
    }
    const handleEdit = () => {
        setInfoUpdate(user)
        setActiveCreate(true)
        setUpdateCreate(true)
    }
  return (
    <article className='user'>
      <div>
        <h3 className='user__title'>{`${user.first_name} ${user.last_name}`}</h3>
        {/* #{`${user.id}`} */}
      </div>
      <hr />
      <div>
        <ul className='user__list'>
          <li className='user__item'>
            <span className='user__label'>EMAIL: </span>
            <span className='user__value'> <i className='bx bx-envelope'></i> {user.email}</span>
          </li>
          <li className='user__item'>
            <span className='user__label'>BIRTHDAY: </span>
            <span className='user__value'><i className='bx bx-gift' ></i> {user.birthday}</span>
          </li>
          {/* <li className='user__item'>
            <span className='user__label'>PASSWORD: </span>
            <span className='user__value'>{user.password}</span>
          </li> */}
        </ul>
      </div>
      <hr />
      <div className='btn'>
        <button onClick={handleDelete} className='btn__delete'> <i className='bx bx-trash-alt' ></i> </button>
        {/* 🗑️ 🖊*/}
        <button onClick={handleEdit} className='btn__edit'><i className='bx bxs-edit' ></i></button>
      </div>
      
    </article>
  )
}

export default UserCard