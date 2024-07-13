import './index.css';
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
    return(
        <div id="footer">
            <h3 id='social'>Socisl Media Plattforms</h3>
            <div id='icon-images'>
         <CiYoutube/>
        <FaFacebook />
        <FaLinkedin />
        <FaInstagram />
        <BsTwitterX />
            </div>
           <div id='contact'>
           <h3>Contact Us</h3>
          <p id='p1'> PhoneNumber: +254793058550</p>
          <p id='p1'>Email: protechs@gmail.com</p>
            </div>
            <div id='quick-links'>
            <h3>Quick Links</h3>
        <p id='h1'>Home</p>
        <p id='h1'>Podcasts</p>
        <p id='h1'>Videos</p>
        <p id='h1'>Blogs</p>
            </div>
    </div>
    )
}
export default Footer;