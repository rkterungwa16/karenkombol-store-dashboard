import { ElementType, FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  StyledFormButtonElementsWrapper,
  StyledFormWrapper,
  StyledFormInputElementWrapper,
  StyledInput,
  StyledLoginButton,
  StyledInputErrorMessage,
  StyledParagraphText,
  StyledFormTextElementsWrapper,
} from "./styles";
import { FormTexts } from "./constants";
import {
  useFormValidation,
  signupFormValidatorSchema,
} from "../../utils/hooks";

export type SignupFormProps = {
  Header?: ElementType;
};
export const SignupForm: FC<SignupFormProps> = ({ Header }) => {
  const { handleChange, formValues, errors } = useFormValidation(
    {
      email: "",
      password: "",
      username: "",
    },
    signupFormValidatorSchema,
  );

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      // localStorage.setItem('token', token);
      navigate("/dashboard", { replace: true });
    } catch (e) {
      // setStatus(e);
    }
  };

  return (
    <StyledFormWrapper>
      {Header && <Header />}
      <StyledFormInputElementWrapper>
        {errors.username[0]?.length && (
          <StyledInputErrorMessage>
            {errors.username[0]}
          </StyledInputErrorMessage>
        )}
        <StyledInput
          id={FormTexts.USERNAME}
          name={FormTexts.USERNAME}
          type="text"
          placeholder={FormTexts.USERNAME_PLACEHOLDER}
          onChange={handleChange}
          value={formValues.username}
        />
      </StyledFormInputElementWrapper>
      <StyledFormInputElementWrapper>
        {errors.email[0]?.length && (
          <StyledInputErrorMessage>{errors.email[0]}</StyledInputErrorMessage>
        )}
        <StyledInput
          id={FormTexts.EMAIL}
          name={FormTexts.EMAIL}
          type={FormTexts.EMAIL}
          placeholder={FormTexts.EMAIL_PLACEHOLDER}
          onChange={handleChange}
          value={formValues.email}
        />
      </StyledFormInputElementWrapper>
      <StyledFormInputElementWrapper>
        {errors.password[0]?.length && (
          <StyledInputErrorMessage>
            {errors.password[0]}
          </StyledInputErrorMessage>
        )}
        <StyledInput
          id={FormTexts.PASSWORD}
          name={FormTexts.PASSWORD}
          type={FormTexts.PASSWORD}
          placeholder={FormTexts.PASSWORD_PLACEHOLDER}
          onChange={handleChange}
          value={formValues.password}
        />
      </StyledFormInputElementWrapper>

      <StyledFormButtonElementsWrapper>
        <StyledLoginButton onClick={handleSignup}>
          {FormTexts.SIGNUP_BUTTON}
        </StyledLoginButton>
      </StyledFormButtonElementsWrapper>
      <StyledFormTextElementsWrapper>
        <StyledParagraphText>Already have an account?</StyledParagraphText>
        <Link to="/login">{FormTexts.LOGIN_BUTTON}</Link>
      </StyledFormTextElementsWrapper>
    </StyledFormWrapper>
  );
};
