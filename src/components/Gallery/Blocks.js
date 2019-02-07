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
    zIndex: 9,
  }),
};

const Blocks = withStyles(styles)(({ classes, handleClick }) => (
  <div
    className={classes.root}
    onClick={handleClick}
    onKeyDown={handleClick}
    role="link"
    tabIndex={0}
  />
));

Blocks.propTypes = {
  classes: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
};

Blocks.defaultProps = {
  classes: {},
};

export default Blocks;
