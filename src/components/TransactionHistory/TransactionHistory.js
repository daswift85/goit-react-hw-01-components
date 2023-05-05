import PropTypes from 'prop-types';
import { Table, TableHeader, TableHeaderRow, TableCell, TableBody, TableBodyRow, TableDataCell} from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => (
  <section>
  <Table>
    <TableHeader>
      <TableHeaderRow>
        <TableCell>Type</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell>Currency</TableCell>
      </TableHeaderRow>
    </TableHeader>

    <TableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TableBodyRow key={id}>
          <TableDataCell>{type}</TableDataCell>
          <TableDataCell>{amount}</TableDataCell>
          <TableDataCell>{currency}</TableDataCell>
        </TableBodyRow>
      ))}
    </TableBody>
  </Table>
  </section>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
