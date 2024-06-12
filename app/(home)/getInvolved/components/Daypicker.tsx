import React, { useState } from 'react';
import Select, { ActionMeta } from 'react-select';

interface DayOption {
  value: string;
  label: string;
}

const daysOfWeek: DayOption[] = [
  { value: 'Sunday', label: 'Sunday' },
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' }
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

  const handleChange = (selectedOptions: readonly DayOption[], actionMeta: ActionMeta<DayOption>) => {

    if (selectedOptions) {
      setSelectedDays((selectedOptions as DayOption[]).map(option => option.value));
      setDays((selectedOptions as DayOption[]).map(option => option.value))
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
