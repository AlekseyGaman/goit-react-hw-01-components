import PropTypes from 'prop-types';
import {
  TransactionHead,
  TransactionItem,
  TransactionValue,
  TransactionTable,
} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable
      as="table"
      width="450px"
      border="1px solid #e1e3e5"
      mb="35px"
    >
      <thead>
        <TransactionHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionHead>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem key={id}>
            <TransactionValue>{type}</TransactionValue>
            <TransactionValue>{amount}</TransactionValue>
            <TransactionValue>{currency}</TransactionValue>
          </TransactionItem>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
