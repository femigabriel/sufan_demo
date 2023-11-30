import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { Controller, get, useFormContext } from "react-hook-form";
import CalendarIcon from "../Vectors/CalendarIcon";

const DatePickerField = ({
	maxDate,
	minDate,
	name,
	value,
	label,
	labelBreakLine,
	labelDesc,
	placeholder,
	bordered = true,
	required = true,
	...props
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const error = get(errors, name);
	const [dateRange, setDateRange] = useState(null);

	return (
		<div className='w-full'>
			{
				label &&
				<p className="mb-4  font-medium text-sm md:text-base text-primary">
					{label} {' '} {labelBreakLine && <br />}
					<span className="text-[#5F5F5F]/50">
						{labelDesc}
					</span>
				</p>
			}
			<div className={`${bordered ? " " : "no-border"} w-full ${props.className}`}>
				<Controller
					defaultValue={null}
					name={name}
					control={control}
					sx={{ width: "100%" }}
					rules={{
						required: "This field is required",
					}}
					render={({ field: { onChange, value } }) => {
						return (
							<DatePicker
								sx={{ width: "100%" }}
								maxDate={maxDate}
								minDate={minDate}
								inputFormat="dd/MM/yyyy"
								value={value}
								keyboard
								disableOpenPicker={false}
								components={{
									OpenPickerIcon: CalendarIcon,
								}}
								onChange={(date) => {
									setDateRange(date);
									if (props.onDateChange) {
										props.onDateChange(date);
									}
									onChange(date);
								}}
								{...props}
								renderInput={(params) => (
									<TextField
										{...params}
										sx={{
											background: "#F9FAFB",
											borderRadius: "16px",
											borderWidth: "1px !important",
											width: "100%",
										}}
										placeholder={placeholder}
										fullWidth
										inputProps={{
											...params.inputProps,
											placeholder: placeholder,
										}}
									/>
								)}
							/>
						);
					}}
				/>
			</div>
			{error && (
				<div className="input-err-msg pt-[-10rem] ">{error.message || ""}</div>
			)}
		</div>
	);
};
export default DatePickerField;

//validate: (value) =>
//value !== undefined || "Please enter date of birth",
