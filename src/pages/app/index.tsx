
import { Layout } from "../../components/layout/Layout";
import { Content } from "../../components/app/content/Content";
import { AppSidebar } from "../../components/app/sidebar/AppSidebar";

export const App = () => {
  return (
    <Layout
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <AppSidebar />
      <Content />
    </Layout>
  );
};

export default App;
