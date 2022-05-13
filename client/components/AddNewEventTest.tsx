import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import React from 'react';

const options = [
  { value: '1', label: 'Apple' },
  { value: '2', label: 'Ball' },
  { value: '3', label: 'Cat' },
];
function AddNewEventTest() {
  const { control } = useForm();
  return (
    <div>
      <Controller
        control={control}
        defaultValue={options.map((c) => c.value)}
        name="options"
        render={({ field: { onChange, value, ref } }) => (
          <Select
            onChange={(val) => onChange(val.map((c) => c.value))}
            options={options}
            isMulti
          />
        )}
      />
    </div>
  );
}

export default AddNewEventTest;
