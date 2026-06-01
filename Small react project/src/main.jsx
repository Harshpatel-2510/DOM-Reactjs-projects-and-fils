import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
  once: false
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);