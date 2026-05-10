import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const ConfirmRidePopUp = (props) => {
    const [ otp, setOtp ] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>🚗 Confirm & Start to Ride</h3>
            <div className='flex items-center justify-between p-3 border-2 border-black-400 rounded-lg mt-4 bg-blue-700'>
                <div className='flex items-center gap-3 bg '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBBW_vVB8SDKPclXU4qE92iMFW0-ciIyF5w&s" alt="" />
                    <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2>
                </div>
                <h5 className='text-lg font-semibold text-white'>2.2 KM</h5>
            </div>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

                <div className='mt-6 w-full'>
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }}>
                        <input value={otp} onChange ={(e)=>{
                            setOtp(e.target.value)
                        }}type="text" placeholder='Enter OTP' className='w-full mb-3 p-2 border-2 border-gray-400 rounded-lg' />
                <Link to="/captain-riding" className='mt-5 w-full flex justify-center
                     bg-green-600  text-white font-semibold p-2 px-10 rounded-lg'>Accept</Link>

                    <button onClick={() => {
                        
                         props.setConfirmRidePopupPanel(false)
                         props.setRidePopupPanel(false)

                    }} className='mt-2 w-full bg-red-600 text-white font-semibold p-2 px-10 rounded-lg'>Cancel</button>
                    </form>
                    </div>

                
            </div>
        </div>


    </div>
  )
}
export default ConfirmRidePopUp
