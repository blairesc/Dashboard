import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div>
        <div className="home">
            <Sidebar />
            <div className="homeContainer"></div>
        </div>
    </div>
  )
}

export default Home;
