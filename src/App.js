import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Shop />
      </main>
      <Footer/>
    </>
  );
}

export default App;
