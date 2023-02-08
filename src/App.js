import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import './App.css';
import CountryList from './components/CountryList';
import Detail from './components/Detail';
import store from './redux/ConfigureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>

          <Routes>
            <Route
              path="/"
              element={(
                <div className="App">
                  <Navbar returnpage={false} />
                  <CountryList />
                  {' '}
                </div>
          )}
            />
            <Route
              path="/:topLevelDomain"
              element={(
                <Container fluid>
                  <Detail />
                </Container>
)}
            />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
