import { footerIcons } from '../constants';
import { styles } from '../styles';
import arrowUp from '../assets/arrowUp.png';

const Footer = () => {
  const socialMedias = footerIcons.social_media;
  const contacts = footerIcons.contact;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${styles.paddingX} bg-gray-900 text-gray-300 py-8`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Social Media</h3>
            <div className="flex space-x-4">
              {socialMedias.map((social, i) => (
                <a href={social.url} key={i} target="_blank" className="hover:text-white transition-colors">
                  <img src={social.icon} alt={social.name} className="w-8 h-8" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              {contacts.map((contact, i) => (
                <li key={i}>
                  <a href={contact.url} target='_blank' className="flex gap-2 items-center hover:text-white transition-colors">
                    <img src={contact.icon} alt={contact.name} className="w-8 h-8" />
                    <span>{contact.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
            <p className="text-sm">
              Passionate developer crafting digital experiences with creativity and precision. Always learning, always
              growing and searching my laboral path in web development world.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} García Daniel. All rights reserved.</p>
          <button
            variant="ghost"
            size="sm"
            className="flex items-center gap-4 bg- text-gray-300 hover:text-white"
            onClick={scrollToTop}
          >
            <img src={arrowUp} className="w-8 h-8" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
