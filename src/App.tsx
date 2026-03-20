import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";

const Home = lazy(() => import("./pages/Home"));
const Error404 = lazy(() => import("./pages/Error404"));
const Footer = lazy(() => import("./commons/Footer"));

import Header from "./commons/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
