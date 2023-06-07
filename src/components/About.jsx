import React from "react";
import resume from "../../src/assets/pdf/jenelle-abrigo-resume_2023.pdf";

const About = () => {
  return (
    <>
      <section className="p-about">
        <div className="u-layout">
          <div className="p-about__inner">
            <a download="Jenelle Loise Abrigo Resume" href={resume} className="p-about__inner__resume c-button is-pink">
              Download Formal Resume
            </a>

            <div className="p-about__inner__section">
              <h2 className="p-about__inner__section__heading">Education</h2>
              <div className="p-about__inner__section__item">
                <h3 className="p-about__inner__section__item__title u-text is-big">TERTIARY (2014-2019)</h3>
                <p className="p-about__inner__section__item__txt u-text is-small">Bachelor of Science in Electronics Engineering</p>
                <p className="p-about__inner__section__item__txt u-text is-small">Saint Louis University</p>
                <p className="p-about__inner__section__item__txt u-text is-small">Baguio City</p>
                <dl className="p-about__inner__section__item__content">
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Deans Lister, 4 semesters</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Officer, Institute of Electronics Engineers of the Philippines - National Student Chapter</dt>
                </dl>
              </div>
              <div className="p-about__inner__section__item">
                <h3 className="p-about__inner__section__item__title u-text is-big">SECONDARY (2009-2014)</h3>
                <p className="p-about__inner__section__item__txt u-text is-small">Cordillera Career Development College</p>
                <p className="p-about__inner__section__item__txt u-text is-small">La Trinidad, Benguet</p>
                <dl className="p-about__inner__section__item__content">
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Officer, Student Supreme Government</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Active in extracurricular activities like department dance troupe and volleyball team.</dt>
                </dl>
              </div>
            </div>

            <div className="p-about__inner__section">
              <h2 className="p-about__inner__section__heading">Experience</h2>
              <div className="p-about__inner__section__item">
                <h3 className="p-about__inner__section__item__title u-text is-big">
                  Web Developer <br className="u-sp-only" />
                  (October 2021-Present)
                </h3>
                <p className="p-about__inner__section__item__txt u-text is-small">LH & Creatives – Antel Corporate Centre Valero St, Salcedo Village, Makati City</p>
                <p className="p-about__inner__section__item__txt u-text is-small">Web Developer mainly focusing on front-end works</p>
                <dl className="p-about__inner__section__item__content">
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Converting Adobe XD or Illustrator mockups into a functional and 
responsive website</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Creation of static and animated landing pages</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small"> Maintenance and revisions of existing websites according to clients’ requirements</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small"> Tech stack in use</dt>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">HTML</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">CSS</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">SASS/SCSS</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">PHP</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">Wordpress</dd>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Layout, code, and specifications checking of teammates work</dt>
                </dl>
              </div>
              <div className="p-about__inner__section__item">
                <h3 className="p-about__inner__section__item__title u-text is-big">
                  Process Engineer <br className="u-sp-only" />
                  (March 2020-October 2021)
                </h3>
                <p className="p-about__inner__section__item__txt u-text is-small">SFA Semicon – Panday Pira, Creekside Ave, Clark, Pampanga</p>
                <p className="p-about__inner__section__item__txt u-text is-small">Backend Assembly specializing in Mold and Marking Processes</p>
                <dl className="p-about__inner__section__item__content">
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Product Evaluations (DOE, PPQ)</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Process Evaluations</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Product Verifications</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Process Improvements</dt>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">
                    Recognized Project: Able to improve UPH for Marking Process of 18% increase with providing solutions from data driven analysis.
                  </dd>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Data Analysis and Yield Monitoring</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Root Cause investigation and Corrective Actions production (RCCA)</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Process machines operation</dt>
                </dl>
              </div>
              <div className="p-about__inner__section__item">
                <h3 className="p-about__inner__section__item__title u-text is-big">
                  On-the-job Training <br className="u-sp-only" />
                  (June 2018-July 2018)
                </h3>
                <p className="p-about__inner__section__item__txt u-text is-small">Smart Communications Inc. – Baguio City</p>
                <p className="p-about__inner__section__item__txt u-text is-small">Field Officer under Technology Operation</p>
              </div>
            </div>

            <div className="p-about__inner__section">
              <h2 className="p-about__inner__section__heading">Skills and Traits</h2>
              <div className="p-about__inner__section__item">
                <ul className="p-about__inner__section__item__content">
                  <li className="p-about__inner__section__item__content__list u-text is-small">Computer Literate</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Hands-on experience with lab equipment</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">
                    Knowledge in using:
                    <div className="p-about__inner__section__item__content__list__grid">
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">HTML</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">CSS/SCSS</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Tailwind</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Javascript</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Wordpress</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">jQuery</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">React</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Vue</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Solidity</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Ethereum/Web3.js</p>
                      {/* <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Bootstrap</p> */}
                      {/* <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">MySQL</p> */}
                      {/* <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">AutoCAD</p> */}
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Adobe Photoshop</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Adobe Illustrator</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Adobe XD</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Microsoft Office</p>
                      {/* <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Minitab</p> */}
                    </div>
                  </li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">English fluent in verbal and written</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Willing to learn</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Responsible and hardworking</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Self-starter</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Attention to detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
