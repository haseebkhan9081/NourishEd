import React from 'react'
import CountUp from 'react-countup';
import { useRouter } from 'next/navigation'
import { useInView } from 'react-intersection-observer';
function Statisticshome() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensure the animation runs only once
        threshold: 0.1, // Adjust based on when you want the animation to trigger
      });
  return (
    <div ref={ref} className="bg-warmGreen p-8 py-20">
      <h2 className="text-neutralWhite text-2xl font-bold mb-6">Statistics and Facts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-neutralWhite p-4 rounded shadow-md">
          <h3 className="text-charcoalGray text-xl font-bold">Meals Served</h3>
          {inView && (
            <p className="text-charcoalGray text-3xl font-bold">
              <CountUp end={1000000} duration={4} separator="," />
              +
            </p>
          )}
          <p className="text-charcoalGray">Nutritious meals served to children in need.</p>
        </div>

        <div className="bg-neutralWhite p-4 rounded shadow-md">
          <h3 className="text-charcoalGray text-xl font-bold">Attendance</h3>
          {inView && (
            <p className="text-charcoalGray text-3xl font-bold">
              <CountUp end={95} duration={4} suffix="%" />
            </p>
          )}
          <p className="text-charcoalGray">Increase in school attendance rates.</p>
        </div>

        <div className="bg-neutralWhite p-4 rounded shadow-md">
          <h3 className="text-charcoalGray text-xl font-bold">Health Benefits</h3>
          {inView && (
            <p className="text-charcoalGray text-3xl font-bold">
              <CountUp end={80} duration={4} suffix="%" />
            </p>
          )}
          <p className="text-charcoalGray">Improvement in childrens health and nutrition.</p>
        </div>
      </div>
    </div>
  )
}

export default Statisticshome