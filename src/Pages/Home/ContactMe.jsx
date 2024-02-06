const ContactMe = () => {
  return (
    <section className="contact--section" id="Contact">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Please fill out this form to get in touch with me, I will respond to you in a timely manner.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              reqiured
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              reqiured
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email Address</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              reqiured
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              reqiured
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a Topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>PHP Motors</option>
            <option>Sleep Outside</option>
            <option>Chamber Site</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows={8}
            placeholder="Type your message here..."
          > </textarea>
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" reqiured name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
        </label>
        <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
