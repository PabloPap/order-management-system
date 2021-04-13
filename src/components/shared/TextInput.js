import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, value, error, onChange, placeholder }) => {
  let groupClass = 'form__group';
  if (error && error.length > 0) {
    groupClass += '' + 'has-error';
  }

  return (
    <div className={groupClass}>
      <label htmlFor={name}>{label}</label>
      <div className="">
        <input
          type="text"
          name={name}
          className=""
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
