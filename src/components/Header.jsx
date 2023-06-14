import React from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'
import tracktrades from "./tracktrades_logo.svg"


const Header = () => {
  return (
    <div className='my-2 mx-16 flex flex-row justify-between font-sans'>
      <img src={tracktrades} alt="" width="110" />
      
      <nav className='flex items-center'>
          <ul className="flex flex-row">
              <li className="mx-4 hover:cursor-pointer hover:text-blue-700">Dashboard</li>
              <li className="mx-4 hover:cursor-pointer hover:text-blue-700">Option chain</li>
              <li className="mx-4 hover:cursor-pointer hover:text-blue-700">Strategy builder</li>
              <li className="mx-4 hover:cursor-pointer hover:text-blue-700">Positions</li>
              <li className="mx-4 hover:cursor-pointer hover:text-blue-700">Order book</li>
              
          </ul>

      </nav>

      <div className='flex flex-row'>

        <div className="mx-4 text-right">
          <h2 className='text-xs text-gray-600'>NIFTY</h2>
          <div className="flex flex-row items-baseline">
            <p className='text-xs mx-2 text-green-600'>0.35%</p>
            <p className='font-sans'>18,245.32</p>
          </div>
        </div>
        <div className="mx-4 text-right">
          <h2 className='text-xs text-gray-600'>BANKNIFTY</h2>
          <div className="flex flex-row items-baseline">
            <p className='text-xs mx-2 text-green-600'>0.7%</p>
            <p>39,156.1</p>
          </div>
        </div>
        <div className="mx-4 text-right">
          <h2 className='text-xs text-gray-600'>INDIA VIX</h2>
          <div className="flex flex-row items-baseline">
            <p className='text-xs mx-2 text-red-500'>-10.9%</p>
            <p>12.12</p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center'>Profile <UilAngleDown size={25}/></div>
        
    </div>
  )
}

export default Header