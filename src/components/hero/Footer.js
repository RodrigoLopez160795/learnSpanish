import React from "react";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__main">
          <div className="footer__icons">
            <p>Contact us</p>
            <a href="https://www.facebook.com/rodrigo.lopez.7739/" className="footer__icon">
              <img
                src="https://image.flaticon.com/icons/png/512/145/145802.png"
                alt="Facebook icon"
                className="pointer"
              />
            </a>
            <a href="https://twitter.com/ItoRodrigo" className="footer__icon">
              <img
                src="https://image.flaticon.com/icons/png/512/145/145812.png"
                alt="Twitter icon"
                className="pointer"
              />
            </a>
            <a href="https://www.instagram.com/rodr_lop/?hl=es" className="footer__icon">
              <img
                src="https://image.flaticon.com/icons/png/512/3955/3955024.png"
                alt="Instragram icon"
                className="pointer"
              />
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          <hr />
          <h6>Rodrigo López Alvarado</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
