import Link from "next/link";


const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Garden App</a>
      </Link>
    </nav>
  )
};

export default Header;
