import "./featuredChart.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import EastIcon from '@mui/icons-material/East';

const FeaturedChart = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <p className="description">Total sales made today</p>
      </div>

      <div className="middle">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>

        <div className="featuredInfo">
          <p className="amount">$420.00</p>
          <p className="description">Previous transactions processing.</p>
        </div>
      </div>

      <div className="bottom">
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="resultAmount positive">+$12.4k</div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="resultAmount negative">-$12.4k</div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month </div>
            <div className="resultAmount positive">+$12.4k</div>
          </div>
        </div>

        <div className="bottomLink">
          <p className="link">Manage</p>
          <EastIcon fontSize="small" className="icon"/>
        </div>
      </div>
    </div>
  )
}

export default FeaturedChart;