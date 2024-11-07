import { useEffect } from "react";
import ClientLayout from "./Layouts/ClientLayout/ClientLayout";
import Popup from "./components/Popup/Popup";
 
import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "./redux/popupSlice";
import Login from "./pages/Login/Login";
import GuestLayout from "./Layouts/GuestLayout/GuestLayout";
import Profile from "./pages/Profile/Profile";



const GuestRoutes = (
  <Route path="/" element={<GuestLayout />}>
    <Route path="" element={<Login />} />
  </Route>
);

const ClientRoutes = (
  <Route path="/client" element={<ClientLayout />}>
    <Route path="home" element={<Home />} />
    <Route path="profile" element={<Profile />} />
  </Route>
);

function App() {

  const isVisible = useSelector((state) => state.popup.isVisible);
  const dispatch = useDispatch();
 

  useEffect(() => {
    const handlePopup = () => {
      setTimeout(() => {
        dispatch(showPopup())
      }, 5000);
    }
    handlePopup()
  }, [dispatch])



  
  return (
    <div className="app">

      {
        isVisible &&  <Popup/>
      }
      
      <Router>
        <Routes>
    
          {ClientRoutes}
          {GuestRoutes}
    
        </Routes>
    </Router>
    </div>
  )
}

export default App;
