import PropTypes from 'prop-types';
import { StyledH2, StyledUl, StyledLi } from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <section>
    {title.length > 0 && <StyledH2>{title}</StyledH2>}
    <StyledUl>
      {stats.map(({ id, label, percentage }) => (
        <StyledLi key={id}>
          <span>{label}</span>
          <span>{percentage}%</span>
        </StyledLi>
      ))}
    </StyledUl>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
