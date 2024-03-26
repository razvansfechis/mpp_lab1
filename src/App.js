import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Add from './components/Add'
import Update from './components/Update';
import Details from './components/ShowDetails'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/add' element={<Add />} />
          <Route path='/update' element={<Update />} />
          <Route path='/showDetails/:id' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
