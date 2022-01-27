import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4">
        <div className="social">
          <a
            className="instagram-page"
            href="https://www.instagram.com/planc_renzoanaya/"
            target="blank"
          >
          <p> Sigue nuestro blog para más tips de café </p>
          </a>
        </div>

        <div className="copyright">
         <p> © 2022 Copyright </p>
          <p>Alchemia Caffe </p>
        </div>
      </footer>
    );
  }
}

export default Footer;