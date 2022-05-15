import React from 'react'
import Nav from './components/Navigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer'
import Blogs from './pages/Blogs';
import About from './pages/About';
import Currency from './pages/Currency';

function App() {
  return (
    <>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blogs/" component={Blogs} />
            <Route path="/about/" component={About} />
            <Route path="/exchange/" component={Currency} />
          </Switch>
          <Footer />
        </Router>
    </>
  )
}

export default App;