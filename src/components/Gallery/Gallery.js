/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// javascript util library
import _ from 'lodash';
// react library for masonry layout
import Masonry from 'react-masonry-component';
// blocks
import Blocks from 'components/Gallery/Blocks';
// helpers
import { getRandomColor, getRandomHeight } from 'utils/helpers';
import StyledModal from 'components/Modal/Modal';

class Gallery extends Component {
  state = {
    activeIndex: -1,
  };

  componentWillMount() {
    this.setState((_st, props) => ({
      height: _.times(props.blocksCount, () => getRandomHeight()),
      colors: _.times(props.blocksCount, () => getRandomColor()),
    }));
  }

  handleBlockClick = (index) => {
    this.setState(() => ({ activeIndex: index }));
  };

  handleModalClose = () => {
    this.setState(() => ({ activeIndex: -1 }));
  };

  render() {
    const { handleBlockClick, handleModalClose } = this;
    const { activeIndex, colors, height } = this.state;
    const { blocksCount } = this.props;
    return (
      <React.Fragment>
        <Masonry
          options={{
            transitionDuration: 50,
          }}
        >
          {_.times(blocksCount, i => (
            <Blocks
              blockIndex={i}
              scale={10}
              activeIndex={activeIndex}
              key={blocksCount - i}
              height={height[i]}
              bgColor={colors[i]}
              handleClick={() => handleBlockClick(i)}
            />
          ))}
        </Masonry>
        {activeIndex !== -1 ? (
          <StyledModal
            bgColor={colors[activeIndex]}
            handleModalClose={handleModalClose}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

Gallery.propTypes = {
  blocksCount: PropTypes.number,
};

Gallery.defaultProps = {
  blocksCount: 30,
};

export default Gallery;
