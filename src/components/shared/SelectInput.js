import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  name,
  label,
  options,
  defaultOption,
  value,
  error,
  onChange,
}) => {
  return (
    <div className="form__group">
      <select name={name} value={value} onChange={onChange}>
        <option value="">{defaultOption}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      <label htmlFor={name} className="form__group--label">
        {label}
      </label>
      <i className="form__group--bar"></i>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default SelectInput;
