import Layout from "./components/Layout";
import Home from "./pages/home";
import Services from "./pages/services";

const App = () => {
  return (
    <Layout>
      <Home />
      <Services />
    </Layout>
  );
};

export default App;
