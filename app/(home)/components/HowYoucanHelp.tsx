import React from 'react'

function HowYoucanHelp() {
  return (
    <div className="bg-warmOrange p-8 py-20">


  <h2 className="text-white text-2xl font-bold mb-6">How You Can Help</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Donate</h3>
      <p className="text-charcoalGray">Your contributions help us provide nutritious meals to more children in need. Every donation counts.</p>
      <a href="/donate" className="text-coolBlue font-bold hover:underline">Donate Now</a>
    </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Volunteer</h3>
      <p className="text-charcoalGray">Join our team of dedicated volunteers who help us prepare and distribute meals. Your time and effort can make a huge difference.</p>
      <a href="/volunteer" className="text-coolBlue font-bold hover:underline">Become a Volunteer</a>
    </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Spread the Word</h3>
      <p className="text-charcoalGray">Help us raise awareness about the importance of our mission. Share our story and encourage others to get involved.</p>
      <a href="/share" className="text-coolBlue font-bold hover:underline">Share Our Mission</a>
    </div>
  </div>
</div>
  )
}

export default HowYoucanHelp