import logo from './logo.svg';
import './App.css';
import ListContact from './components/container/listContact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          
          {/* Aquí irá el render */}

        <ListContact></ListContact>
      </header>
    </div>
  );
}

export default App;
