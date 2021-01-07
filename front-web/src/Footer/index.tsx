import './styles.css';
import { ReactComponent as Youtube } from './youtube.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Instagran } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior" target="_new">
                    <Linkedin/>
                </a>
                <a href="https://www.instagram.com/devsuperior" target="_new">
                    <Instagran/>
                </a>
            </div>
        </footer>
    )
}
export default Footer;