import { GlobalState } from '../../context/GlobalState';

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = GlobalState();

  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>
      <p className='text-sm'>{transaction.description}</p>
      <div>
        <span>$ {transaction.amount}</span>
        <button className='ml-4 bg-black font-bold rounded-lg px-2 py-1 text-white' onClick={() => deleteTransaction(transaction.id)}>X</button>
      </div>
    </li>
  )
}

export default TransactionItem;