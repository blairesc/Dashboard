import "./chart.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'January', totalIncome: 1050, totalOrders: 102, totalExpenses: 400 },
  { name: 'February', totalIncome: 800, totalOrders: 73, totalExpenses: 326},
  { name: 'March', totalIncome: 620, totalOrders: 67, totalExpenses: 405 },
  { name: 'April', totalIncome: 752, totalOrders: 51, totalExpenses: 257 },
  { name: 'May', totalIncome: 435, totalOrders: 35, totalExpenses: 250 },
  { name: 'June', totalIncome: 209, totalOrders: 20, totalExpenses: 305 },
  { name: 'July', totalIncome: 912, totalOrders: 86, totalExpenses: 381 }
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="titleContainer">
        <div className="title">Number Statistics</div>

        <div className="legendContainer">
          <div className="legend">
            <div className="colorOption color1"></div>
            <p>Income</p>
          </div>

          <div className="legend">
            <div className="colorOption color2"></div>
            <p>Orders</p>
          </div>

          <div className="legend">
            <div className="colorOption color3"></div>
            <p>Expenses</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300} >
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="totalIncome" stackId="a" fill="#4081eb" barSize={30} />
            <Bar dataKey="totalOrders" stackId="a" fill="#face70" barSize={30} />
            <Bar dataKey="totalExpenses" stackId="a" fill="#4cc5a1" barSize={30} />
          </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;