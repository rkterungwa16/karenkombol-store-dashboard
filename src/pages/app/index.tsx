import { Content } from "../../components/app/content/Content";
import { AppSidebar } from "../../components/app/AppSidebar";
import { Container } from "../../components/container/Container";

export const App = () => {
  return (
    <Container
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="p-0"
    >
      <AppSidebar />
      <Content />
    </Container>
  );
};

export default App;
