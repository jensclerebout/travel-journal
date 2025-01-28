import PropTypes from 'prop-types';

export default function Entry({ entry }) {
  return (
    <article className="journal-entry">
      <img
        className="journal-entry__img"
        src={entry.img.src}
        alt={entry.img.alt}
      />
      <div className="journal-entry__info">
        <img
          src="../src/assets/marker.png"
          alt="Map marker icon"
          className="journal-entry__icon"
        />
        <span className="journal-entry__place">{entry.country}</span>
        <a className="journal-entry__link" href={entry.googleMapsLink}>
          View on Google Maps
        </a>
        <h2 className="journal-entry__subtitle">{entry.title}</h2>
        <p className="journal-entry__dates">{entry.dates}</p>
        <p className="journal-entry__info-text">{entry.text}</p>
      </div>
    </article>
  );
}

Entry.propTypes = {
  entry: PropTypes.shape({
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    country: PropTypes.string.isRequired,
    googleMapsLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
