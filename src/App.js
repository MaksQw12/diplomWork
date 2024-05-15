import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './styles/app.css';
import AboutPage from './pages/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { observer } from 'mobx-react-lite';

function App() {
  return (
    <div className="content">
      <Header />
      <div className="content-body">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/items" />
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
