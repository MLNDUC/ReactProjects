import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

export const Header = ({ title, width }) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
      <div className="window-icon">
        {width < 768 ? <FaMobileAlt />
          : width < 992 ? <FaTabletAlt />
            : <FaLaptop />}
      </div>
    </div>
  )
}
