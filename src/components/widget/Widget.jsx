import "./widget.scss";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Widget = ({ type }) => {
  let data;

  //temporary data
  const amount = 100;
  const percentage = 20;

  switch(type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        icon: (
          <PeopleIcon 
            className="icon"
            style={{
              backgroundColor: "rgb(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        )
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        icon: (
          <ShoppingBasketIcon
            className="icon"
            style={{
              backgroundColor: "rgb(218, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        )
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        icon: (
          <PaidIcon 
            className="icon"
            style={{
              backgroundColor: "rgb(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        )
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        icon: (
          <AccountBalanceWalletIcon 
            className="icon"
            style={{
              backgroundColor: "rgb(255, 0, 0, 0.2)",
              color: "crimson",
            }}
          />
        )
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{ data.title }</span>
        <span className="counter">{ data.isMoney && "$"} { amount }</span>
      </div>
      
      <div className="right">
        { data.icon }
        <div className="percentage positive">
          +{ percentage }%
        </div>
      </div>
    </div>
  )
}

export default Widget;