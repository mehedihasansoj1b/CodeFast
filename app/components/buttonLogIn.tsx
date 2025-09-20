import Link from "next/link";

// Define the props interface
interface ButtonLoginProps {
  isLoggedIn: boolean;
  name: string;
  extraStyle?: string; // Optional prop with ?
}

const ButtonLogin = ({ isLoggedIn, name, extraStyle }: ButtonLoginProps) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome Back {name}
      </Link>
    );
  }
  return (
    <button className={`btn btn-secondary ${extraStyle ? extraStyle : ""}`}>
      Login
    </button>
  );
};

export default ButtonLogin;
