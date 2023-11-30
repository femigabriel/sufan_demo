/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import './styles.scss';


const TextAreaField = forwardRef(
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

        return (
            <div className="w-full">
                {
                    label &&
                    <p className="mb-4 font-medium text-sm md:text-base text-primary">
                        {label} {' '} {labelBreakLine && <br />}
                        <span className="text-[#5F5F5F]/50">
                            {labelDesc}
                        </span>
                    </p>
                }
                <div className={`input focus-within:!border-primary ${className}`}>
                    <textarea
                        {...props}
                        ref={ref}
                        placeholder={placeholder}
                        className={`input__box focus:outline-none placeholder:!text-[#c8c8c8] ${props.height ? props.height : "min-h-[120px]"}`}

                    />

                </div>
            </div>
        );
    });

export default TextAreaField;

