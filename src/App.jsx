import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarouselProvider } from "pure-react-carousel";
import { Home } from "./components/Home";
import { ProductsPages } from "./components/ProductPages";
import { PropsProvider } from "./context";
import "./styles/global.css";

function App() {
  const [slideCount, setSlideCount] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <BrowserRouter>
      <PropsProvider>
        <Home />
        <CarouselProvider
         visibleSlides={slideCount}
         totalSlides={6}
         step={1}
         currentSlide={currentSlide}
         naturalSlideWidth={100}
         naturalSlideHeight={125}
         isIntrinsicHeight={true}
        >
        <ProductsPages 
        setSlideCount={setSlideCount}
        setCurrentSlide={setCurrentSlide}
        />
        </CarouselProvider>
        {/* <Details /> */}
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
