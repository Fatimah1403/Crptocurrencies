import { Route, Routes } from 'react-router-dom';
import Currencies from './pages/Currencies';
import Prices from './pages/Prices';
import Main from './pages/Main';
import Nav from './components/Nav';

function App() {

  return (
   <div className="App">
    <h1>Change the World</h1>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/prices/:symbol" element={<Prices/>}/>
      </Routes>
   </div>
  )
}

export default App
