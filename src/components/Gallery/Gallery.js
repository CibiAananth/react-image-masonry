import React, { Component } from 'react';
// library to set component properties
import PropTypes from 'prop-types';
// javascript util library
import _ from 'lodash';
// react library for masonry layout
import Masonry from 'react-masonry-component';
// blocks
import Blocks from 'components/Gallery/Blocks';
// helpers
import { getRandomColor, getRandomHeight } from 'utils/helpers';
import Modal from 'components/Modal/Modal';

class Gallery extends Component {
  state = {
    activeIndex: -1,
  };

  componentWillMount() {
    const {
      location: { pathname },
    } = this.props;

    let activeIndex = pathname.split('open/')[1];
    activeIndex = activeIndex ? Number(activeIndex) : -1;
    this.setState((_st, props) => ({
      height: _.times(props.blocksCount, () => getRandomHeight()),
      colors: _.times(props.blocksCount, () => getRandomColor()),
      activeIndex,
    }));
  }

  handleBlockClick = (index) => {
    const { history } = this.props;
    this.setState(() => ({ activeIndex: index }));
    history.push(`/open/${index}`);
  };

  handleModalClose = () => {
    const { history } = this.props;
    this.setState(() => ({ activeIndex: -1 }));
    history.push('/');
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
              key={blocksCount - i}
              height={height[i]}
              bgColor={colors[i]}
              handleClick={() => handleBlockClick(i)}
            />
          ))}
        </Masonry>
        <Modal
          handleModalClose={handleModalClose}
          isActive={activeIndex !== -1}
          bgColor={colors[activeIndex]}
        />
      </React.Fragment>
    );
  }
}

Gallery.propTypes = {
  blocksCount: PropTypes.number,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

Gallery.defaultProps = {
  blocksCount: 30,
};

export default Gallery;
