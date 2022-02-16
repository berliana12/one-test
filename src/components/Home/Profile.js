import React from 'react'
import "./Profile.css";
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
// import left from '../Images/left.jpg'
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className="wrapper">
                    {/* <!-- Sidebar --> */}
                    <nav id="sidebar">
                        <div className='colz'>
                            <nav className="navbar navbar-dark bg-dark  fixed-top">
                                <div className="navbar container-fluid">
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                    <button className=" navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    </div>
                                    <a className=" navbar-brand" href="#">RAMAYANA</a>
                                </div>
                            </nav><br/><br/><br/>
                        </div>
                        <ul className="list-unstyled components"><br/>
                            <p>HOMEPAGE</p><hr/>
                            <li>
                                <p>SIMPLE PAGE</p>
                            </li><hr/>
                            <li>
                                <p>SHORTCODES</p>
                            </li><hr/>
                            <li className="active">
                                <a data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">DROPDOWN ONE</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="#">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 3</a>
                                    </li>
                                </ul>
                            </li><hr/>
                            <li>
                                <a data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">DROPDOWN TWO</a>
                                <ul className="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                        <a href="#">Page 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 3</a>
                                    </li>
                                </ul>
                            </li><hr/>
                            <li>
                                <p>EXTERNAL LINK</p>
                            </li>
                        </ul><hr/><hr/>
                        <h5>Featured Posts</h5>
                        <Card style={{ width: '14rem' }}>
                            <img src="../images/featured_post_01.jpg"alt="left image"/> 
                            <Card.Body>
                                {/* <Card.Title style={{color:'black'}}>Card Title</Card.Title> */}
                                <Card.Text style={{color:'black'}}>
                                Aliquam egestas convallins eros sed gravida.
                                Curabitur consequat sit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </nav><hr/>
                    <Carousel style={{}}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="../images/main-banner.jpg"
                            alt="First slide"
                            />
                            <div className='card-page'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <h2 className='card-title'>Hello, this is your <span className='highlighted-text'>Ramayana</span>  Theme
                                        </h2>
                                        <h5 className='card-text'>AWESOME HTML5 & CSS3 TEMPLATE</h5>
                                        <p className='card-details'>Do you know that <b>Ramayana</b> is a free to use Bootstrap 4 CSS template by <b>templatemo</b> ? You can edit and add more pages as you wanted for your personal or corporate websites.</p>
                                        <button type="button" style={{margin:5}} className='btn btn-outline-primary btn-sm'>READ MORE</button>
                                    </div>
                                </div>
                            </div> 
                        </Carousel.Item>
                    </Carousel>
                    <br/>
                    <br/>
                </div>
                <CardGroup>
                        <Card style={{ width: '10rem'}}>
                            <Card.Img variant="top" src="../images/icon_01.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ width: '50px' , height:'50px'}}>
                            <Card.Img variant="top" src="../images/icon_02.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="../images/icon_03.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                </CardGroup>
                <CardGroup>
                        <Card style={{ width: '10rem'}}>
                            <Card.Img variant="top" src="../images/icon_04.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ width: '50px' , height:'50px'}}>
                            <Card.Img variant="top" src="../images/icon_05.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="../images/icon_06.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                </CardGroup>
                <>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="holder.js/100px180" />
                    </Card>
                </>
            </div>
        </div>
    </div>
  )
}


