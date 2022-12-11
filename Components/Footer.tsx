import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTiktok,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	var currentYear: number = new Date().getFullYear();
	return (
		<footer className="footer-con">
			 <div className="footer-container">
				<div className="foot">
					<h3>Menu</h3>
					<ul className="menu">
						<li>
							<a className="menu-item" href="#">
								Home
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								Events
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								About Us
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>

				<div className="foot">
					<h3>Follow Us</h3>
					<ul className="menu">
						<li>
							<a className="menu-item" href="#">
								<FontAwesomeIcon icon={faFacebook} /> Facebook
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								<FontAwesomeIcon icon={faTwitter} /> Twitter
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								<FontAwesomeIcon icon={faInstagram} /> Instagram
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								<FontAwesomeIcon icon={faLinkedin} /> Linkedin
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								<FontAwesomeIcon icon={faTiktok} /> Tik Tok
							</a>
						</li>
					</ul>
				</div>

				<div className="foot">
					<h3>Contact and Support</h3>
					<ul className="menu">
						<li>
							<a className="menu-item" href="#">
								Whatsapp
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								support@gmail.com
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								+234945984
							</a>
						</li>
						<li>
							<a className="menu-item" href="#">
								FAQs
							</a>
						</li>
						<div className="footer-btn">
							<a href="#">Contact Us</a>
						</div>
					</ul>
				</div>
				<div className="get-updates foot">
					<h3>Get Updates </h3>

					<p>
						Subscribe to our new letter ad get updated about future events and
						activities
					</p>
					<input type="text" placeholder="Your Email Address"></input>
					<form>
						<a href="#" className="footer-btn2">
							Submit
						</a>
					</form>
				</div>
			</div>

			<div className="last-footer">
				<div className="copyright">
					<p>© {currentYear} Hostout all right reserved</p>
				</div>
				<div className="address">
					126 Joel Ogunnaike Street,Ikeja GRA, Ikeja,Lagos
				</div>
			</div> 
		</footer>
	);
};
export default Footer;
