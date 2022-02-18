import Profile from "./components/Profile";
import Api from "./Api.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Profile />
        
      </Router>
      <Api/>
    </>
    
  );
}

export default App