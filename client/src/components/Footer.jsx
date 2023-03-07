import { Link } from "react-router-dom";
import logo from "/images/dark-nobg.png";

function Footer() {
    return (
        <footer className="footer p-10 bg-secondary text-primary flex flex-col lg:flex-row justify-between 2xl:justify-evenly items-center lg:items-start">
            <div className="flex flex-col items-center">
                <img
                    src={logo}
                    alt="Vertuze Digital Tech Logo"
                    className="w-60"
                />
                <p>Providing reliable tech since 2018</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
                <span className="footer-title">Site Map</span>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/series">Series</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="flex flex-col items-center lg:items-start">
                <span className="footer-title">Company</span>
                <Link to="/">Company Policy</Link>
                <Link to="/">Cookie Policy</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms and Conditions</Link>
                <Link to="/">Social Responsibilities</Link>
            </div>
            <div className="flex flex-col items-center lg:items-start">
                <p className="text-lg">Join us on our social media pages!</p>
                <div>
                    <i className="fa-brands fa-square-facebook fa-2xl mr-2" />
                    <i className="fa-brands fa-square-instagram fa-2xl mr-2" />
                    <i className="fa-brands fa-linkedin fa-2xl mr-2" />
                    <i className="fa-brands fa-square-twitter fa-2xl mr-2" />
                    <i className="fa-brands fa-square-youtube fa-2xl" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
