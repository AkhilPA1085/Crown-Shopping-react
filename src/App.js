import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import { GlobalStyle } from "./styles/GlobalStyle";
import SignIn from "./pages/SignIn";

function App() {
  const theme = {
    colors:{
      logo:"#0076D5",
      text: "#7F8D99",
    },

    media:{mobile:"480px",tab:"992px"}
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="sign-in" element={<SignIn/>}/>
            <Route path="singleproduct/:id" element={<SingleProduct/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
