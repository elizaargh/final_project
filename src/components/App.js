
import { Container, } from 'react-bootstrap';
import Signup from './Signup.js';
import { AuthProvider } from './contexts/AuthContext.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './Dashboard.js';
import Login from './Login.js';
import PrivateRoute from "./PrivateRoute";
import Home from './Home.js';
import UpdateProfile from './UpdateProfile.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import CommunityNavbar from './Navbar.js';
import Timetable from './Timetable.js';
import ClassInfo from './ClassInfo.js';
import yogaPage from './pages/yoga.js';
import PaintingPage from './pages/painting.js';
import AdminPage from './pages/adminPage.js';

function App() {
  return (
    <> 

<Container fluid >
    <Router>     
      <AuthProvider>    
            <Switch>   
               <CommunityNavbar/>  
            </Switch>
      </AuthProvider> </Router>
     <div>
       <br/>
       <br/>
     </div>
      
        <Router> 
          
          <AuthProvider>    
            <Switch>     
              <Route path="/home" component={Home}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/yoga" component={yogaPage}/>
              <Route path="/painting" component={PaintingPage}/>
              <Route path="/funky-dancing" component={Login}/>
              <PrivateRoute exact path="/" component={Dashboard}/> 
              <PrivateRoute exact path="/myTimetable" component={Timetable}/>
              <Route path="/update-profile" component={UpdateProfile}/>
              <PrivateRoute exact path="/admin" component={AdminPage}/>
            </Switch>
          </AuthProvider>
        </Router>  

     
</Container>
          
        
     <Footer/>
     </>
  );
}

export default App;
