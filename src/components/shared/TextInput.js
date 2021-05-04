import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, value, error, onChange, placeholder }) => {
  let groupClass = 'form__group';
  if (error && error.length > 0) {
    groupClass += '' + 'has-error';
  }

  return (
    <div className={groupClass}>
      <input
        type="text"
        name={name}
        className=""
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name} className="form__group--label">
        {label}
      </label>
      <i class="form__group--bar"></i>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.string,
};

export default TextInput;
