import React from 'react';

import ContactForm from './ContactForm';
import ContactInfoChannels from './ContactInfoChannels';
import ContactInfoAddress from './ContactInfoAddress';

const Contact = () =>
  <section id="contact" className="wrapper style2-alt fade-up">
    <div className="inner">
      <h2>Kontakt</h2>
      <p>
        Großartig, dass Du Dich engagierst!
        <br />
        <br />
        Benutze am besten die Social-Media Kanäle um mit allen Helfern in Verbindung zu sein.
        <br />
        Bei direkten Fragen kannst Du uns auch eine Mail senden.
      </p>
      <div className="style1 split">
        <ContactInfoAddress />
        <ContactInfoChannels />
      </div>
    </div>
  </section>

export default Contact;
