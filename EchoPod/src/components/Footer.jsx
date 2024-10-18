import PropTypes from 'prop-types';

const Footer = ({ links }) => (
  <footer>
    {links.map(link => (
      <a key={link.href} href={link.href}>{link.text}</a>
    ))}
  </footer>
);

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default Footer;

