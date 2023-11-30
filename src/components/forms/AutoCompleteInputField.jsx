import * as React from "react";
import { useFormContext, get, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    Autocomplete,
    Checkbox,
    CircularProgress,
    createFilterOptions,
    MenuItem,
    TextField,
} from "@mui/material";
import "./styles.scss";
import CheckIcon from "@mui/icons-material/Check";

const filter = createFilterOptions();

export default function AutoCompleteField({
    name,
    errMsg,
    required = true,
    selectOption = [],
    label,
    labelBreakLine,
    labelDesc,
    handleCustomChange,
    className = "",
    spaceY = true,
    variant = "free",
    bg = "none",
    hideClearBtn,
    bordered = true,
    loading,
    defaultValue,
    ...props
}) {
    const {
        control,
        formState: { errors },
    } = useFormContext({
        mode: "all",
    });

    const error = get(errors, name);

    return (
        <div className={`w-full`}>
            {
                label &&
                <p className="mb-4  font-medium text-sm md:text-base text-primary">
                    {label} {' '} {labelBreakLine && <br />}
                    <span className="text-[#5F5F5F]/50">
                        {labelDesc}
                    </span>
                </p>
            }

            <FormControl
                sx={{ width: "100%" }}
                className={`${className}`}
            >
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { onChange, value } }) => (
                        <Autocomplete
                            {...props}
                            disablePortal
                            isOptionEqualToValue={(option, value) =>
                                typeof option === "string"
                                    ? option === value
                                    : option.label === (value?.label ?? value)
                            }
                            // style={{ height: props.multiple ? "auto" : "40px" }}
                            className={`select-mui ${props.multiple && "autocomplete"} ${bordered ? "" : "no-border"
                                }  ${error ? "invalid" : ""}`}
                            options={selectOption ? selectOption : []}
                            filterOptions={(options, params) => {
                                // Suggest the creation of a new value if the autocomplete is a free solo type
                                if (props.freeSolo) {
                                    const filtered = filter(options, params);
                                    const { inputValue } = params;
                                    const isExisting = options.some(
                                        option => inputValue === (option.value || option),
                                    );
                                    if (inputValue !== "" && !isExisting) {
                                        filtered.push(inputValue);
                                    }
                                    return filtered;
                                } else return filter(options, params);
                            }}
                            handleHomeEndKeys
                            onChange={(e, value) => {
                                onChange(value?.value ?? value);
                                if (handleCustomChange) {
                                    handleCustomChange(value);
                                }
                            }}
                            value={
                                loading
                                    ? ""
                                    : selectOption?.find(el => (el.value ?? el) === value)
                                        ?.label ?? value
                            }
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    sx={{
                                        background: bg || "#fff",
                                        borderRadius: "10px !important"
                                    }}
                                    placeholder={props.placeholder}
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <React.Fragment>
                                                {loading ? (
                                                    <CircularProgress color="inherit" size={20} />
                                                ) : null}
                                                {params.InputProps.endAdornment}
                                            </React.Fragment>
                                        ),
                                    }}
                                />
                            )}
                            renderOption={(renderProps, option, { selected }) => (
                                <MenuItem
                                    {...renderProps}
                                    className="menu-item w-full"
                                    sx={{
                                        justifyContent: "space-between",
                                        background: selected ? "#f18b0e21" : "transparent",
                                    }}
                                >
                                    {typeof option === "string" ? option : option?.label}
                                    {props.multiple && (
                                        <Checkbox
                                            icon={<></>}
                                            checkedIcon={
                                                <CheckIcon
                                                    color="primary"
                                                    fontSize="small"
                                                    sx={{ p: 0 }}
                                                />
                                            }
                                            sx={{ border: "none", p: 0 }}
                                            checked={selected}
                                        />
                                    )}
                                </MenuItem>
                            )}
                        />
                    )}
                />

                {error && (
                    <div className="input-err-msg pt-[10px] ">{error.message}</div>
                )}
            </FormControl>
        </div>
    );
}
