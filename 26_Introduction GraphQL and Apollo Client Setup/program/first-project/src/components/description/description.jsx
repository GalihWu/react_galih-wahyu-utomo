import { article } from '../article/article';
import iconBootstrap from '../../assets/img/Bootstrap.png';
import { Link } from 'react-router-dom';

const Description = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-2" />
        <div className="col-md-8">
          <img
            className="img-fluid mx-auto d-block"
            style={{ display: 'inline-block', marginTop: 20, width: 80 }}
            src={iconBootstrap}
            alt="img-bootstrap"
          />
          <div className="mt-3">
            <div className="text-center">
              <h2>{article.title.en}</h2>
              <p>{article.description.en}</p>
            </div>
            <div className="text-center">
              <Link to={'/'} className="btn btn-primary">
                Landing Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
