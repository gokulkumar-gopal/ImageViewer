import React, {Component} from 'react';
import './Header.css';
import Input from '@material-ui/core/Input';
import Avatar from '@material-ui/core/Avatar';  
import { ThreeSixty } from '@material-ui/icons';


class Header extends Component {

    sendData = (e) => {
        this.props.parentCallBack(e.target.value);
    }

    render() {
        return(
            <div>
                <header className="app-header">
                    <span className="home-title">Image Viewer</span>
                    {this.props.loginSuccess === true &&
                    <span>
                    <Avatar src={this.props.profilepicture} className="avatar" alt="Gokul" />
                    <Input id="searchbox" placeholder="Search" disableUnderline={true} className="search-box" type="text" onChange={this.sendData.bind(this)}/>
                    </span>
                    }
                </header>
            </div>
        )
    }
}

export default Header;