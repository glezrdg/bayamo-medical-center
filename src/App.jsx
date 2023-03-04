import Layout from "./components/Layout";
import Home from "./pages/home";
import Services from "./pages/services";
import Doctors from "./pages/doctors-section";
import History from "./pages/history";
import Insurances from "./pages/insurances";
import Contact from "./pages/contact-us";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

const App = () => {
  return (
    <Layout>
      <Home />
      <Services />
      <Doctors />
      <History />
      <Insurances />
      <Contact />
    </Layout>
  );
};

export default App;
