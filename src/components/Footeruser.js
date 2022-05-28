import React from "react";

export default function Footeruser() {
  return (
    <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-dark fixed-bottom text-white">
      <div className="me-5 d-none d-lg-block">
        {/* <span>Get connected :</span> */}
      </div>
      <div>
        <a href="https://github.com/shashank20-02" className="me-4 text-reset">
          <i className="fa fa-github fa-inverse"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shashank-sharma-9767091b4/"
          className="me-4 text-reset"
        >
          <i className="fa fa-linkedin fa-inverse"></i>
        </a>
        <a
          href="https://www.instagram.com/shashank.21.10/"
          className="me-4 text-reset"
        >
          <i className="fa fa-instagram fa-inverse"></i>
        </a>
      </div>
    </div>
  );
}
