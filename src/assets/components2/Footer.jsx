
import { FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.instagram.com/seu_perfil" target="_blank">
        <FaInstagram />
      </a>
      <a href="https://github.com/seu_usuario" target="_blank">
        <FaGithub />
      </a>
    </footer>
  );
}

export default Footer;


