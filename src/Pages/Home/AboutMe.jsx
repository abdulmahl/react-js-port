const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img lazy-loading src="./img/image-hero.png" alt="About-Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
            Hello there my name is Abdul! I'm a second-year student at Brigham Young University,
            pursuing a major in Applied Technology. Currently unemployed but
            filled with ambition, I aspire to become a proficient full-stack
            developer.
          </p>
          <p className="hero--section-description">
            My journey at BYU has equipped me with the skills and knowledge
            necessary to tackle real-world challenges in the tech industry. I am
            passionate about coding and problem-solving, and I'm eager to
            contribute my skills to innovative projects. With a strong
            foundation in applied technology and a drive to continuously learn
            and grow, I'm ready to embark on an exciting career path in software
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
