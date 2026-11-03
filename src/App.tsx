import CategoryNavigation from './components/CategoryNavigation';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <>
      <Header />
      <main>
        <CategoryNavigation />
        <HeroBanner />
      </main>
    </>
  );
}

export default App;
