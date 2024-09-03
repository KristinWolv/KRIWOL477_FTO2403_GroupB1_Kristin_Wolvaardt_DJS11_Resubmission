import PropTypes from 'prop-types';

const Notification = ({ message, onClose }) => (
  <div className="notification">
    <p>{message}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired, 
  type: PropTypes.oneOf(['success', 'error', 'info']).isRequired,
};

export default Notification;