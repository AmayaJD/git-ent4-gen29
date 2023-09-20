import '../assets/styles/Modal.css';
const ModalCreateUpdate = ({ setModalAlert, modalAlert, setActiveCreate, infoUpdate}) => {

  const handleOk = () => {
    setModalAlert(false)
    setActiveCreate(false)
  }
  console.log(infoUpdate);
  return (
    <div className={`${ modalAlert ? 'active__modal' : 'modal'}`}>
      <div className='mesage'> 
        <h2> {infoUpdate ? 'Updated user' : 'Created user'}</h2>
        <button onClick={handleOk} className='btn_ok'>OK</button>
      </div>
    </div>
  )
}

export default ModalCreateUpdate