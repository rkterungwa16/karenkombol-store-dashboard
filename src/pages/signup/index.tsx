import styled from "styled-components";
import { SignupForm } from "../../components/auth/Signup";
import { Layout } from "../../components/layout/Layout";

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
    <h3>Signup</h3>
  </StyledHomePageHeaderWrapper>
);

export const Signup = () => {
  return (
    <Layout>
      <SignupForm Header={Header} />
    </Layout>
  );
};

export default Signup;
