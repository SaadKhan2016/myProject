import React from 'react';
import Header from '../Header';
import Footer from '../Footer';



let Home =() =>{
    return(
        <div>  
            <Header/>  
            <div className="container">
                <br/>
                <h1 className="text-center" id="hf">My Name is Saad and I love Programming</h1>
                <br/>
                {/* For First Row */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card  text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">React JS</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card  text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">My First Deep Learning Project</h5>
                                <p className="card-text">I Make my First Deep learning Project For Doodle Recognition on Flask App <br/><a>Smart Art</a>.</p>
                                <a href="#" className="btn btn-primary">Want To Check</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card  text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Bootstrap</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                {/* for Second Row */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Spring Boot</h5>
                                <p className="card-text">As I make crud on Spring Boot on internship so its here<a><br/>JavaApi</a></p>
                                <a href="#" className="btn btn-primary">Want To Check</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Software Development</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Angular Js</h5>
                                <p className="card-text">As I make a Frontend of my java crud API So I make it on Angular and here it is <a>Angular Theme</a>.</p>
                                <a href="#" className="btn btn-primary">Want To Check</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    )}

export default Home;