import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-stone-800 focus:ring-offset-1 disabled:cursor-not-allowed';

  const base_2 =
    'text-sm inline-block rounded-full bg-red-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-red-300 focus:outline-none focus:ring focus:ring-stone-800 focus:ring-offset-1 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-3 md:py-2.5 text-xs md:text-sm',
    secondary:
      'text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:text-stone-800 focus:ring-offset-1 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800',
    delete:
      base_2 + ' px-[35px] py-2 mt-3 md:px-3 md:py-2.5 text-xs md:text-sm ',
    rounded: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-xs md:text-sm mt-3',
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.array,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
