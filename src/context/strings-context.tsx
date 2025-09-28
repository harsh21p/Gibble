import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface Props {
  children: React.ReactChild | React.ReactChild[] | JSX.Element;
}

interface DataManager {
  stringsData: any;
  setStringsData: (arg0: {}) => void;
  imagesData: any;
  setImagesData: (arg0: {}) => void;
  objectsData: any;
  setObjectsData: (arg0: {}) => void;
  svgData: any;
  setSvgData: (arg0: {}) => void;
  videosData: any;
  setVideosData: (arg0: {}) => void;
}

const initialState = {
  button: 'Button',
  signup: {
    main: 'Hi, help us get you onboard with Gibble !',
    step1: 'Personal Details',
    step2: 'Musical Details',
    step3: 'Payment',
  },
};
const initialImagesState = {
  logo: '',
};
const initialVideosState = {
  breastcancer: '',
};
const initialObjectsState = {
  signUpData: [
    {
      title: 'Title',
      iconUri: `<svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg"></svg> `,
    },
  ],
};
const initialIconsState = {
  addEntry: `<svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.33382 0C7.86106 0 6.66715 1.19391 6.66715 2.66667C6.66715 4.13943 7.86106 5.33333 9.33382 5.33333H14.6672C16.1399 5.33333 17.3338 4.13943 17.3338 2.66667C17.3338 1.19391 16.1399 0 14.6672 0H9.33382ZM4.66561 2.6673H4C1.79086 2.6673 0 4.45816 0 6.6673V22.6673C0 24.8764 1.79086 26.6673 4 26.6673H20C22.2091 26.6673 24 24.8764 24 22.6673V6.6673C24 4.45816 22.2091 2.6673 20 2.6673H19.3323C19.3319 5.24433 17.2427 7.33331 14.6656 7.33331H9.33228C6.75516 7.33331 4.66596 5.24433 4.66561 2.6673ZM10.7879 11.2597C11.0258 11.2983 11.2307 11.4489 11.3385 11.6646L13.5399 16.0672L15.4707 14.1363C15.6114 13.9957 15.8021 13.9166 16.0011 13.9166H18.6677C19.0819 13.9166 19.4177 14.2524 19.4177 14.6666C19.4177 15.0809 19.0819 15.4166 18.6677 15.4166H16.3117L13.8647 17.8636C13.6943 18.0341 13.4522 18.1122 13.2143 18.0736C12.9763 18.035 12.7714 17.8844 12.6636 17.6687L10.4623 13.2661L8.53139 15.197C8.39074 15.3376 8.19997 15.4166 8.00106 15.4166H5.33439C4.92018 15.4166 4.58439 15.0809 4.58439 14.6666C4.58439 14.2524 4.92018 13.9166 5.33439 13.9166H7.6904L10.1374 11.4697C10.3079 11.2992 10.5499 11.221 10.7879 11.2597Z" fill="white"/>
</svg>
`,
};

export const StringsContext = React.createContext<DataManager>({
  stringsData: initialState,
  setStringsData: (): void => {},
  imagesData: initialImagesState,
  setImagesData: (): void => {},
  objectsData: initialObjectsState,
  setObjectsData: (): void => {},
  svgData: initialIconsState,
  setSvgData: (): void => {},
  videosData: initialState,
  setVideosData: (): void => {},
});

export const useStringsContext = (): DataManager =>
  React.useContext(StringsContext);

const StringsDataProvider = ({ children }: Props): JSX.Element => {
  const [stringsData, setData] = useState<{}>(initialState);
  const [imagesData, setImgsData] = useState<{}>(initialImagesState);
  const [objectsData, setObjData] = useState<{}>(initialObjectsState);
  const [svgData, setIcoData] = useState<{}>(initialIconsState);

  const [videosData, setVidData] = useState<{}>(initialVideosState);
  const setStringsData = useCallback((data: {}) => {
    setData(data);
  }, []);
  const setImagesData = useCallback((data: {}) => {
    setImgsData(data);
  }, []);
  const setObjectsData = useCallback((data: {}) => {
    setObjData(data);
  }, []);
  const setSvgData = useCallback((data: {}) => {
    setIcoData(data);
  }, []);
  const setVideosData = useCallback((data: {}) => {
    setVidData(data);
  }, []);

  const dataManager = useMemo((): DataManager => {
    return {
      stringsData,
      setStringsData,
      imagesData,
      setImagesData,
      objectsData,
      setObjectsData,
      videosData,
      setVideosData,
      svgData,
      setSvgData,
    };
  }, [
    stringsData,
    setStringsData,
    imagesData,
    setImagesData,
    objectsData,
    setObjectsData,
    videosData,
    setVideosData,
    svgData,
    setSvgData,
  ]);

  return (
    <StringsContext.Provider value={dataManager}>
      {children}
    </StringsContext.Provider>
  );
};

export default StringsDataProvider;
