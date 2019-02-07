import React from 'react';
import PropTypes from 'prop-types';
// css in js library for react
import withStyles from 'react-jss';
import classnames from 'classnames';

const styles = {
  '@keyframes zoom': {
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
  },
  '@keyframes opacity': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  active: {
    '&$root': {
      zIndex: 10,
      display: 'block',
    },
  },
  root: {
    display: 'none',
    background: 'rgba(0,0,0,0.4)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
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
    animationName: 'opacity',
    animationDuration: '1s',
    zIndex: 1,
  },
  content: ({ bgColor }) => ({
    background: bgColor,
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    animationName: 'zoom',
    animationDuration: '1s',
  }),
};

const Modal = ({ classes, handleModalClose, isActive }) => {
  const classNames = classnames({
    [classes.active]: isActive,
    [classes.root]: true,
  });
  return (
    <React.Fragment>
      <div className={classNames}>
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
    </React.Fragment>
  );
};

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const StyledModal = withStyles(styles)(Modal);

export default StyledModal;
