// validate.js



export const isValidFullName = (fullName) => {
    return isRequired(fullName);
  };
  
  export const isValidFirstName = (firstName) => {
    return isRequired(firstName);
  };


export const isFirstNameMatchingFullName = (fullName, firstName) => {
    const fullNameParts = fullName.split(' ');
  
    return fullNameParts.length > 0 && fullNameParts[0] === firstName;
  };
  

  export const isValidDateOfBirth = (dob) => {
    if (!isRequired(dob)) {
      return false;
    }
  
   const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(dob);
  };
  

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isRequired = (value) => {
    return value.trim() !== ''; 
  };
  
  export const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex =/^[+]\d{1,4}\s?\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };
  