import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <SearchIcon className="searchIcon"/>
                <input type="text" placeholder="Search" />
            </div>

            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className="icon"/>
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <CloseFullscreenOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsOutlinedIcon className="icon"/>
                    <div className="counter">4</div>
                </div>
                <div className="item">
                    <ChatOutlinedIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <img
                    src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt=""
                    className="profilePhoto"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
