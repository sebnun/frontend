import React from 'react';

import './Item.css';
import triangle from './triangle.png';

const Item = (props) => (

  <div className="col col-sm-4 col-padded">

    <img className="offering-image omorfia-image" src={props.image} alt={props.title} />

    <div className="offering-info-box">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a className="btn btn-primary offering-box-button-link" href={props.href}>{props.buttonLabel}</a>
      <img className="bottom-triangle omorfia-image" src={triangle} alt="Triangle box bottom" />
    </div>

  </div>
);

Item.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  buttonLabel: React.PropTypes.string.isRequired,
  href: React.PropTypes.string
}

Item.defaultProps = {
  href: '#'
};

export default Item;