import React, { useState } from 'react';
import Select, { ActionMeta } from 'react-select';

interface Option {
  value: string;
  label: string;
}

const daysOfWeek: Option[] = [
  { value: 'Morning', label: 'Morning' },
  { value: 'Afternoon', label: 'Afternoon' },
  { value: 'Evening', label: 'Evening' },
 
];

interface DayPickerProps{
    days:string[],
    setDays:(days:string[])=>void;
}

const DayPicker: React.FC<DayPickerProps> = ({
    days,
    setDays
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(days);

  const handleChange = (selectedOptions: readonly Option[], actionMeta: ActionMeta<Option>) => {

    if (selectedOptions) {
      setSelectedDays((selectedOptions as Option[]).map(option => option.value));
      setDays((selectedOptions as Option[]).map(option => option.value))
    } else {
      setSelectedDays([]);
      setDays([])
    }
  };

  return (
    <div>
      <h2>Day Picker</h2>
      <Select
        isMulti
        options={daysOfWeek}
        value={daysOfWeek.filter(option => selectedDays.includes(option.value))}
        onChange={handleChange}
      />
     
    </div>
  );
}

export default DayPicker;
