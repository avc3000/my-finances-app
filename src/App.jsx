import { GlobalProvider } from './context/GlobalState';
import Balance from './components/Balance';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import IncomeExpense from './components/IncomeExpense';
import ExpenseChart from './components/ExpenseChart';

const App = () => {
  return (
    <GlobalProvider>
      <div className='bg-zinc-900 p-4 text-white flex flex-col justify-center md:flex-row md:items-center'>
        <div>
          <h1 className='text-4xl text-sky-500 font-bold mb-2'>Expense Tracker</h1>
          <IncomeExpense />
          <Balance />
          <TransactionForm />
        </div>
        <div>
          <ExpenseChart />
        </div>
      </div>
      <div className='bg-zinc-900 text-white px-2 flex flex-col justify-center md:flex-row md:items-center'>
        <div className='lg:w-[45%] md:w-[95%]'>
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App;