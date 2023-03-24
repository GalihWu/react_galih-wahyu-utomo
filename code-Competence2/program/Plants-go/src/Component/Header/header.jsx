import './header.css';

const Header = () => {
  return (
    <>
      <section className="container">
        <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light pt-2 ps-4 pe-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <span className="logoPlant">Plants go</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active text-success"
                    aria-current="page"
                    href="#"
                  >
                    Discount
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Buy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="content content-main-bg">
        <h1 className="text-welcome">Welcome to Plants Go</h1>
        <p className="description">
          Semua tumbuhan yang kami jual dipilih secara selektif dan ditanam
          dengan perawatan yang baik sehingga tumbuhan yang Anda beli dari kami
          pasti sehat dan tumbuh dengan baik.
        </p>
      </section>
    </>
  );
};

export default Header;
