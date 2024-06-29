import styles from "./style";
import { Footer, Navbar } from "./components";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter } from "react-router-dom";
import ProductView from "./components/ProductView";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductView/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
