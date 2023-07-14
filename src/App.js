import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import {
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { fetchGreeting } from './redux/greetings/greeting';
import Greeting from './components/Greeting';

function App() {
  const dispatch = useDispatch();
  const greet = () => {
    dispatch(fetchGreeting());
  };
  return (
    <>
      <header>
        <nav>
          <NavLink to="/Greeting" onClick={greet}>Greetings</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/Greeting" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
