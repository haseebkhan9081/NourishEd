import React from 'react';

function HowWeOperate() {
  const sections = [
    {
      title: 'Trust in Pakistan',
      content: 'NourisheED will have a trust in Pakistan with an operations manager who is responsible for overseeing its operations in Pakistan. This operations manager will report into the President of NourisheED and will be elected by the Board of Directors.',
    },
    {
      title: 'Bank Accounts',
      content: 'The organization will maintain bank accounts in both the US and Pakistan to provide transparent oversight of funds and usage.',
    },
  ];

  return (
    <div className="bg-slate-50 p-8 py-20">
      <h2 className="text-charcoalGray text-2xl font-bold mb-6  ">How we operate</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
         

        
        {sections.map((section, index) => (
          <div key={index} className="bg-neutralWhite  p-4 rounded shadow-md text-center">
            <h3 className="text-charcoalGray text-xl font-bold">{section.title}</h3>
            <p className="text-charcoalGray">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowWeOperate;
