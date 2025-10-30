import { RefObject, SetStateAction } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { ImusicClassDetails, iMusicalDetailsErrors } from '../../types';

const classNameRegex = /[a-zA-Z0-9]+\s*/;
const handleNextSubmit = (
  selected: number,
  handleSubmit: UseFormHandleSubmit<any, any>,
  setSelected: any,
  musicalDetails: ImusicClassDetails,
  classNameRef: RefObject<string>,
  setMusicalDetailsError: {
    (value: SetStateAction<iMusicalDetailsErrors>): void;
    (arg0: (prev: any) => any): void;
  },
  onClickNext: { (): void; (): void },
) => {
  switch (selected) {
    case 1: {
      return handleSubmit(
        () => {
          onClickNext();
          setSelected((prev: number) => (prev <= 2 ? prev + 1 : prev));
        },
        () => {
          // An alert to be shown when error
          // console.log(getValues('country'));
          setSelected((prev: number) => (prev <= 2 ? prev + 1 : prev));
        },
      )();
    }
    case 2: {
      const {
        musicClassName,
        Experience,
        Instruments,
        Students,
        ModeOfTeaching,
      } = musicalDetails;

      const isValid =
        classNameRegex.test(classNameRef.current) &&
        [Experience, Instruments, Students, ModeOfTeaching].every(item =>
          item.some((element: { isSelected: any }) => element.isSelected),
        );
      setMusicalDetailsError((prev: any) => ({
        ...prev,
        className: {
          ...prev.className,
          isError: !classNameRegex.test(classNameRef.current) ? true : false,
        },
        Experience: {
          ...prev.Experience,
          isError: !Experience.some(
            (element: { isSelected: any }) => element.isSelected,
          )
            ? true
            : false,
        },
        Students: {
          ...prev.Students,
          isError: !Students.some(
            (element: { isSelected: any }) => element.isSelected,
          )
            ? true
            : false,
        },
        ModeOfTeaching: {
          ...prev.ModeOfTeaching,
          isError: !ModeOfTeaching.some(
            (element: { isSelected: any }) => element.isSelected,
          )
            ? true
            : false,
        },
        Instruments: {
          ...prev.Instruments,
          isError: !Instruments.some(
            (element: { isSelected: any }) => element.isSelected,
          )
            ? true
            : false,
        },
      }));
      if (isValid) {
        onClickNext();
        setSelected((prev: number) => (prev <= 2 ? prev + 1 : prev));
      }
    }
  }
};

export { classNameRegex, handleNextSubmit };
