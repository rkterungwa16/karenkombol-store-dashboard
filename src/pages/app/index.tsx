
import { Layout } from "../../components/layout/Layout";
import { Sidebar } from "../../components/app/sidebar/Sidebar";
import { Content } from "../../components/app/content/Content";

export const App = () => {
  return (
    <Layout
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Sidebar />
      <Content />
    </Layout>
  );
};

export default App;
