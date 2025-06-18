// 📁 app/(auth)/onboarding/context/FormContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
}

const defaultState: FormState = {
  firstName: '',
  lastName: '',
  dob: '',
  gender: '',
  email: '',
  phone: '',
  address: '',
};

const FormContext = createContext<{
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}>({
  form: defaultState,
  setForm: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [form, setForm] = useState<FormState>(defaultState);
  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};
