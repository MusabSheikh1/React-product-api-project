
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList/ProductList.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
