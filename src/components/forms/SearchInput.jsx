/* eslint-disable react/prop-types */
import InputField from "./InputField";

function SearchInput(props) {
  return (
    <InputField
      {...props}
      required={false}
      // prefixIcon={<SearchIcon sx={{color: "#cdcdcd"}} />}
      prefixIcon={
        <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.7196 17.0609L16.4005 13.9899M16.4005 13.9899C16.9258 13.0801 17.2668 12.0757 17.4039 11.0341C17.5411 9.99245 17.4717 8.93402 17.1998 7.91922C16.9279 6.90442 16.4587 5.95311 15.8192 5.11961C15.1796 4.28611 14.3821 3.58674 13.4723 3.06144C12.5624 2.53614 11.558 2.19519 10.5164 2.05806C9.47478 1.92093 8.41636 1.9903 7.40156 2.26222C6.38675 2.53413 5.43544 3.00327 4.60194 3.64283C3.76845 4.2824 3.06908 5.07987 2.54378 5.98972C1.48289 7.82724 1.1954 10.0109 1.74456 12.0604C2.29371 14.1099 3.63454 15.8573 5.47206 16.9182C7.30958 17.9791 9.49328 18.2666 11.5428 17.7174C13.5923 17.1683 15.3396 15.8274 16.4005 13.9899Z" stroke="#CDCDCD" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      }
      className={`!max-w-[363px]  !rounded-lg !h-12 w-full ${props.className}`}
      placeholder={props.placeholder || "Search"}
    />
  );
}

export default SearchInput;
