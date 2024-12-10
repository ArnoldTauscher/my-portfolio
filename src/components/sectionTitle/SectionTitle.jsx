import PropTypes from 'prop-types';

export const SectionTitle = ({ title }) => (
  <h2 className="lg:text-3xl md:text-2xl text-xl font-montserrat font-semibold text-center mb-14">
    {title}
  </h2>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};