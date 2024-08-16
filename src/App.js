// import logo from './logo.svg';/
import './App.css';
import Header from './Comaponents/Header/Header';
import Home from './Comaponents/Home/Home';
import Footer from './Comaponents/Footer/Footer';
import Login from './Comaponents/Login/Login';
import Register from './Comaponents/Register/Register';
import ForggetenPassword from './Comaponents/ForgettonPassword/ForggetenPassword';
import MyAccount from './Comaponents/MyAccount/MyAccount';
import AddressBook from './Comaponents/Address Book/AddressBook';
import Wishlists from './Comaponents/WishLists/Wishlists';
import OrderHistory from './Comaponents/Orderhistory/OrderHistory';
import Downloads from './Comaponents/Downloads/Downloads';
import RecurringPayments from './Comaponents/Recurring Payments/RecurringPayments';
import RewardPoints from './Comaponents/RewardPoints/RewardPoints';
import ProductReturns from './Comaponents/Product Returns/ProductReturns';
import Transactions from './Comaponents/Transactions/Transactions';




function App() {
  return (
    <>
      <Header></Header> 
      {/* <Navbar></Navbar> */}
      {/* <Register></Register> */}
       {/* <Home/> */}
      {/* <Login></Login> */}
      {/* <ForggetenPassword></ForggetenPassword> */}
      {/* <MyAccount></MyAccount> */}
      {/* <AddressBook></AddressBook> */}
      {/* <Wishlists></Wishlists> */}
      {/* <OrderHistory></OrderHistory> */}
      {/* <Downloads></Downloads> */}
      {/* <RecurringPayments></RecurringPayments> */}
      {/* <RewardPoints></RewardPoints> */}
      {/* <ProductReturns></ProductReturns> */}
      <Transactions></Transactions>
      <Footer></Footer>
      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}
      {/* <Login></Login> */}
    </>
  );
}

export default App;