import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from "yup"
import { onChange } from '../features/registerSlice'

const RegistrationForm = () => {
  const initialValues={
    name:"",
    email:"",
    password:""
  }

  const registrationSchema=Yup.object({
    name:Yup.string().required("Name is required"),
    email:Yup.string().required("Email is required").email("Invalid email"),
    password:Yup.string().required("Password is required").min(6, "At least 6 characters")
  })
  const dispatch =useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema:registrationSchema,

    onSubmit:(values,{setSubmitting})=>{
      console.log("Form Data",values);
      dispatch(onChange(values))
      setTimeout(()=>{
        alert("Form submitted successfully!"),
        setSubmitting(false)
      },2000)
      
    }
  });
  return (
    <div className='flex justify-center items-center h-screen'>
      <form 
      onSubmit={formik.handleSubmit}
      className='p-6 border rounded-lg shadow-lg max-w-sm w-full'>
        <h2 className='text-xl font-bold mb-4'>Sign Up</h2>
        <div className='mb-3'>
          <label className='block'>Name</label>
          <input type="text"
          name='name'
          className='border p-2 w-full rounded'
          value={formik.values.name}
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}/>

          {formik.touched.name && formik.errors.name?(
            <div className='text-red-500 text-sm'>{formik.errors.name}</div>):null}

        </div>

        <div className='mb-3'>
          <label className='block'>Email</label>
          <input type="email"
          name='email'
          className='border p-2 w-full rounded'
          value={formik.values.email}
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}/>
          
          {formik.touched.email && formik.errors.email?(
            <div className='text-red-500 text-sm'>{formik.errors.email}</div>):null}

        </div>
        <div className='mb-3'>
          <label className='block'>Password</label>
          <input type="password"
          name='password'
          className='border p-2 w-full rounded'
          value={formik.values.password}
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}/>
          
          {formik.touched.password && formik.errors.password?(
            <div className='text-red-500 text-sm'>{formik.errors.password}</div>):null}

        </div>

        <button type='submit'
        disabled={formik.isSubmitting} 
        className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-3">
          {formik.isSubmitting?"Submitting":"SignUp"}
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
