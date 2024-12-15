import PropTypes from 'prop-types';

export const SectionTitle = ({ title }) => (
  <h2 className="section-title">
    {title}
  </h2>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};