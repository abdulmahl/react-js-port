const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Abdul...</p>
          <h1 className="hero--section--title">
            Full Stack
            <span className="hero--section--title--color"></span> <br />
            Web Developer
          </h1>
          <p className="hero--section-description">
            My ambition is to become a skilled full-stack developer. I'm
            captivated by the intricate dance of front-end and back-end
            development, and I'm driven to master the art of crafting seamless
            digital experiences. With each line of code, I'm honing my skills
            and expanding my knowledge, eager to contribute to cutting-edge
            projects and make a meaningful impact in the ever-evolving world of
            technology.
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          <a
            className="linked-in"
            href="https://www.linkedin.com/in/abdul-mahlangu/"
            target="_blank"
          >
            Get in Touch
          </a>
        </button>
      </div>
      <div className="hero--section--image">
        <img src="./img/image.jpg" alt="Hero-Image" />
      </div>
    </section>
  );
};

export default HeroSection;
