import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import './footer.css';

export default function Footer() {
return (
<footer className="footer">
<div className="footer-container">
{/* Redes sociais */}
<div className="footer-social">
<a href="#" aria-label="Facebook"><FaFacebookF /></a>
<a href="#" aria-label="Instagram"><FaInstagram /></a>
<a href="#" aria-label="Twitter"><FaTwitter /></a>
<a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
</div>

    {/* Texto */}
    <p>© 2025 Skynet Streaming. Todos os direitos reservados.</p>
  </div>
</footer>

);
}




