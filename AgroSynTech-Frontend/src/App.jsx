import Navbar from "./components/navbar/index.jsx";


import "./App.css";
import Main from "./pages/main/index.jsx";
import CardsMissao from "./pages/cardsMissao/index.jsx";
import SobreErnstGotsch from "./pages/sobreErnstGotsch/index.jsx";
import FooterPage from "./pages/footer/index.jsx";

function App() {
   return (
      <>
         <Main />
         <CardsMissao />
         <SobreErnstGotsch />
         <FooterPage />
      </>
   );
}

export default App;
