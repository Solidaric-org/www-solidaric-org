import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      <li>
        <h3>Adresse</h3>
        <span>
          Solidaric.org
          <br />
          c/o 4commerce technologies AG
          <br />
          Burchardstrasse 22
          <br />
          20095 Hamburg
          <br />
          Deutschland
        </span>
      </li>
      <li>
        <h3>Email</h3>
        <a href="/#">contribute@solidaric.org</a>
      </li>
      <li>
        <h3>Telefon</h3>
        <span>(+49) 40 5619570</span>
      </li>
      <li>
        <h3>Social Networks</h3>
        <ul className="icons">
          <li>
            <a href="/#" className="fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          {/*
          <li>
            <a href="/#" className="fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          */}
          <li>
            <a href="/#" className="fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;
