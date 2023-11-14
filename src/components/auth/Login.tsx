import { ElementType, FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { loginUserAsync } from "../../services/login/login-async";
import { AppDispatch } from "../../store";
import { loginSelector } from "../../services/login/login-selector";
import { useFormValidation, loginFormValidatorSchema } from "../../utils/hooks";

export type LoginFormProps = {
  Header?: ElementType;
};
export const LoginForm: FC<LoginFormProps> = ({ Header }) => {
  const dispatch = useDispatch<AppDispatch>();
  const loginData = useSelector(loginSelector);
  const { handleChange, formValues, errors } = useFormValidation(
    {
      email: "",
      password: "",
    },
    loginFormValidatorSchema,
  );

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // localStorage.setItem('token', token);
      dispatch(
        loginUserAsync({
          email: formValues.email.toString(),
          password: formValues.password.toString(),
        }),
      );
      navigate("/dashboard", { replace: true });
    } catch (e) {
      // setStatus(e);
    }
  };
  console.log("login____", loginData);
  return (
    <StyledFormWrapper>
      {Header && <Header />}
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
        <StyledLoginButton onClick={handleLogin}>
          {FormTexts.LOGIN_BUTTON}
        </StyledLoginButton>
      </StyledFormButtonElementsWrapper>
      <StyledFormTextElementsWrapper>
        <StyledParagraphText>Don't have an account?</StyledParagraphText>
        <Link to="/signup">{FormTexts.SIGNUP_BUTTON}</Link>
      </StyledFormTextElementsWrapper>
    </StyledFormWrapper>
  );
};
