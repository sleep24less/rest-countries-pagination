import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p>{new Date().getFullYear()} Arno Manukian</p>
            <a
                href='https://github.com/sleep24less'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </footer>
    );
}

export default Footer;
