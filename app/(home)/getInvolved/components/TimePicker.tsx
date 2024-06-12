import React, { useState } from 'react';
import Select, { ActionMeta } from 'react-select';

interface Option {
  value: string;
  label: string;
}

const timesOfDay: Option[] = [
  { value: 'Morning', label: 'Morning' },
  { value: 'Afternoon', label: 'Afternoon' },
  { value: 'Evening', label: 'Evening' },
 
];

interface Timepickerprops{
  times:string[],
  settimes:(days:string[])=>void;
}

const Timepicker: React.FC<Timepickerprops> = ({
    times,
    settimes
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(times);

  const handleChange = (selectedOptions: readonly Option[], actionMeta: ActionMeta<Option>) => {

    if (selectedOptions) {
      setSelectedDays((selectedOptions as Option[]).map(option => option.value));
      settimes((selectedOptions as Option[]).map(option => option.value))
    } else {
      setSelectedDays([]);
      settimes([])
    }
  };

  return (
    <div>
   
      <Select
        isMulti
        options={timesOfDay}
        value={timesOfDay.filter(option => selectedDays.includes(option.value))}
        onChange={handleChange}
      />
     
    </div>
  );
}

export default Timepicker;
