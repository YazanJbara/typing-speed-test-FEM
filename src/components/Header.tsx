import Logo from '../assets/images/logo-small.svg';

function Header() {
  return (
    <header className='flex items-center justify-between'>
      <img src={Logo} alt='' />
      <p className="flex before:mr-2 before:h-6 before:w-6 before:bg-[url('src/assets/images/icon-personal-best.svg')] before:bg-contain before:bg-no-repeat">
        Best : <span>state expected</span>
      </p>
    </header>
  );
}

export default Header;
