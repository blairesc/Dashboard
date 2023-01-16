import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";
import FeaturedChart from "../../components/featured/FeaturedChart";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />

        <div className="featuredContainer">
          <div className="widgets">
            <div className="left">
              <Widget type="user" />
              <Widget type="order" />
            </div>
            <div className="right">
              <Widget type="earning" />
              <Widget type="balance" />
            </div>
          </div>
          
          <div className="featured">
            <FeaturedChart />
          </div>
        </div>

        <div className="chart">
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Home;
