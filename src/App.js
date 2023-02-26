import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/aboutus/aboutus";
import Cart from "./pages/cart/cart";
import Categories from "./pages/categories/categories";
import Contact from "./pages/contactus/contactus";
import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import SignIn from "./pages/signin/signin";
import BookDetails from "./pages/bookDetails/bookDetails";
import { Provider } from "react-redux";
// import store from "./components/turnUpButton/redux/store";
import store from "./components/turnUpButton/reduxToolKit/store";
// import { useContext } from "react";
// import { SigninContext } from "./pages/Context/signinContext";

export default function App() {
  // const { signinStatus } = useContext(SigninContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin/*" element={<SignIn />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<BookDetails />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Provider store={store}>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}
