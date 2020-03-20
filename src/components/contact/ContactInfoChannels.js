import React from "react";

const ContactInfoChannels = () =>
  <section>
    <ul className="contact">
      <li>
        <h3>Email</h3>
        <a href="/#">contribute@solidaric.org</a>
      </li>
      <li>
        <h3>Telefon</h3>
        <a href="tel:+49405619470">+49&nbsp;40&nbsp;5619570</a>
      </li>
      <li>
        <h3>Social Networks</h3>
        <ul className="icons">
          <li>
            <a href="https://twitter.com/SolidaricOrg" className="fa-twitter">
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
            <a href="https://github.com/Solidaric-org" className="fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>

export default ContactInfoChannels;
