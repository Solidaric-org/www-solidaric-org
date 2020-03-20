import React from 'react';

import Layout from '../../components/common/layout';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" class="wrapper">
        <div class="inner">
          <h1 class="major">Elements</h1>

          <section>
            <h2>Text</h2>
            <p>
              This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
              <i>italic</i> and this is <em>emphasized</em>. This is{' '}
              <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code: <code>for (;;) </code>
              . Finally, <a href="/">this is a link</a>.
            </p>
            <hr />
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing blandit tempus
              accumsan.
            </p>
            <hr />
            <h2>Heading Level 2</h2>
            <h3>Heading Level 3</h3>
            <h4>Heading Level 4</h4>
            <hr />
            <h3>Blockquote</h3>
            <blockquote>
              Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
              sagittis eget tempus euismod. Vestibulum ante ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
              ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
              faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.
            </blockquote>
            <h3>Preformatted</h3>
            <pre>
              <code>
                i = 0; while (!deck.isInOrder()) print 'Iteration ' + i;
                deck.shuffle(); i++; print 'It took ' + i + ' iterations to sort
                the deck.';
              </code>
            </pre>
          </section>

          <section>
            <h2>Lists</h2>
            <div class="row">
              <div class="col-6 col-12-medium">
                <h3>Unordered</h3>
                <ul>
                  <li>Dolor pulvinar etiam.</li>
                  <li>Sagittis adipiscing.</li>
                  <li>Felis enim feugiat.</li>
                </ul>
                <h3>Alternate</h3>
                <ul class="alt">
                  <li>Dolor pulvinar etiam.</li>
                  <li>Sagittis adipiscing.</li>
                  <li>Felis enim feugiat.</li>
                </ul>
              </div>
              <div class="col-6 col-12-medium">
                <h3>Ordered</h3>
                <ol>
                  <li>Dolor pulvinar etiam.</li>
                  <li>Etiam vel felis viverra.</li>
                  <li>Felis enim feugiat.</li>
                  <li>Dolor pulvinar etiam.</li>
                  <li>Etiam vel felis lorem.</li>
                  <li>Felis enim et feugiat.</li>
                </ol>
                <h3>Icons</h3>
                <ul class="icons">
                  <li>
                    <a href="/" class="icon fa-twitter">
                      <span class="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" class="icon fa-facebook">
                      <span class="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" class="icon fa-instagram">
                      <span class="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" class="icon fa-github">
                      <span class="label">Github</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h2>Actions</h2>
            <div class="row">
              <div class="col-6 col-12-medium">
                <ul class="actions">
                  <li>
                    <a href="/" class="button primary">
                      Default
                    </a>
                  </li>
                  <li>
                    <a href="/" class="button">
                      Default
                    </a>
                  </li>
                </ul>
                <ul class="actions small">
                  <li>
                    <a href="/" class="button primary small">
                      Small
                    </a>
                  </li>
                  <li>
                    <a href="/" class="button small">
                      Small
                    </a>
                  </li>
                </ul>
                <ul class="actions stacked">
                  <li>
                    <a href="/" class="button primary">
                      Default
                    </a>
                  </li>
                  <li>
                    <a href="/" class="button">
                      Default
                    </a>
                  </li>
                </ul>
                <ul class="actions stacked">
                  <li>
                    <a href="/" class="button primary small">
                      Small
                    </a>
                  </li>
                  <li>
                    <a href="/" class="button small">
                      Small
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-12-medium">
                <ul class="actions stacked">
                  <li>
                    <a href="/" class="button primary fit">
                      Default
                    </a>
                  </li>
                  <li>
                    <a href="/" class="button fit">
                      Default
                    </a>
                  </li>
                </ul>
                <ul class="actions stacked">
                  <li>
                    <a href="/" class="button primary small fit">
                      Small
                    </a>
                  </li>
                  <li>
                    <a href="/" class="button small fit">
                      Small
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>Table</h2>
            <h3>Default</h3>
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Item One</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item Two</td>
                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item Three</td>
                    <td> Morbi faucibus arcu accumsan lorem.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item Four</td>
                    <td>Vitae integer tempus condimentum.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item Five</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" />
                    <td>100.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h3>Alternate</h3>
            <div class="table-wrapper">
              <table class="alt">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Item One</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item Two</td>
                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item Three</td>
                    <td> Morbi faucibus arcu accumsan lorem.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item Four</td>
                    <td>Vitae integer tempus condimentum.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item Five</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" />
                    <td>100.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          <section>
            <h3>Buttons</h3>
            <ul class="actions">
              <li>
                <a href="/" class="button primary">
                  Primary
                </a>
              </li>
              <li>
                <a href="/" class="button">
                  Default
                </a>
              </li>
            </ul>
            <ul class="actions">
              <li>
                <a href="/" class="button large">
                  Large
                </a>
              </li>
              <li>
                <a href="/" class="button">
                  Default
                </a>
              </li>
              <li>
                <a href="/" class="button small">
                  Small
                </a>
              </li>
            </ul>
            <ul class="actions fit">
              <li>
                <a href="/" class="button primary fit">
                  Fit
                </a>
              </li>
              <li>
                <a href="/" class="button fit">
                  Fit
                </a>
              </li>
              <li>
                <a href="/" class="button fit">
                  Fit
                </a>
              </li>
            </ul>
            <ul class="actions fit small">
              <li>
                <a href="/" class="button primary fit small">
                  Fit + Small
                </a>
              </li>
              <li>
                <a href="/" class="button fit small">
                  Fit + Small
                </a>
              </li>
              <li>
                <a href="/" class="button fit small">
                  Fit + Small
                </a>
              </li>
            </ul>
            <ul class="actions">
              <li>
                <a href="/" class="button primary icon fa-download">
                  Icon
                </a>
              </li>
              <li>
                <a href="/" class="button icon fa-upload">
                  Icon
                </a>
              </li>
              <li>
                <a href="/" class="button icon fa-save">
                  Icon
                </a>
              </li>
            </ul>
            <ul class="actions">
              <li>
                <span class="button primary disabled">Disabled</span>
              </li>
              <li>
                <span class="button disabled">Disabled</span>
              </li>
            </ul>
          </section>

          <section>
            <h2>Form</h2>
            <form method="post" action="#">
              <div class="row gtr-uniform">
                <div class="col-6 col-12-xsmall">
                  <input
                    type="text"
                    name="demo-name"
                    id="demo-name"
                    value=""
                    placeholder="Name"
                  />
                </div>
                <div class="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="demo-email"
                    id="demo-email"
                    value=""
                    placeholder="Email"
                  />
                </div>
                <div class="col-12">
                  <select name="demo-category" id="demo-category">
                    <option value="">- Category -</option>
                    <option value="1">Manufacturing</option>
                    <option value="1">Shipping</option>
                    <option value="1">Administration</option>
                    <option value="1">Human Resources</option>
                  </select>
                </div>
                <div class="col-4 col-12-small">
                  <input
                    type="radio"
                    id="demo-priority-low"
                    name="demo-priority"
                    checked
                  />
                  <label htmlFor="demo-priority-low">Low</label>
                </div>
                <div class="col-4 col-12-small">
                  <input
                    type="radio"
                    id="demo-priority-normal"
                    name="demo-priority"
                  />
                  <label htmlFor="demo-priority-normal">Normal</label>
                </div>
                <div class="col-4 col-12-small">
                  <input
                    type="radio"
                    id="demo-priority-high"
                    name="demo-priority"
                  />
                  <label htmlFor="demo-priority-high">High</label>
                </div>
                <div class="col-6 col-12-small">
                  <input type="checkbox" id="demo-copy" name="demo-copy" />
                  <label htmlFor="demo-copy">Email me a copy</label>
                </div>
                <div class="col-6 col-12-small">
                  <input
                    type="checkbox"
                    id="demo-human"
                    name="demo-human"
                    checked
                  />
                  <label htmlFor="demo-human">Not a robot</label>
                </div>
                <div class="col-12">
                  <textarea
                    name="demo-message"
                    id="demo-message"
                    placeholder="Enter your message"
                    rows="6"
                  />
                </div>
                <div class="col-12">
                  <ul class="actions">
                    <li>
                      <input
                        type="submit"
                        value="Send Message"
                        class="primary"
                      />
                    </li>
                    <li>
                      <input type="reset" value="Reset" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </section>

          <section>
            <h2>Image</h2>
            <h3>Fit</h3>
            <div class="box alt">
              <div class="row gtr-uniform">
                <div class="col-12">
                  <span class="image fit">
                    <img src="images/pic04.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic01.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic02.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic03.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic03.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic01.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic02.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic02.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic03.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic01.jpg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <h3>Left &amp; Right</h3>
            <p>
              <span class="image left">
                <img src="images/pic05.jpg" alt="" />
              </span>
              Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
              sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
              ac adipiscing accumsan eu faucibus. Integer ac pellentesque
              praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum
              ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu
              felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer
              ac pellentesque praesent. Donec accumsan interdum nisi, quis
              tincidunt felis sagittis eget. tempus euismod. Vestibulum ante
              ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
              iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
              pellentesque praesent tincidunt felis sagittis eget. tempus
              euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
              Blandit adipiscing eu felis iaculis volutpat ac adipiscing
              accumsan eu faucibus. Integer ac pellentesque praesent. Blandit
              adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
              faucibus. Integer ac pellentesque praesent tincidunt felis
              sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
              ac adipiscing accumsan eu faucibus. Integer ac pellentesque
              praesent.
            </p>
            <p>
              <span class="image right">
                <img src="images/pic06.jpg" alt="" />
              </span>
              Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
              sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
              ac adipiscing accumsan eu faucibus. Integer ac pellentesque
              praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum
              ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu
              felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer
              ac pellentesque praesent. Donec accumsan interdum nisi, quis
              tincidunt felis sagittis eget. tempus euismod. Vestibulum ante
              ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
              iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
              pellentesque praesent tincidunt felis sagittis eget. tempus
              euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
              Blandit adipiscing eu felis iaculis volutpat ac adipiscing
              accumsan eu faucibus. Integer ac pellentesque praesent. Blandit
              adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
              faucibus. Integer ac pellentesque praesent tincidunt felis
              sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
              ac adipiscing accumsan eu faucibus. Integer ac pellentesque
              praesent.
            </p>
          </section>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;