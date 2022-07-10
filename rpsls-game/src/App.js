import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './components/Home';
import OnePlayerView from './components/OnePlayer';
import RulesView from './components/Rules';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeView/>}></Route>
          <Route exact path="/one-player" element={<OnePlayerView/>}></Route>
          <Route exact path="/rules" element={<RulesView/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
