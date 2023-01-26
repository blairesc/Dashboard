import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";
import FeaturedChart from "../../components/featured/FeaturedChart";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/tablelist/TableList";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <NavBar />
        <div className="featuredContainer">
          <div className="leftWidgets">
            <Widget type="user" />
            <Widget type="order" />
          </div>
          <div className="rightWidgets">
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <FeaturedChart />
        </div>
        <div className="chartContainer">
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Recent Transactions</div>
          <TableList />
        </div>
      </div>
      
    </div>
  )
}

export default Home;
