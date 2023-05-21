export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="item-center m-auto mt-20 flex h-20 max-w-content-max justify-center px-4 lg:px-8">
      <nav>
        <ul className="flex h-full items-center justify-end font-bold">
          {/* <li className="mr-8">
            <a href="#home">Home</a>
          </li>
          <li className="mr-8">
            <a href="#about">Sobre</a>
          </li>
          <li className="mr-8">
            <a href="#skills">Skills</a>
          </li>
          <li className="mr-8">|</li> */}
          <li className="mr-8">© {currentYear} - Daniel Castro</li>
        </ul>
      </nav>
    </footer>
  );
}
