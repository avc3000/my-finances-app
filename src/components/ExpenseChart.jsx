import { VictoryPie, VictoryLabel } from 'victory';
import { GlobalState } from '../context/GlobalState';

const ExpenseChart = () => {
  const { transactions } = GlobalState();
  const amounts = transactions.map(transaction => transaction.amount);
  const totalIncomes = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalExpenses = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2) * -1;
  const totalExpensivePercentage = Math.round((totalExpenses / totalIncomes) * 100);
  const totalIncomesPercentage = 100 - totalExpensivePercentage;

  return (
    <VictoryPie animate={{duration: 200}} labels={({datum}) => `${datum.y}%`} data={[{x: "Expenses", y: isNaN(totalExpensivePercentage) ? 0 : totalExpensivePercentage}, {x: "Income", y: isNaN(totalIncomesPercentage) ? 0 : totalIncomesPercentage}]} labelComponent={<VictoryLabel angle={45} style={{fill: "white"}} />} colorScale={["red","green"]} />
  )
}

export default ExpenseChart;