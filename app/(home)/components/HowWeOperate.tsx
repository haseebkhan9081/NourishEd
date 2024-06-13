import React from 'react'

function HowWeOperate() {
  return (
<div className="bg-slate-50 p-8 py-20">
  <h2 className="text-charcoalGray text-2xl font-bold mb-6">How we operate</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">NourishEd is 501C3</h3>
       
      <p className="text-charcoalGray">NourishED operate out of US as a 501C3 with
      <ul
      className='list-disc
      p-2'>
        <li>
        Four of Board of Directors who will oversee the affairs committed to the mission of the organization and who possess diverse skills and expertise

        </li>
        <li>
        Three officers President, Secretary, and Treasurer who will run the tactical affairs of the organization in line with the vision and mission of the organization. These officers shall be elected by Board of Directors

        </li>
        <li>
        The board and officers will operate as stated in bylaws of the corp
  
        </li>
      </ul>
      </p>
      </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Trust in Pakistan</h3>
   
      <p className="text-charcoalGray"> NourisheED will have a trust in Pakistan with
An operations manager who is responsible for overseeing its operations in Pakistan. This operation manager will report into the President of NoursihED and will be elected by the Board of Directors</p>
    </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Bank Accounts</h3> 
      <p className="text-charcoalGray">The organization will maintain the bank accounts in both US and Pakistan to provide transparent oversight of funds and usage</p>
    </div>
  </div>
</div>

  )
}

export default HowWeOperate