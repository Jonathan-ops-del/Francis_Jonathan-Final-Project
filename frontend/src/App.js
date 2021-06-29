import React from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import CoverLetter from './components/subpages/CoverLetter'
import Transcript from './components/subpages/Transcript'
import Portfolio from './components/pages/Portfolio'
import Project1 from './components/subpages/Project1'
import Project2 from './components/subpages/Project2'
import TheoPage from './components/subpages/TheoPage'
import MickeyPage from './components/subpages/MickeyPage'
import OlliePage from './components/subpages/OlliePage'
import Contact from './components/pages/Contact'
import User from './components/pages/User'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'


function App() {
  return (
   <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/CoverLetter" component={CoverLetter} />
          <Route exact path="/Transcript" component={Transcript} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Project1" component={Project1} />
          <Route exact path="/Project2" component={Project2} />
          <Route exact path="/TheoPage" component={TheoPage} />
          <Route exact path="/MickeyPage" component={MickeyPage} />
          <Route exact path="/OlliePage" component={OlliePage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/User" component= {User} />
          <Route exact path="/login" component= {Login} />
          <Route exact path="/submissions" component= {Listing} />
        </Switch>
        <Footer />  
    </BrowserRouter>
  )
}

export default App;
