import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
function ProgramsInitiativesHome() {
    const { ref: programsRef, inView: programsInView } = useInView({
        triggerOnce: true, // Ensure the animation runs only once
        threshold: 0.1, // Adjust based on when you want the animation to trigger
      });
  return (
    <div ref={programsRef} className="bg-coolBlue p-8 py-20">

    <h2 className="text-neutralWhite text-2xl font-bold mb-6">Programs and Initiatives</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-neutralWhite p-4 rounded shadow-md">
        <h3 className="text-charcoalGray text-xl font-bold">Ibrahim Goth Library Food Support</h3>
        {programsInView && (
                <p className="text-charcoalGray text-3xl font-bold">
                  <CountUp end={120} duration={4} separator="," />
                  +
                </p>
              )}
        <p className="text-charcoalGray">Children supported by the Ibrahim Goth Library food program.</p>
      </div>
  
      <div className="bg-neutralWhite p-4 rounded shadow-md">
        <h3 className="text-charcoalGray text-xl font-bold">Partnerships</h3>
        {programsInView && (
                <p className="text-charcoalGray text-3xl font-bold">
                  <CountUp end={30} duration={4} separator="," />
                  +
                </p>
              )}
        <p className="text-charcoalGray">Partnerships with local government bodies, NGOs, and corporations.</p>
      </div>
  
      <div className="bg-neutralWhite p-4 rounded shadow-md">
        <h3 className="text-charcoalGray text-xl font-bold">Target Schools</h3>
        {programsInView && (
                <p className="text-charcoalGray text-3xl font-bold">
                  <CountUp end={50} duration={4} separator="," />
                  +
                </p>
              )}
        <p className="text-charcoalGray">Target schools and learning centers identified for future inclusion.</p>
      </div>
  
      <div className="bg-neutralWhite p-4 rounded shadow-md">
        <h3 className="text-charcoalGray text-xl font-bold">Nutrition Education</h3>
        {programsInView && (
                <p className="text-charcoalGray text-3xl font-bold">
                  <CountUp end={200} duration={4} separator="," />
                  +
                </p>
              )}
        <p className="text-charcoalGray">Nutrition education programs for parents and teachers.</p>
      </div>
  
      <div className="bg-neutralWhite p-4 rounded shadow-md">
        <h3 className="text-charcoalGray text-xl font-bold">Infrastructure Development</h3>
        {programsInView && (
                <p className="text-charcoalGray text-3xl font-bold">
                  <CountUp end={10} duration={4} separator="," />
                  
                </p>
              )}
        <p className="text-charcoalGray">Kitchen build-outs and distribution logistics established.</p>
      </div>
  
      <div className="bg-neutralWhite p-4 rounded shadow-md">
        <h3 className="text-charcoalGray text-xl font-bold">Policy Advocacy</h3>
        {programsInView && (
                <p className="text-charcoalGray text-3xl font-bold">
                  <CountUp end={5} duration={4} separator="," />
                  +
                </p>
              )}
        <p className="text-charcoalGray">Policies advocated at local, regional, and national levels.</p>
      </div>
  
      <div className="bg-neutralWhite p-4 rounded shadow-md">
        <h3 className="text-charcoalGray text-xl font-bold">Monitoring and Evaluation</h3>
        {programsInView && (
                <p className="text-charcoalGray text-3xl font-bold">
                  <CountUp end={8} duration={4} separator="," />
                  
                </p>
              )}
        <p className="text-charcoalGray">Mechanisms established to track progress and identify improvements.</p>
      </div>
  
      <div className="bg-neutralWhite p-4 rounded shadow-md">
        <h3 className="text-charcoalGray text-xl font-bold">Income Generation Support</h3>
        {programsInView && (
                <p className="text-charcoalGray text-3xl font-bold">
                  <CountUp end={150} duration={4} separator="," />
                  +
                </p>
              )}
        <p className="text-charcoalGray">Parents supported through vocational training programs.</p>
      </div>
    </div>
  </div>
  )
}

export default ProgramsInitiativesHome