import { useState } from 'react';

const Contact = () => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = input;
    alert(
      `Nama anda adalah ${firstName} ${lastName} \nEmail anda adalah ${email} \nPesan : ${message}`
    );
  };

  return (
    <section className="bg-color">
      <div className="text-center pt-5 pt-3">
        <h2>Contact Us</h2>
        <p>
          Sed ut perspiciants unde omnis iste natus error sit volutatem
          accusantium doloremque
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="contact col-lg-3 col-sm-6 ps-5">
          <div>
            <i className="bi bi-geo-alt" style={{ fontSize: '2rem' }} />
            <p>
              Karanganyar
              <br />
              Jawa Tengah
            </p>
          </div>
          <div>
            <i className="bi bi-telephone" style={{ fontSize: '2rem' }} />
            <p>+64 878 3264 2738</p>
          </div>
          <div className="icon">
            <a href="https://instagram.com/galhhh3?igshid=YmMyMTA2M2Y=">
              <i className="bi bi-instagram" style={{ fontSize: 25 }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100050860749271">
              <i className="bi bi-facebook" style={{ fontSize: 25 }} />
            </a>
            <a href="https://www.linkedin.com/in/galih-wu-357784248/">
              <i className="bi bi-linkedin" style={{ fontSize: 25 }} />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-5 pe-5">
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="form-groub mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={input.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groub mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groub mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="Your Email"
                name="email"
                value={input.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groub mt-3">
              <textarea
                className="form-control"
                placeholder="Message"
                name="message"
                value={input.message}
                onChange={handleChange}
                rows={5}
              />
            </div>
            <div className="d-flex justify-content-end mt-1 pb-5">
              <input type="submit" className="btn btn-success mt-4" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
