import React, { Component } from 'react';
import {Route,Link,HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }

      toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }
    
      render() {
    
      const show = (this.state.menu) ? "show" : "" ;
   return(
       <div>
            <div className="pos-f-t">
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
                <button className="navbar-toggler collapsed" type="button" onClick={this.toggleMenu} data-target="#navbarTogglerDemo01"  data-target=".nav-collapse" aria-controls="navbarTogglerDemo01" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse " + show} id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Profile">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Profile/About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Profile/Event">Event</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Profile/Contact">Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            
        </div>

        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./images/image2.jpeg')}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Knowledge is power.</h3>
                <p>Code is like humor. When you have to explain it, it’s bad.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./images/image1.jpeg')}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Fix the cause, not the symptom.</h3>
                <p>Simplicity is the soul of efficiency.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./images/image3.jpeg')}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Make it work, make it right, make it fast.</h3>
                <p>Before software can be reusable it first has to be usable</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        
    </div>
    
    
    )
}
}

export default Header;