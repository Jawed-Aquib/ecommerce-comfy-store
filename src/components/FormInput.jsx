const FormInput = ({label, name, type, defaultValue, size}) =>{

return(
  <div className="form-control">
  <label className='label'>
    <span className="label-text">{label}</span>
  </label>
  <input type={type}
  name={name}
   placeholder="Type here" 
  className={`input input-bordered ${size}`}
  defaultValue={defaultValue} />
</div>
    )
}

export default FormInput