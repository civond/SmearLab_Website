import './App.css';
import './components/fade.css';
import './fonts/HKNova-Medium.ttf';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrolltoTop from './components/scrolltoTop';

// CSS Files
import './components/styling.css';
//import './pages/css/fade.css';
//import './pages/css/banners.css';

// Pages
import home from './pages/home';
import people from './pages/people';
import research from './pages/research';
import publications from './pages/publications';
import contact from './pages/contact';

//Website Color
//document.body.style.backgroundColor = "#CBA5F9";

//Website Title
document.title = "SMEARLab | Home"
function App() {
  return (
    <Router>
      <ScrolltoTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/home' component={home} />
        <Route path='/people' component={people} />
        <Route path='/research' component={research} />
        <Route path='/publications' component={publications} />
        <Route path='/contact' component={contact} />
      </Switch>
    </Router>
  );
}
export default App;
