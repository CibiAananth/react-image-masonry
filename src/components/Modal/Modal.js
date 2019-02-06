import React from 'react';
import PropTypes from 'prop-types';
// css in js library for react
import withStyles from 'react-jss';

const styles = {
  root: ({ bgColor, height }) => ({
    background: bgColor,
    width: 200,
    height,
    margin: 3,
    outline: 'none',
    transition: 'all 22s',
  }),
  backDrop: {
    background: 'rgba(0,0,0,0.9)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 35,
    color: '#f1f1f1',
    fontSize: 40,
    fontWeight: 'bold',
    transition: '0.3s',
    outline: 'none',
  },
  content: ({ bgColor }) => ({
    background: bgColor,
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    animationName: 'zoom',
    animationDuration: '0.6s',
  }),
  hidden: {
    diplay: 'none',
  },
};

const Modal = ({ classes, handleModalClose }) => (
  <div className={classes.backDrop}>
    <span
      onClick={handleModalClose}
      onKeyDown={handleModalClose}
      role="button"
      tabIndex={0}
      className={classes.closeButton}
    >
      &times;
    </span>
    <div className={classes.content} />
  </div>
);

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

const StyledModal = withStyles(styles)(Modal);

export default StyledModal;
