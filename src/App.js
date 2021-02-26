import './App.css';
import Home from './Home'
import Procedures from './Procedures'
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// we get <Router /> component, <Route /> components, <Link /> components


function App() {
  return (
    <Router>
        <Route exact path='/' component={Home} />
        <Route path='/procedures' component={Procedures} />
    </Router>
  );
}

export default App;
