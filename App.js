import './App.css';
import Navbar from './Components/Navbar';
import Home from './Home';
import SignIn from './Sign_In';
import SignUp from './Signup';

function App() {
  return (
    <>
    <Navbar title = "TechMates"/>
    <Home/>
    <SignUp/>
    <SignIn/>
    
    </>
  );
}

export default App;
