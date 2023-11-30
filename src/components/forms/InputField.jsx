/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import  { forwardRef, useState } from 'react';
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import './styles.scss';


const InputField = forwardRef(
  (
    {
      type = 'text',
      placeholder = '',
      required = true,
      defaultValue,
      label,
      labelBreakLine,
      labelDesc,
      className,
      prefixIcon,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] =
      useState(false);

    return (
      <div className="wfull">
        {
          label &&
          <p className={`mb-3 md:mb-5  font-medium text-sm md:text-base ${props.labelColor ||'text-white'}`}>
            {label} {' '} {labelBreakLine && <br/>}
            <span className="text-[#5F5F5F]/50">
              {labelDesc}
            </span>
          </p>
        }
        <div className={`input focus-within:!border-primary ${className}`}>
          {prefixIcon && <span className="select-none -ml-1 mr-2 icon-btn">{prefixIcon}</span>}
          <input
            {...props}
            ref={ref}
            type={showPassword ? 'text' : type}
            defaultValue={defaultValue}
            required={required}
            placeholder={placeholder}
            className={`input__box focus:outline-none placehoder:!text-[#c8c8c8]`}

          />
          {type === 'password' && (
            <button
              type="button"
              className="icon-btn -mr-1 select-none"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <VisibilityOffOutlinedIcon sx={{ color: "#8585A3" }} />
              ) : (
                <RemoveRedEyeOutlinedIcon sx={{ color: "#8585A3" }} />
              )}
            </button>
          )}
        </div>
      </div>
    );
  });

export default InputField;

