import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SortSelect({
  name,
  errMsg,
  className,
  required = false,
  selectOption,
  label = "Sort By",
  isDisabled,
  handleCustomChange,
  ...otherProps
}) {
  return (
    <FormControl
      sx={{m: "10px 0"}}
      className={`form-group select-group sort-select`}
    >
      <Select
        className="select-mui filter-select"
        IconComponent={KeyboardArrowDownIcon}
        defaultValue={selectOption[0].value}
        displayEmpty
        {...otherProps}
        sx={{
          "& .MuiSelect-select::before": {
            content: `"${label} :"`,
            paddingRight: "10px",
          },
        }}
      >
        {selectOption.map((option, i) => {
          return (
            <MenuItem
              key={`option-${i}`}
              className="menu-item"
              style={{textTransform: "capitalize"}}
              value={typeof option === "string" ? option : option.value}
            >
              {typeof option === "string" ? option : option.label}
            </MenuItem>
          );
        })}
        {selectOption.length === 0 && (
          <MenuItem value={null} disabled className="center">
            No Options
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
}
