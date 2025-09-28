import React, { useCallback, useMemo, useState } from 'react';
import { SignUpUserProps } from '../types';

interface Props {
  children: React.ReactChild | React.ReactChild[] | JSX.Element;
}

interface DataManager {
  signUpData: SignUpUserProps;
  setData: (arg0: SignUpUserProps) => void;
  clearData: () => void;
}

const initialState = {
  
};

export const SignUpContext = React.createContext<DataManager>({
  signUpData: initialState,
  setData: (): void => { },
  clearData: () => { },
});

export const useSignUpContext = (): DataManager =>
  React.useContext(SignUpContext);

const SignUpDataProvider = ({ children }: Props): JSX.Element => {
  const [signUpData, setSignUpData] = useState<SignUpUserProps>(initialState);

  const setData = useCallback((data: SignUpUserProps) => {
    setSignUpData(data);
  }, []);

  const clearData = useCallback(() => {
    setSignUpData(initialState);
  }, []);

  const dataManager = useMemo((): DataManager => {
    return { signUpData, setData, clearData };
  }, [clearData, setData, signUpData]);

  return (
    <SignUpContext.Provider value={dataManager}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpDataProvider;
