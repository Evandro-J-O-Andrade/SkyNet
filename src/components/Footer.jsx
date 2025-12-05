import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      <p>© 2025 Skynet Streaming. Todos os direitos reservados.</p>
    </footer>
  );
}
