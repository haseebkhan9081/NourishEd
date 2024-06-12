import React, { useState } from 'react';
import Select, { ActionMeta } from 'react-select';

interface Option {
  value: string;
  label: string;
}

const rolesofVolunterr: Option[] = [
  { value: 'Event Planning', label: 'Event Planning' },
  { value: 'Fundraising', label: 'Fundraising' },
  { value: 'Outreach', label: 'Outreach' },
 
];

interface Rolepickerprops{
  roles:string[],
  setroles:(days:string[])=>void;
}

const Rolepicker: React.FC<Rolepickerprops> = ({
    roles,
    setroles
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(roles);

  const handleChange = (selectedOptions: readonly Option[], actionMeta: ActionMeta<Option>) => {

    if (selectedOptions) {
      setSelectedDays((selectedOptions as Option[]).map(option => option.value));
      setroles((selectedOptions as Option[]).map(option => option.value))
    } else {
      setSelectedDays([]);
      setroles([])
    }
  };

  return (
    <div>
   
      <Select
        isMulti
        options={rolesofVolunterr}
        value={rolesofVolunterr.filter(option => selectedDays.includes(option.value))}
        onChange={handleChange}
      />
     
    </div>
  );
}

export default Rolepicker;
