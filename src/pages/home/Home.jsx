import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <NavBar />
          <div className="homeContainer"></div>
        </div>
      </div>
    </div>
  )
}

export default Home;
