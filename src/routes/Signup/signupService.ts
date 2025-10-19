import { IpersonalDetailsDropDownVisibility } from '../../types';

const personalDetailsDropDownVisibility = {
  isCountryDropDownVisible: false,
  isAgeDropDownVisible: false,
  isCityDropDownVisible: false,
};
export type personalDetailsDropDownActionType =
  | 'Country'
  | 'Age'
  | 'City'
  | 'All';
const personalDetailsDropDownReducer = (
  state: IpersonalDetailsDropDownVisibility,
  action: { type: personalDetailsDropDownActionType; payload: boolean },
) => {
  const { type, payload } = action;
  switch (type) {
    case 'Country': {
      return {
        isCountryDropDownVisible: payload,
        isAgeDropDownVisible: false,
        isCityDropDownVisible: false,
      };
    }
    case 'Age': {
      return {
        isCountryDropDownVisible: false,
        isAgeDropDownVisible: payload,
        isCityDropDownVisible: false,
      };
    }
    case 'City': {
      return {
        isCountryDropDownVisible: false,
        isAgeDropDownVisible: false,
        isCityDropDownVisible: payload,
      };
    }
    case 'All': {
      return {
        isCountryDropDownVisible: false,
        isAgeDropDownVisible: false,
        isCityDropDownVisible: false,
      };
    }
  }
};

const handleDropDownVisibility = (
  dispatch: any,
  action: { type: personalDetailsDropDownActionType; payload: boolean },
) => {
  return dispatch(action);
};

export {
  personalDetailsDropDownVisibility,
  personalDetailsDropDownReducer,
  handleDropDownVisibility,
};
