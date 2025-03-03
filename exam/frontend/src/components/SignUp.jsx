import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { onChange } from '../features/registerSlice';



const Signup = () => {
  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

    const [data,setData] = useState ({
        name : "",
        email : "",
        password : ""
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(onChange(data))
    };

    
        
    
  return (
    <div className="flex items-center justify-center  mt-5 p-5 min-h-200 w-150">
      <div className="bg-white p-20  max-w-2xl mt-10 mb-10 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-pink-700 center mb-10 ">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            
            <input 
              type="text" 
              placeholder="Enter your name"
              className="p-3 border rounded-lg text-black"
              onChange={(e)=>setData({...data,name:e.target.value})}
            
            />
          </div>
          
          

          <div className="mb-4">
            
            <input 
              type="email" 
              placeholder="Enter your email"
              className="p-3 border rounded-lg text-black "
              onChange={(e)=>setData({...data,email:e.target.value})}
            />
          </div>
          <div className="mb-4">
            
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="p-3 border rounded-lg text-black" 
              onChange={(e)=>setData({...data,password:e.target.value})}
            />
          </div>
          <button type="submit" className='border-2 shadow-xl '>
            Register
          </button>
        </form>
      </div>
      {console.log(data)}
    </div>
  )
}

export default Signup