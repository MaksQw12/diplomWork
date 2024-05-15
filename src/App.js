import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './styles/app.css';
import tg_logo from './resourses/Tg_logo.svg';
import vk_logo from './resourses/Vk_logo.svg';
import AboutPage from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="content">
        <div className="content-head">
          <div className="head-content-first">
            <Link to="/" className="text-head-content-first">
              Текстиль
            </Link>
          </div>

          <div className="head-content-second">
            <Link to="/items" className="text-head-content-second">
              Товары
            </Link>
            <Link to="/cart" className="text-head-content-second">
              Корзина
            </Link>
            <Link to="/profile" className="text-head-content-second">
              Профиль
            </Link>
            <Link to="/about" className="text-head-content-second">
              О нас
            </Link>
          </div>
        </div>

        <div className="content-body">
          <Routes>
            <Route path="/items" />
            <Route path="/cart" />
            <Route path="/profile" />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        <div className="content-footer">
          <div className="content-footer-element">
            <div>Связь с нами: </div>
            <div className="content-footer-logo">
              <a href="https://telegram.org" target="_blank">
                <img src={tg_logo} alt="tg_image" className="content-footer-image"></img>
              </a>

              <a href="https://vk.com" target="_blank">
                <img src={vk_logo} alt="vk_image" className="content-footer-image"></img>
              </a>
            </div>
            <div>Почта: example@gmail.com </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
