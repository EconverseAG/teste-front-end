import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
