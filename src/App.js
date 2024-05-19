import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './styles/app.css';
import AboutPage from './pages/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Item from './pages/Item';
import { observer } from 'mobx-react-lite';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper-body">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/items" element={<Item />} />
          <Route path="/cart" />
          <Route path="/profile" />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default observer(App);
