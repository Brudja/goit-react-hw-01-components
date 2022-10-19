import css from '../Stats.module.css'
import PropTypes from 'prop-types';

const StatList = ({label, percentage}) => {
    return (
      <li className={css.item}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
  )
}

export default StatList

StatList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};