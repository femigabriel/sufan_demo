
import { useFormContext, get } from "react-hook-form";

import './styles.scss';
import InputField from './InputField';


const ValidatedInput = ({
  name,
  required = true,
  rules,
  errMsg,
  showErrMsg = true,
  ...otherProps
}

) => {
  const {
    register,
    formState: { errors },
  } = useFormContext({
    mode: "all",
  });
  const error = get(errors, name);

  return (
    <div className=''>
      <InputField
        isInvalid={error}
        {...otherProps}
        {...register(name, {
          required: required ? "This field is required" : false,
          // ...(otherProps.type === "password"
          //   ? {
          //     minLength: {
          //       value: 8,
          //       message: "Password must have at least 8 characters",
          //     },
          //     pattern: {
          //       value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
          //       message:
          //         "Password must have at least 1 uppercase, lowercase, number and a symbol",
          //     },
          //   }
          //   : {}),
          ...rules,
        })}

      />
      {showErrMsg && error && <div className="input-err-msg">{error.message || errMsg}</div>}

    </div>
  );
};

export default ValidatedInput;


