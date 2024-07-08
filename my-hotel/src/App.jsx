import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import AddRoom from './components/room/AddRoom';
import ExistingRoom from "./components/room/ExistingRoom";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import EditRoom from "./components/room/EditRoom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import RoomListing from "./components/room/RoomListing";
import Admin from "./components/admin/Admin";
import Checkout from "./components/booking/Checkout";
import BookingSuccess from "./components/booking/BookingSuccess";
function App() {
  return (
    <main>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-room/:roomID" element={<EditRoom />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/book-room/:roomID" element={<Checkout />} />
          <Route path="/existing-room" element={<ExistingRoom />}  /> 
          <Route path="/browse-all-rooms" element={<RoomListing />}  /> 
          <Route path="/admin" element={<Admin />}  /> 
          <Route path="/booking-success" element={<BookingSuccess />} />  
        </Routes>
      </Router>
        <Footer/>
    </main>
  );
}

export default App;
