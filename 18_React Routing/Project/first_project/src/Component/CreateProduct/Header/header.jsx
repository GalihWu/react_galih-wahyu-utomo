// import '../bootstrap/bootstrap.min.css';
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Simple Header
          </a>
          <div>
            <ul className="nav nav-pills d-flex flex-row-reverse">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
