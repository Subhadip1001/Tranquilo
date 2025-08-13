import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [user, setUser] = useAuth()
    const handelLogout =()=>{
        try {
            setUser({
                ...user,
            })
            localStorage.removeItem("user");
            toast.success("Logout Successfully");
            setTimeout(()=>{
                window.location.reload();
            },1000);
        } catch (error) {
            console.log(error);
            toast.error("Logout Failed"); 
        }
    }
  return (
    <div>
      <button
        onClick={handelLogout}
        className="px-4 py-2 bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer">Logout</button>
    </div>
  )
}

export default Logout
