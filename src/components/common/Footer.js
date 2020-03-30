import React, { useState, useEffect } from "react"
import '../../assets/sass/main.scss';

const Footer = () => {
  // Client-side Runtime Data Fetching
  const [hitCount, setHitCount] = useState(0);
  useEffect(() => {
    let query ='https://hitcounter.pythonanywhere.com/count' + '?url=' + encodeURIComponent('solidaric-org.github.io/www-solidaric-org')
    // get data from counter api
    fetch(query)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setHitCount(resultData)
      }) // just set data for the number of hits
  }, [])

  return(
    <footer id="footer" className="wrapper alt">
      <div className="inner">
        <ul className="menu">
          <li>
            &copy; 2020 Solidaric.org, all rights reserved.
          </li>
          <li>
            <a href="/#contact">Impressum</a>
          </li>
          <li>
            {hitCount} Besuche
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
