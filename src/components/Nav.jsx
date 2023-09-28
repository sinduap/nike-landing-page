import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => (
  <header className="padding-x absolute z-10 w-full py-8">
    <nav className="max-container flex items-center justify-between">
      <a href="/">
        <img className="h-[29px] w-[130px]" src={headerLogo} alt="Nike Logo" />
      </a>
      <ul className="flex flex-1 justify-center gap-16 max-lg:hidden">
        {navLinks.map(({ href, label }) => (
          <li
            className="font-montserrat text-lg leading-normal text-slate-gray"
            key={label}
          >
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center gap-2 font-montserrat font-medium leading-normal max-lg:hidden wide:mr-24">
        <li>
          <a href="/">Sign in</a>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <a href="/">Explore now</a>
        </li>
      </ul>
      <a href="/" className="hidden max-lg:block">
        <img className="h-[25px] w-[25px]" src={hamburger} alt="Menu Icon" />
      </a>
    </nav>
  </header>
);

export default Nav;
