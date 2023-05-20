import { GlobalState } from '../../context/GlobalState';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const { transactions } = GlobalState();
  return (
    <>
      <h3 className='font-bold mb-2 text-purple-500 text-2xl'>History</h3>
      <ul>
        {
          transactions.map(transaction => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))
        }
      </ul>
    </>
  )
}

export default TransactionList;