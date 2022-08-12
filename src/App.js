
import Header from './Componets/Header/Header';
import Footer from './Componets/Footer/Footer';
import Home from './Container/Home';
import { Route, Routes, Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Doctor from './Container/Doctor/Doctor';
import About from './Container/About/About';
import Auth from './Container/Auth/Auth';
import Contact from './Container/Contact/Contact';
import card from './Componets/card/card';
import PublicRoute from './Route/Publicroute/PublicRoute';
import Private from './Route/Private/Private';

import Listitem from './Container/Formik/Listitem';
import Booklist from './Container/Formik/Booklist';
import { Provider } from 'react-redux'
// import store, { configure } from './Redux/Store';
import { ThemeContext, ThemeProvider } from './Context_api/ThemeContext';
import { SnackbarProvider } from 'notistack';
import { persistor, store  } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react'









function App() {
  // const store = configure();
  return (
    <>  
      <SnackbarProvider  >
        <ThemeProvider>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Routes>
              <Route exact path={"/"} element={<Home />} />
              <Route exact path={"/departments"} element={Department} />
              <Route exact path={"/doctor"} element={Doctor} />
              <Route exact path={"/about"} element={About} />
              <Route exact path={"/contact"} element={Contact} />
              <Route exact path={"/data"} element={card} />
              <Route exact path={"/primary"} element={<Auth />} />
              {/* <Private exact path={"/Bookapointment"} element={Booklist}/> */}
              <Route exact path={"/Bookapointment"} element={Booklist} />
              <Route exact path={"/listapoinment"} element={Listitem} />
            </Routes>
            <Footer />
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
