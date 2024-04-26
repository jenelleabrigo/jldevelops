import React from "react";
import resume from "../../src/assets/pdf/jenelle-abrigo-resume_2024.pdf";

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
                  <dt className="p-about__inner__section__item__content__list u-text is-small">
                    Member of Volleyball Team (School of Engineering and Architecture & Electronics and Communications Department)
                  </dt>
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
                  <dt className="p-about__inner__section__item__content__list u-text is-small">
                    Converting Adobe XD or Illustrator mockups/designs into a fully-functional and responsive website ensuring cross-browser compatibility and adhering to SEO principles.
                  </dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Creation of static and animated landing pages</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">
                    Performing maintenance tasks and implementing revisions on existing websites in alignment with client specifications and preferences.
                  </dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Skills and tech stack in use</dt>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">HTML5</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">CSS3</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">SASS/SCSS</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">Javascript</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">PHP</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">Wordpress</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">Jquery</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">CMS</dd>
                  <dd className="p-about__inner__section__item__content__list__detail u-text is-small">Animations</dd>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Conducting manual testing and debugging to assess layout, code, and adherence to specifications.</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">
                    <strong>Recognized Achievement:</strong> Initiated the conceptualization and development of an in-house project tailored to company needs: Designed and executed a Leave Manager
                    App.
                  </dt>
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
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Data Analysis and Yield Monitoring</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Root Cause investigation and Corrective Actions production (RCCA)</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">Process machines operation</dt>
                  <dt className="p-about__inner__section__item__content__list u-text is-small">
                    <strong>Recognized Achievement:</strong> Improved UPH for Marking Process of 18% increase with solutions from data driven analysis
                  </dt>
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
                  <li className="p-about__inner__section__item__content__list u-text is-small">Proficient in computer skills</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Practical experience with laboratory equipment</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">
                    Web development: landing page, website and web applications
                    <div className="p-about__inner__section__item__content__list__grid">
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">HTML5</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">CSS3/SCSS/SASS</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Tailwind</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Javascript</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Wordpress</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">jQuery</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Git</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">React JS</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Vue JS</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">CMS</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">SEO</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Animations</p>
                      <p className="p-about__inner__section__item__content__list__detail no-margin u-text is-small">Adobe Suits</p>
                    </div>
                  </li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">English fluent in verbal and written</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Strong enthusiasm for acquiring new technology stacks</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Diligent and reliable</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Initiative-driven</li>
                  <li className="p-about__inner__section__item__content__list u-text is-small">Attentive to detail</li>
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
