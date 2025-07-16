import React ,{useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky,setsticky]=useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setsticky(true);
    } else {
      setsticky(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const togglemenu = () => {
    mobileMenuOpen? setMobileMenuOpen(false) : setMobileMenuOpen(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" srcset="" className='logo' />

        <ul className={mobileMenuOpen?'' : 'hie-mobile-menu'}>
        <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li> <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li> <Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li> <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li> <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li> <Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
        
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={togglemenu}/>
    </nav>
  )
}

export default Navbar
