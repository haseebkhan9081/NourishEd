import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function ProgramsInitiativesHome() {
  const { ref: programsRef, inView: programsInView } = useInView({
    triggerOnce: true, // Ensure the animation runs only once
    threshold: 0.1, // Adjust based on when you want the animation to trigger
  });

  const programs = [
    {
      title: 'Ibrahim Goth Library Food Support',
      count: 120,
      description: 'Children supported by the Ibrahim Goth Library food program.',
    },
    {
      title: 'Partnerships',
      count: 30,
      description: 'Partnerships with local government bodies, NGOs, and corporations.',
    },
    {
      title: 'Target Schools',
      count: 50,
      description: 'Target schools and learning centers identified for future inclusion.',
    },
    {
      title: 'Nutrition Education',
      count: 200,
      description: 'Nutrition education programs for parents and teachers.',
    },
    {
      title: 'Infrastructure Development',
      count: 10,
      description: 'Kitchen build-outs and distribution logistics established.',
    },
    {
      title: 'Policy Advocacy',
      count: 5,
      description: 'Policies advocated at local, regional, and national levels.',
    },
    {
      title: 'Monitoring and Evaluation',
      count: 8,
      description: 'Mechanisms established to track progress and identify improvements.',
    },
    {
      title: 'Income Generation Support',
      count: 150,
      description: 'Parents supported through vocational training programs.',
    },
  ];

  return (
    <div ref={programsRef} className="bg-coolBlue p-8 py-20">
      <h2 className="text-neutralWhite text-2xl font-bold mb-6">Programs and Initiatives</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {programs.map((program, index) => (
          <div key={index} className="bg-neutralWhite p-4 rounded shadow-md">
            <h3 className="text-charcoalGray text-xl font-bold">{program.title}</h3>
            {programsInView && (
              <p className="text-charcoalGray text-3xl font-bold">
                <CountUp end={program.count} duration={4} separator="," />
                +
              </p>
            )}
            <p className="text-charcoalGray">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramsInitiativesHome;
