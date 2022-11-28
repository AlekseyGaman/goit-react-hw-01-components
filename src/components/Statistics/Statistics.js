import PropTypes from 'prop-types';

import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      <StatTitle>{title}</StatTitle>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} label={label}>
            <StatLabel>{label}</StatLabel>
            <StatPercent>{percentage}%</StatPercent>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

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
