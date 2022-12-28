import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { GlobalStyle } from "./styles/GlobalStyle";

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
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
