import '../assets/styles/Modal.css';
const ModalCreateUpdate = ({ setModalAlert, modalAlert, setActiveCreate, updateCreate }) => {

  const handleOk = () => {
    setModalAlert(false)
    setActiveCreate(false)
  }
  // console.log(setInfoUpdate);
  return (
    <div className={`${ modalAlert ? 'active__modal' : 'modal'}`}>
      <div className='mesage'> 
        <h2> {updateCreate ? 'Updated user' : 'Created user'}</h2>
        <button onClick={handleOk} className='btn_ok'>OK</button>
      </div>
    </div>
  )
}

export default ModalCreateUpdate