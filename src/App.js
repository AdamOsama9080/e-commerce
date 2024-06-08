// import logo from './logo.svg';/
import './App.css';
import Home from './Comaponents/Home/Home';
import Navbar from './Comaponents/Navbar/Navbar';
import Footer from './Comaponents/Footer/Footer';
import Header from './Comaponents/Header/Header';
import Login from './Comaponents/Login/Login';



function App() {
  return (
    <>
      <Header></Header> 
      <Navbar></Navbar>
       <Home/>
      <Footer></Footer>
      <Login></Login>
    </>
  );
}

export default App;