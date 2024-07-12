import React from 'react';
import EnrollmentChart from './EnrollmentChart';
import SalaryChart from './SalaryChart';
import FamilyMembersByHouseOwnershipChart from './FamilyMembersByHouseOwnershipChart';
import AgeWiseStudentsChart from './AgeWiseStudentsChart';

const Charts = () => {
  // Replace with your actual data
  const enrollmentData = [2, 5, 2, 8, 10, 12, 9, 12, 8, 21, 10, 2];

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mb-4'>
        Charts for Insight into the Library of Ibrahim Goth Food Support Program
      </h1>
      <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center gap-4'>
        <EnrollmentChart  />
        <SalaryChart />
        <FamilyMembersByHouseOwnershipChart />
        <AgeWiseStudentsChart />
        {/* Add other chart components here */}
      </div>
    </div>
  );
};

export default Charts;
