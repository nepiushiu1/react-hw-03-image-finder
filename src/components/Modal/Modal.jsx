import css from './Modal.module.css';
import React from 'react';
// import PropTypes from 'prop-types';

export class Modal extends React.Component {
  // static propTypes = {
  //   onClose: PropTypes.func.isRequired,
  //   largeImageURL: PropTypes.string.isRequired,
  // };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className={css.overlay} onClick={this.onBackdropClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
