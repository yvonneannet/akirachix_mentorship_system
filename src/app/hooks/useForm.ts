// import { useState } from 'react';

// export function useForm(initialState = {}) {
//   const [values, setValues] = useState(initialState);

//   const handleChange = (event: { target: { name: any; value: any; }; }) => {
//     const { name, value } = event.target;
//     setValues(prevValues => ({ ...prevValues, [name]: value }));
//   };

//   const resetForm = () => {
//     setValues(initialState);
//   };

//   return { values, handleChange, resetForm };
// }




import { useState, ChangeEvent } from 'react';

interface FormState {
  [key: string]: string | number | boolean; 
}

export function useForm(initialState: FormState = {}) {
  const [values, setValues] = useState<FormState>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return { values, handleChange, resetForm };
}
