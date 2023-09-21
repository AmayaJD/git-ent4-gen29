import '../assets/styles/FormUser.css';
import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormUser = ({ createUsers, infoUpdate, updateUser, setInfoUpdate, setActiveCreate, setModalAlert, setUpdateCreate }) => {

    const { handleSubmit, register, reset} = useForm()

    // Para crear nuevo elemento en la base de dato ("Usuario").
    const submit = data => {
    // data = lo que capturamos del formulario.
      if(infoUpdate){
        // Update
        updateUser('/users', infoUpdate.id, data)
        setInfoUpdate()
        setModalAlert(true)
      } else {
        // Create
        createUsers('/users', data)
        // setInfoUpdate()
        setModalAlert(true)
        setUpdateCreate(false)
      }
      reset({
      // reset: para resetear los espacios del formulario.
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      })
    }

    useEffect(() => {
      reset(infoUpdate)
    }, [infoUpdate])

    const handleClose = () => {
      setActiveCreate(false)
      setUpdateCreate(false)
      // setModalAlert(false)
    }
 
  return (
  
  <form onSubmit={handleSubmit(submit)} className="form">
      <div className='form__close'>
        <h2> {infoUpdate ? 'Update' :'New User'}</h2>
        <span onClick={handleClose} className='npm'>✖</span>
      </div>
    <div className="form__item">
      <label htmlFor="email" className="form__label">Email</label>
      <input {...register('email')}type="email" id="email" className="form__value" placeholder="Write the email"/>
    </div>
    <div className="form__item">
      <label htmlFor="password" className="form__label">Password</label>
      <input {...register('password')}type="password" id="password" className="form__value" placeholder="Write the password"/>
    </div>
    <div className="form__item">
      <label htmlFor="first_name" className="form__label">First name</label>
      <input {...register('first_name')}type="text" id="first_name" className="form__value" placeholder="Write the first name"/>
    </div>
    <div className="form__item"> 
      <label htmlFor="last_name" className="form__label">Last name</label>
      <input {...register('last_name')}type="text" id="last_name" className="form__value" placeholder="Write the last name"/>
    </div>
    <div className="form__item">
      <label htmlFor="birthday" className="form__label">Birthday</label>
      <input {...register('birthday')}type="date" id="birthday" className="form__value"/>
    </div>
    <button className="btn_submit">{ infoUpdate ? 'Update' : 'Create' }</button>
  </form>
  
    

  )
}

export default FormUser