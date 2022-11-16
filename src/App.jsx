import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "./components/Details";
import { Home } from "./components/Home";
import { ProductsPages } from "./components/ProductPages";
import { PropsProvider } from "./context";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <PropsProvider>
        <Home />
        <ProductsPages />
        <Details />
        {/* <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/' element={<ProductsPages/>} />
      <Route path='/' element={<Details/>} />
      </Routes> */}
      </PropsProvider>
    </BrowserRouter>
  );
}

export default App;
