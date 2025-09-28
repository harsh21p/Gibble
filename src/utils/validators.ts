import * as EmailValidator from 'email-validator';

const checkEmailAddress = (email: string): boolean => {
  //Check minimum valid length of an Email.
  if (email.length <= 2) {
    return false;
  }
  //If whether email has @ character.
  if (email.indexOf('@') === -1) {
    return false;
  }

  const parts = email.split('@');
  const dot = parts[1].indexOf('.');
  const dotSplits = parts[1].split('.');
  const dotCount = dotSplits.length - 1;

  //Check whether Dot is present, and that too minimum 1 character after @.
  if (dot === -1 || dot < 2 || dotCount > 2) {
    return false;
  }

  //Check whether Dot is not the last character and dots are not repeated.
  for (let i = 0; i < dotSplits.length; i++) {
    if (dotSplits[i].length === 0) {
      return false;
    }
  }

  return true;
};

export const validateEmail = (email: string): boolean => {
  return EmailValidator.validate(email) && checkEmailAddress(email);
};

export const validatePassword = (password: string): boolean => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/;

  return re.test(password);
};
export const validateIsEmpty = (text: string): boolean => {
  let result = false;
  if (text === '' || text === undefined) {
    result = true;
  }
  return result;
};
export const validateFirstName = (text: string): boolean => {
  const re = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  return re.test(text);
};
export const validateName = (text: string): boolean => {
  // const re = /^[^\s][a-zA-Z\s]+[^\s]$/;
  const re = /^[a-zA-Z ]*$/;
  return re.test(text);
};

export const validateFileName = (text: string): boolean => {
  // const re = /^[^\s][a-zA-Z\s]+[^\s]$/;
  const re = /^[a-zA-Z0-9\_\-\/]+$/;
  // /^[a-zA-Z0-9_-]*$/;
  return re.test(text);
};
export const validateAboutMe = (text: string): boolean => {
  const re = /^[a-zA-Z _ '.,-]{0,500}$/;
  return re.test(text);
};

export const validateNumber = (text: string): boolean => {
  const re = /^[6789]\d{9}$/;
  return re.test(text);
};

export const validatePhoneNumber = (text: string): boolean => {
  const re = /(@"^[0-9]{10}$")/;
  return re.test(text);
};

export const validateMobileNumber = (text: string) => {
  const cleaned = ('' + text).replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{3})(\d{4})(\d{4})$/);

  if (match) {
    //const intlCode = match[1] ? '+1 ' : '',
    //number = [intlCode, "+", match[2], " ", match[3], "-", match[4]].join("");
    //number = [intlCode, match[2], '-', match[3]].join('');
    return validateMobileNumber;
  }
  return text;
};

export const validateOTP = (text: string): boolean => {
  const re = /(([\n\r\s\t]+)?^\d{4}$)/g;

  return re.test(text);
};

export const validatePin = (text: string): boolean => {
  const re = /^[1-9][0-9]{5}$/gm;
  return re.test(text);
};

const validateMaxAndMinLength = (text: string): boolean => {
  const re = /^[a-zA-Z0-9]{4,10}$/;
  return re.test(text);
};

export const validateAddress = (text: string): boolean => {
  const re = /[a-zA-Z]{1,}\d*?/;
  return re.test(text);
};
export const validateFullName = (text: string): boolean => {
  const re = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return re.test(text);
};
export const validDrId = (text: string): boolean => {
  const re = /^[a-z0-9]+$/i;
  return re.test(text);
};
export default {
  validateMaxAndMinLength,
  validateOTP,
  validateNumber,
  validateMobileNumber,
  validateAboutMe,
  validateName,
  validateIsEmpty,
  validatePassword,
  validateEmail,
  validateAddress,
  validDrId,
  validateFileName,
};