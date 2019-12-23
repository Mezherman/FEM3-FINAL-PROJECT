import React, { Component } from 'react';
import './footerAbout.scss';

export default class FooterAbout extends Component {
  render() {
    return (
      <div className="footer-about">
        <div className="footer-about-header">
          <img className="footer-about-logo" src="./img/wmf-footer.png" alt="logo" />
          <h4 className="footer-about-title">The Culinary experts</h4>
        </div>
        <p className="footer-about-text">
          For more than 160 years, the brands that make up the WMF Group have represented the best
          in cooking, drinking and dining.
        </p>
      </div>
    )
  }
}