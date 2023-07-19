import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
