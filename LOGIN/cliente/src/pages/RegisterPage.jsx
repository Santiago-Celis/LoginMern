import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {

    const { register, handleSubmit, formState : {errors} } = useForm();
    const {signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if(isAuthenticated) navigate('/task');
    }, [isAuthenticated, navigate])


    const onSubmited = handleSubmit(async (values) => {
      signup(values);
    })

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>

      {
        RegisterErrors.map((error, i) => (
          <div className='bg-red-500 text-white p-2' key={i} >
            { error }
          </div>
        ))
      }

      <form onSubmit={onSubmited} >
        <input type="text"  placeholder="username" {...register("username", {required:true})} 
           className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />

          {
            errors.username && <p className='text-red-500'>Username is Required</p>
          }

        <input type="email" {...register("email", {required:true})} placeholder='email'  
           className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />

          {
            errors.email && <p className='text-red-500'>Email is Required</p>
          }

        <input type="password" {...register("password", {required:true})} placeholder='password' 
            className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />

          {
            errors.password && <p className='text-red-500'>Password is Required</p>
          }

        <button type="submit" className='bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 
           px-4  rounded-full' >Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
