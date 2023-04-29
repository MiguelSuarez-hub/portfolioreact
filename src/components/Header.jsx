import './css/header.css';

function Header() {
  return (
    <header>
      <section className="selectorContainer">
        <button className="selectorContainer__Switch--theme">
          <i className='bx bx-sun bx-sm'></i><i className='bx bx-moon bx-sm'></i>
        </button>
      </section>
    </header>
  );
}

export default Header