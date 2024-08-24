import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import Spinner from './components/Spinner';

// ----------------------------------------------------------------------

export default function App() {
  const loading = false;
  return (
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            <ScrollToTop />
            <WhatsAppButton />
            <StyledChart />
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
}
const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/917007596907" target="_blank" rel="noopener noreferrer" style={styles.whatsappIcon}>
      <WhatsAppIcon />
    </a>
  );
};

const styles = {
  whatsappIcon: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '30px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    zIndex: '1000',
  },
};
