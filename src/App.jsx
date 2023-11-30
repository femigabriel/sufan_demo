import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import ScrollToTop from './components/ScrolltoTop';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import CircularLoader from './components/CircularLoader';
import ToastWidget from './components/ToastWidgets';



function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<CircularLoader />}
        persistor={persistor}
      >
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AllRoutes />
            <ToastWidget />
            <ScrollToTop />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
