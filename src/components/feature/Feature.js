import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../common/Scroll';

const Feature = ({image, heading, description, to}) =>
  <section>
    <div className="image">
      <img src={image} alt="" data-position="center center" />
    </div>
    <div className="content">
      <div className="inner">
        <h2>{heading}</h2>
        <p>{description}</p>
        { to &&
          <ul className="actions">
            <li>
              { to.anker
                ? <Scroll type="id" element={to.anker}>
                    <a href={"#" + to.anker} className="button">
                      {to.label}
                    </a>
                  </Scroll>
                : <Link className="button" to={to.href}>
                    {to.label}
                  </Link>
              }
            </li>
          </ul>
        }
      </div>
    </div>
  </section>

export default Feature;
