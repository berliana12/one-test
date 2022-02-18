import React, {useState} from 'react'
import banner from './images/main-banner.jpg';
import icon01 from './images/icon_01.png';
import icon02 from './images/icon_02.png';
import icon03 from './images/icon_03.png';
import icon04 from './images/icon_04.png';
import icon05 from './images/icon_05.png';
import icon06 from './images/icon_06.png';
import top from './images/top-image.jpg';
import right from './images/right-image.jpg';
import left from './images/left.jpg';
import featured from './images/featured_post_01.jpg';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import "./Profile.css";
import axios from 'axios';

 function Profile() {
   
   const backgroundStyles ={
     backgroundImage: `url(${banner})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     height: '60vh',
     width: '118vh',
     marginLeft: 360,
     marginTop: 100,
     marginBottom: 100,
   }

   const leftImage ={
    backgroundImage: `url(${left})`,
    backgroundPosition: 'center',
     height: '40vh',
     width: '60vh',
     marginLeft: 340,
     marginTop: 50,
     marginBottom: 90,
   }

   const rightImage ={
    backgroundImage: `url(${right})`,
    backgroundPosition: 'center',
     height: '40vh',
     width: '60vh',
     marginTop: 50,
     marginLeft: 800,
     marginBottom: 90,
   }

   const [sidebar, setSidebar] = useState(false);
   const showSidebar = () => setSidebar(!sidebar);

   const SidebarData = [
     {
        title: 'HOMEPAGE',
        path: '/',
        cName: 'nav-text'
     },
     {
        title: 'SIMPLE PAGE',
        path: '/simple-page',
        cName: 'nav-text'
     },
     {
        title: 'SHORTCODES',
        path: '/shortcodes',
        cName: 'nav-text'
     },
     {
        title: 'DROPDOWN ONE',
        path: '/dropdown-one',
        cName: 'nav-text'
     },
     {
        title: 'DROPDOWN TWO',
        path: '/dropdown-two',
        cName: 'nav-text'
     },
     {
        title: 'EXTERNAL LINK',
        path: '/external-link',
        cName: 'nav-text'
     },
     {
      title: 'Featured Posts',
      path: '/external-link',
      cName: 'nav-text'
     }
   ]
   
  return (
    <div>
        <IconContext.Provider value={{color: 'white'}}>
          <nav className="navbar">
            <form className="d-flex">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <Link to='#' className='menu-bars' style={{marginLeft:-700}}>
              <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
              <a className="navbar-brand" href="#">RAMAYANA</a>
          </nav>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                  <AiIcons.AiOutlineClose/>
                </Link>
              </li>
              {SidebarData.map((item,index) => {
                return (
                  <li key={index} className={item.cName}>
                      <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                      </Link>
                  </li>
                )
              })}
              <li>
              <div className="col">
                <div className="card" style={{width:'8', height:'8', marginBottom: 8}}>
                  <img src={featured} className="card-img-top" alt="icon 1"/>
                  <div className="card-body-side">
                    <p className="card-text">Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam.</p>
                  </div>
                </div>
              </div>
              </li>
            </ul>
          </nav>
          
        </IconContext.Provider>

        <div className="jumbotron" style={backgroundStyles}>
            <div className="card-body">
              <h3 className="card-title"> <b>Hello, this is your <span className='highlighted-text'>Ramayana</span>  Theme.</b></h3>
              <h5 className="card-text">AWESOME HTML5 & CSS3 TEMPLATE</h5>
              <p>Do you know that Ramayana is a free to use Bootstrap 4 CSS template by <b>templatemo</b> ? You can edit and add more pages as you wanted for your personal or corporate websites. </p>
              <button className='btn btn-outline-primary btn-sm'>READ MORE</button>
            </div>
        </div> <hr className="my-4"/><br/>

        <div className="row row-cols-1 row-cols-md-3 g-8" style={{width: '55rem',marginTop:50, marginLeft:350, marginBottom: 100, textAlign:'center'}}>
          <div className="col">
            <div className="card">
              <img src={icon01} className="card-img-top" alt="icon 1"/><br/>
              <div className="card-body-group">
                <h5 className="card-title"><b>Web Design</b></h5>
                <p className="card-text">Credit goes to <a href='#'>Pexels</a> and <a href='#'>Raw Pixel</a> for images used in this template. Thank you.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={icon02} className="card-img-top" alt="icon 2"/><br/>
              <div className="card-body-group">
                <h5 className="card-title"><b>Bootstrap 4</b></h5>
                <p className="card-text">Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={icon03} className="card-img-top" alt="icon 3"/><br/>
              <div className="card-body-group">
                <h5 className="card-title"><b>HTML CSS</b></h5>
                <p className="card-text">Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam.</p>
              </div>
            </div><br/>
          </div>
          <div className="col">
            <div className="card">
              <img src={icon04} className="card-img-top" alt="icon 4"/><br/>
              <div className="card-body-group">
                <h5 className="card-title"><b>Download Free</b></h5>
                <p className="card-text">We have many free to use CSS web templates on our site for you.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={icon05} className="card-img-top" alt="icon 5"/><br/>
              <div className="card-body-group">
                <h5 className="card-title"><b>Get in touch</b></h5>
                <p className="card-text">You can get the fastest response from <a href='#'>templatemo</a> facebook page.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={icon06} className="card-img-top" alt="icon 6"/><br/>
              <div className="card-body-group">
                <h5 className="card-title"><b>Spread a word</b></h5>
                <p className="card-text">Please tell your friends about our websites. This is very helpful.</p>
              </div>
            </div>
          </div>
        </div> <hr className="my-4"/>
      
        <div className="card mb-3" style={{width: '55rem', marginTop: 100, marginLeft:340, marginBottom: 300}}>
          <img src={top} className="card-img-top" alt="top image"/>
          <div className="card-body-top">
            <h5 className="card-title">Ante Interdum Chambray</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#" className="btn btn-outline-primary btn-sm" style={{radius:0}}>READ MORE</a>
          </div>
        </div><hr className="my-4"/>

        <div className="card-body" style={leftImage}>
          <div className="card-body-left" style={{width: '24rem', textAlign:'left', marginLeft:450, marginTop:-20}}>
              <h5 className="card-title"><b>Ante Interdum Chambray</b></h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              <br/><br/>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <a href="#" className="btn btn-outline-primary btn-sm">READ MORE</a>
          </div>
        </div> 
        <hr className="my-4"/><br/>

        <div className="card-body" style={rightImage}>
          <div className="card-body-left" style={{width: '24rem', textAlign:'left', marginLeft:-480}}>
            <h5 className="card-title"><b>Ante Interdum Chambray</b></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            <br/><br/>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <a href="#" className="btn btn-outline-primary btn-sm">READ MORE</a>
          </div> 
        </div>
    </div>
  )
}


export default Profile