import styled from "styled-components";
import { LoginForm } from "../../components/auth/Login";
import { Container } from "../../components/container/Container";

const StyledHomePageHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const Header = () => (
  <StyledHomePageHeaderWrapper>
    <h3>Log In</h3>
  </StyledHomePageHeaderWrapper>
);

export const Login = () => {
  return (
    <Container
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p = "p-0"
    >
      <LoginForm Header={Header} />
    </Container>
  );
};

export default Login;
