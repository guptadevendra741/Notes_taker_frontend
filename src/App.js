
import './App.css';
import { Navbar } from './components/homepage/navbar';
import Homepage from './pages/homepage';
import Allroutes from './routes/allroutes';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Allroutes/>
    

    </div>
  );
}

export default App;
