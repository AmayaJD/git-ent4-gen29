import '../assets/styles/Modal.css';

const ModalDelete = ({deleteAlter, setDeleteAlter}) => {

    const handleDelete = () =>{
        setDeleteAlter(false)
    }
  return (
    <div className={`${ deleteAlter ? 'active__modal' : 'modal'}`}>
        <div className='mesage'> 
        <h2>Delete User</h2>
        <button onClick={handleDelete} className='btn_ok'>OK</button>
        </div>
    </div>
  )
}

export default ModalDelete