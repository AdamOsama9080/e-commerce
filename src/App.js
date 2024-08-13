// import logo from './logo.svg';/
import './App.css';
import Header from './Comaponents/Header/Header';
import Home from './Comaponents/Home/Home';
import Footer from './Comaponents/Footer/Footer';
import Login from './Comaponents/Login/Login';
import Register from './Comaponents/Register/Register';




function App() {
  return (
    <>
      <Header></Header> 
      {/* <Navbar></Navbar> */}
      {/* <Register></Register> */}
       {/* <Home/> */}
      <Login></Login>
      <Footer></Footer>
      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}
      {/* <Login></Login> */}
    </>
  );
}

export default App;