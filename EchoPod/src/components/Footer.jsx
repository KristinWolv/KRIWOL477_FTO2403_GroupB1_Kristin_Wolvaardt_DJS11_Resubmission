
import PropTypes from 'prop-types';
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 EchoPod. All rights reserved.</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  text: PropTypes.string,
};

export default Footer;