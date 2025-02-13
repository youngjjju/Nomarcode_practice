import propTypes from "prop-types";
import { Link } from "react-router";

function Movies({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img alt={id} src={medium_cover_image} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres &&
          genres.length > 0 &&
          genres.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
      <hr />
    </div>
  );
}

Movies.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movies;
