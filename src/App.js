import Header from './component/header';
import Home from './component/home';
import About from './component/about';
import Service from './component/Service';
import Contact from './component/contact';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/About' exact Component={About}/>
          <Route path='/Service' exact Component={Service}/>
         <Route path='/Contact' exact Component={Contact}/>


      </Routes>
      </Router>
    </div>
  );
}

export default App;
