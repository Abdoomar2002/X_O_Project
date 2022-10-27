import React from "react";
import { Link } from "react-router-dom";

function Footer(){
  return<section id="footer">
  <footer className="row  ">
      <div className="col-sm-4 ">
        <Link  className="d-flex align-items-center mb-3 link-dark text-decoration-none"> </Link>
        <p className="text-muted">© 2022</p>
        <i className="fa-brands fa-facebook icon"></i>
        <i className="fa-brands fa-twitter icon"></i>
        <i className="fa-solid fa-envelope icon"></i>
        <i className="fa-brands fa-square-whatsapp icon"></i>
      </div>

      <div className="col mb-3">

        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col mb-3">

        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col mb-3">

        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>
    </footer>
</section>
}
export default Footer;
