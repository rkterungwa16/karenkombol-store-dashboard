export enum ValidationErrorTexts {
  EMAIL_IS_EMPTY = "Email must not be empty",
  INVALID_EMAIL = "Invalid email format",
  PASSWORD_EMPTY = "Password must not be empty",
  USERNAME_EMPTY = "Username must not be empty",
  INVALID_PASSWORD = "Invalid password: must be greater than 8",
  FIELD_IS_EMPTY = "Must not be empty",
}

export const loginFormValidatorSchema = {
  email: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: ValidationErrorTexts.EMAIL_IS_EMPTY,
    },
    isEmail: {
      func: (value: string) =>
        /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/.test(
          value,
        ),
      error: ValidationErrorTexts.INVALID_EMAIL,
    },
  },
  password: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: ValidationErrorTexts.PASSWORD_EMPTY,
    },
    isValidPassword: {
      func: (value: string) => value.length !== 0 && value.length >= 8,
      error: ValidationErrorTexts.INVALID_PASSWORD,
    },
  },
};

export const signupFormValidatorSchema = {
  email: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: ValidationErrorTexts.EMAIL_IS_EMPTY,
    },
    isEmail: {
      func: (value: string) =>
        /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/.test(
          value,
        ),
      error: ValidationErrorTexts.INVALID_EMAIL,
    },
  },
  password: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: ValidationErrorTexts.PASSWORD_EMPTY,
    },
    isValidPassword: {
      func: (value: string) => value.length !== 0 && value.length >= 8,
      error: ValidationErrorTexts.INVALID_PASSWORD,
    },
  },
  username: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: ValidationErrorTexts.USERNAME_EMPTY,
    },
  },
};

export const createTodoFormValidatorSchema = {
  content: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: ValidationErrorTexts.FIELD_IS_EMPTY,
    },
  },
  searchTerm: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: ValidationErrorTexts.FIELD_IS_EMPTY,
    },
  },
};
