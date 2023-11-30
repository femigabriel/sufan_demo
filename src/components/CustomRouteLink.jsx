import { Link, useMatch } from 'react-router-dom';



export default function CustomLink({
  children,
  to,
  baseUrl = '/',
} // border,
  //   ...props
) {
  let match = useMatch(
    to !== baseUrl ? baseUrl + to + '/*' : baseUrl
  );
  return to ? (
    <Link
      className={`menu-link px-3 py-2 flex gap-4 rounded-md w-it text-sm md:text-base itemscenter text-white  ${match
        ? 'bg-[#344054]  font-semibold'
        : 'text-white hover:bg-[#344054] font-medium'
        }`}
      to={baseUrl === to ? to : baseUrl + to}
    // {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`menu-link my-7 w-full text-base text-grey_20 hover:bg-[#344054]`}
    // {...props}
    >
      {children}
    </button>
  );
}
