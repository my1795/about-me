import React from 'react';
import { BrowserRouter as Router , Switch , Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Navbar , Nav} from 'react-bootstrap'
import './App.css';
import Footer  from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title : 'Mustafa YILDIRIM',
      headerLinks : [
        {title : 'Home' , path: '/' },
        {title : 'About' , path: '/about' },
        {title : 'Contact' , path: '/contact' },
      ],
      home : {
        title : 'Mustafa...',
        subTitle: 'Hi earhtlings, I am your friend',
        text: 'This is the place where you want to know me. Please click every possible button. Report me the bugs :)'
      },
      about : {
        title : 'Be relentlers ',
        subTitle: 'Projects the make a difference',
        text: 'This is me we will start'
      },
      contact : {
        title : 'Be relentlers ',
        subTitle: 'Projects the make a difference',
        text: 'This is me we will start'
      }
    }
  }
  render() {
    return (
        <Router>
          <Container className= "p-0" fluid={true}> 
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Mustafa YILDIRIM</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/about-me">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
           <Route path="/about-me" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />
          <Footer/>

          </Container>
        </Router>
    );
  }

}

export default App;
