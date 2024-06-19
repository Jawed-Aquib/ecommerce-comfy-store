import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action = (store) => async ({request}) =>{

  const formData = await request.formData()
  const data = Object.fromEntries(formData)
   try{
     const response = await customFetch.post('/auth/local', data)
     store.dispatch(loginUser(response.data))
     toast.success(`User is logged in successfully`)
     return redirect('/')
   }
   catch(error){
    const errorMsg = error?.response?.data?.error?.message || 
    'Error occurred while login'
    toast.error(errorMsg)
   }
  return null
}
const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginAsGuestUser = async () =>{
    try{
      const response = await customFetch.post('/auth/local', {
        identifier:'test@test.com',
        password: 'secret'
      })
      dispatch(loginUser(response.data))
      toast.success(`Guest User is logged in successfully`)
      navigate('/')
    }
    catch(error){
      const errorMsg = error?.response?.data?.error?.message || 
      'Error occurred while  guest user login'
      toast.error(errorMsg)
    }
  }

    return <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg
      flex-col gap-y-4"> 
       <h4 className="text-center text-3xl font-bold">Login</h4>
       <FormInput 
       type='email' 
       label='email' 
       name='identifier' 
       defaultValue='demo@demo.com'/>
        <FormInput 
       type='password' 
       label='password' 
       name='password' 
       defaultValue='secret'/>
       <div className="mt-4">
       <SubmitBtn text='Login'/>
       </div>
       <button type="button" className="btn btn-secondary btn-block" onClick={loginAsGuestUser}> 
       Guest User</button>
       <p className="text-center">
        Not a member yet ? <Link to='/register'
         className="ml-2 link link-hover link-primary capitalize">
         Register
         </Link>
       </p>
      
      </Form>

    </section>;
     
  };
  export default Login;