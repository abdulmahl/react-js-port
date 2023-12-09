const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Abdul...</p>
          <h1 className="hero--section--title">
            Full Stack
            <span className="hero--section--title--color"></span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Deserunt, nesciunt? Minus dignissimos eligendi doloremque.
          </p>
        </div>
        <button type="submit" className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero--section--image">
        <img src="./img/hero_img.jpeg" alt="Hero-Image" />
      </div>
    </section>
  );
};

export default HeroSection;
