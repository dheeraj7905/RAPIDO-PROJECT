import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehiclePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                
            }} className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-10' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
               
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-15' src="https://t3.ftcdn.net/jpg/10/24/25/94/240_F_1024259483_exfzNdtX05oXO56tSmoEx7warFM7C9Wt.jpg" alt="" />
                <div className='-ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
                </div>
               
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
               
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-15' src="https://png.pngtree.com/png-vector/20250116/ourmid/pngtree-a-blue-color-racing-bike-png-image_15224135.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                </div>
                
            </div>
        </div>
    )
}

export default VehiclePanel