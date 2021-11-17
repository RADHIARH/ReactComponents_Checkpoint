import logo from './logo.svg';
import './App.css';
import Profile from './Component/Profile/Profile.js';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address.js';

function App() {
  return (
    <div className="App">
      <Profile />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
