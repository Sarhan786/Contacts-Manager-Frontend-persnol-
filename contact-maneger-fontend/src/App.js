import './App.css';
import Login from './Component/LoginRegistation/Login';
import SignUp from './Component/LoginRegistation/Signup';
import TotalContact from './Component/HomeComponent/TotalContact/TotalContact';


function App() {
  return (
    <div className="App">
      <Login/>
      <SignUp/>
      <TotalContact/>
    </div>
  );
}

export default App;
