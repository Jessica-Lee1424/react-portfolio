import Contact from "./Contact";
import "./footer.css";

function Footer () {
    return (
        <footer>
            <Contact/>
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            {/* <p className="test"> Test123 </p> */}
        </footer>
    );
};

export default Footer;