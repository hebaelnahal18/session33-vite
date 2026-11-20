import { NavLink } from "react-router"


function Navbar() {
  return (
    <>
          <nav className="navbar">
                <div className="logo">
                    <img src="./images/logo (1).png" alt="logo image"/>
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/" className='navlink'>Home</NavLink></li>
                    <li><NavLink to="/about" className='navlink'>About</NavLink></li>
                    <li><NavLink to="/download" className='navlink'>Download</NavLink></li>
                    <li className="with-arrow"><a href="#service">pages</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#ervice">Services</a>
                            <a className="dropdown-item" href="#depertments">Depertments</a>
                            <a className="dropdown-item" href="#elements">Elements</a>
                        </div>
                    </li>
                    <li className="with-arrow"><a href="blog">Blog</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Blog</a>
                            <a className="dropdown-item" href="#">Single Blog</a>
                        </div>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a className="btn_2" href="#">HOT LINE- 09856</a>
                <div className="menu-icon">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
      
    </>
  )
}

export default Navbar
