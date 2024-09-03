import { footerIcons } from '../constants';

const Footer = () => {
  const socialMedias = footerIcons.social_media;
  const contact = footerIcons.contact;

  console.log(socialMedias);

  return (
    <footer>
      {socialMedias.map((socialMedia) => (
        <a key={socialMedia.name} target="_blank" href={socialMedia.link}>
          <img src={socialMedia.icon} alt={socialMedia.name} />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
