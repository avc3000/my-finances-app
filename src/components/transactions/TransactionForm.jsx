import { useState } from 'react';
import { GlobalState } from '../../context/GlobalState';

const TransactionForm = () => {
  const { addTransaction } = GlobalState();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmount(0);
    setDescription('');
  };

  return (
    <div>
      <h1 className='font-bold mb-4 text-2xl text-yellow-700'>Entry Item:</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full' />
        <input type="number" value={amount} step="0.01" placeholder='00.00' onChange={(e) => setAmount(e.target.value)} className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full' />
        <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block font-bold mt-4 w-full'>Save</button>
      </form>
    </div>
  )
}

export default TransactionForm;