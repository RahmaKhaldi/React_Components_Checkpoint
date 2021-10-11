import logo from './logo.svg';
import './App.css';
import FulleName from './Component/Profile/FulleName';
import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
    <ProfilePhoto />
  
        <p>
         <FulleName/>
        </p>
       
        <Address/>
      </header>
    </div>
  );
}

export default App;
