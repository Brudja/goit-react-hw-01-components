import data from "../../data/data.json"
import StatList from "./statslist/statslist"
import css from "./stats.module.css"
import PropTypes from 'prop-types';

export const Stats = ({title}) => {
    return (
      <div className={css.statswrap}>
        {title && <h2 className={css.titles}>{title}</h2>}
        <ul className={css.postlist}>
          {data.map(item=>(<StatList key = {item.id} label={item.label} percentage={item.percentage}/> ))}
        </ul>
      </div>
    );
  };

  export default Stats;

  Stats.propTypes = {
    title: PropTypes.string.isRequired,
  };