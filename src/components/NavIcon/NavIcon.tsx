import { Link } from "react-router-dom";

const NavItem = {
  home: ({
    height = "24",
    width = "24",
  }: {
    height?: string;
    width?: string;
  }) => {
    return (
      <Link to="/">
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 10V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V10M21 12L12 3L3 12"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    );
  },
  about: ({
    height = "24",
    width = "24",
  }: {
    height?: string;
    width?: string;
  }) => {
    return (
      <Link to="/about">
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99988 18C3.99988 15.7909 5.79074 14 7.99988 14H15.9999C18.209 14 19.9999 15.7909 19.9999 18V18C19.9999 19.1046 19.1044 20 17.9999 20H5.99988C4.89531 20 3.99988 19.1046 3.99988 18V18Z"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="11.9999" cy="7" r="3" stroke="#7C7C7C" strokeWidth="2" />
        </svg>
      </Link>
    );
  },
  discography: ({
    height = "24",
    width = "24",
  }: {
    height?: string;
    width?: string;
  }) => {
    return (
      <Link to="/discography">
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 15V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V15"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3 15H6C6.55228 15 7 15.4477 7 16V19C7 20.1046 6.10457 21 5 21V21C3.89543 21 3 20.1046 3 19V15Z"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M17 16C17 15.4477 17.4477 15 18 15H21V19C21 20.1046 20.1046 21 19 21V21C17.8954 21 17 20.1046 17 19V16Z"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Link>
    );
  },
  work: ({
    height = "24",
    width = "24",
  }: {
    height?: string;
    width?: string;
  }) => {
    return (
      <Link to="/work">
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3L15 6L12 9L9 6L12 3Z"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 15L15 18L12 21L9 18L12 15Z"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M18 9L21 12L18 15L15 12L18 9Z"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 9L9 12L6 15L3 12L6 9Z"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    );
  },
  contact: ({
    height = "24",
    width = "24",
  }: {
    height?: string;
    width?: string;
  }) => {
    return (
      <Link to="/contact">
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99988 12L4.39577 6.56299C4.22284 5.0067 5.82456 3.86433 7.2397 4.53465L19.1841 10.1925C20.7092 10.9149 20.7092 13.0851 19.1841 13.8075L7.23971 19.4653C5.82457 20.1357 4.22284 18.9933 4.39577 17.437L4.99988 12ZM4.99988 12H11.9999"
            stroke="#7C7C7C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    );
  },
};

export default NavItem;
