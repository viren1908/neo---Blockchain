import "./App.css";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import ExchangeRateData from "./containers/exchangerate/ExchangeRateData";
import { Routes, Route } from "react-router-dom";
import CTA from "./components/cta/CTA";
import Calculator from "./containers/calculator/Calculator";

/*
 Container folder contains small functional 
 components (navbar) and Containers are for bigger 
 functional Components(header-hero section).

*/

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <CTA />
                <Calculator />
                <Blog />
                <Footer />
              </>
            }
          />
          <Route path="/exchangerates" element={<ExchangeRateData />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
