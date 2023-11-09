import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import WaitList from "./components/WaitList";
import Success from "./components/Success";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import EmailConfirmation from "./components/EmailConfirmation";
import Resend from "./components/Resend";
import DashBoard from "./components/DashBoard";


const App = () => {
  return (
       <>
         <Routes>
            <Route path="/"  element={<Landing/>} />
            <Route path="/waitlist"  element={<WaitList/>} />
            <Route path="/success"  element={<Success/>} />
            <Route path="/signup"  element={<SignUp/>} />
            <Route path="/signin"  element={<SignIn/>} />
            <Route path="/confirmemail"  element={<EmailConfirmation/>} />
            <Route path="/resend"  element={<Resend/>} />
            <Route path="/dashboard"  element={<DashBoard/>} />
         </Routes>
       </>
  );
};

export default App;
