import { Content } from "../../components/app/content/Content";
import AppContainer from "../../components/app/AppContainer";

export const Dashboard = () => {
  // TODO: Try to make api call with the current access token, and if error, go to login page.
  // Use token to fetch dashboard data. If token auth error navigate to login page
  // If a user enters the dashboard route directly, use refresh token to get a new access token.
  // - refresh token is stored in local storage.
  return (
    <AppContainer>
      <Content></Content>
    </AppContainer>
  );
};

export default Dashboard;
