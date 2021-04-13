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
      <label htmlFor={name}>{label}</label>
      <div className="">
        <select name={name} className="" value={value} onChange={onChange}>
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="">{error}</div>}
      </div>
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
