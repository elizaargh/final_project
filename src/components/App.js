
import { Container } from 'react-bootstrap';
import Signup from './Signup.js';
import { AuthProvider } from './contexts/AuthContext.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './Dashboard.js';
import Login from './Login.js';
import PrivateRoute from "./PrivateRoute";
import Home from './Home.js';
import UpdateProfile from './UpdateProfile.js';
import Navbar from './Navbar.js';

function App() {
  return (
    
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
      >
        <div className='w-100' style={{maxWidth: "400px"}}>
        <Router> 
          <AuthProvider>    
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard}/>
              <Route path="/home" component={Home}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/update-profile" component={UpdateProfile}/>
            </Switch>
          </AuthProvider>
        </Router>  
   
          
        </div>
      </Container>
  );
}

export default App;
