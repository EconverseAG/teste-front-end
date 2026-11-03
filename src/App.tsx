import CategoryNavigation from './components/CategoryNavigation';
import CategoryShowcase from './components/CategoryShowcase';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <>
      <Header />
      <main>
        <CategoryNavigation />
        <HeroBanner />
        <CategoryShowcase />
      </main>
    </>
  );
}

export default App;
