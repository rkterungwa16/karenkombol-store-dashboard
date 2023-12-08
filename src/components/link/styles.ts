import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled.a`
  text-decoration: none;
  white-space: nowrap;
  align-items: center;
  padding: 0.8445rem 1rem;
  display: flex;
  cursor: pointer;
  color: inherit;
  width: 100%;
`;

export const StyledRouterLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  align-items: center;
  padding: 0.8445rem 1rem;
  display: flex;
  color: inherit;
  width: 100%;
`;

