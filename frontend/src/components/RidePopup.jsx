import React from 'react'

const RidePopup = (props) => {
  return (
    <div>
        <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setridePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4 '>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-12 rounded-full object-cover' src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" alt="" />
                <h2 className='text-lg font-mediumm'>{props.rideDetails?.user.fullname.firstname + " " + props.rideDetails?.user.fullname.lastname}</h2>
            </div>
            <h5 className='text-lg font-semibold'></h5>
        </div>

      <div className="flex gap-2 justify-between flex-col items-center">

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              {/* <h3 className="text-lg font-medium">562/11-A</h3> */}
              <p className="text-gray-600 text-sm -mt-1">
                {props.rideDetails?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
          <i className=" text-lg ri-map-pin-user-fill"></i>
            <div>
              {/* <h3 className="text-lg font-medium">562/11-A</h3> */}
              <p className="text-gray-600 text-sm -mt-1">
              {props.rideDetails?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
          <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377;{Math.ceil(props.rideDetails?.fare)}</h3>
              <p className="text-gray-600 text-sm -mt-1">
                Cash Cash
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-between'>
        <button onClick={()=>{
          props.setridePopupPanel(false)
        }} className="mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg">
          Ignore
        </button>
        <button onClick={async ()=>{
          await props.confirmTheRide()
          
        }} className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Accept
        </button>
        </div>
      </div>
    </div>
  )
}

export default RidePopup