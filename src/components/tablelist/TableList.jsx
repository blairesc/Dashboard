import "./tablelist.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableList = () => {
  const rows = [
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Deivery",
        status: "Pending",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Deivery",
        status: "Approved",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Deivery",
        status: "Pending",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Deivery",
        status: "Denied",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Deivery",
        status: "Approved",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Deivery",
        status: "Approved",

    }
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt={row.product} className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableList;
