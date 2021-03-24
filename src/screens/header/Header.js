import React, {Component} from 'react';
import './Header.css';
import Input from '@material-ui/core/Input';
import Avatar from '@material-ui/core/Avatar';  


class Header extends Component {

    render() {
        return(
            <div>
                <header className="app-header">
                    <span className="home-title">Image Viewer</span>
                    {this.props.loginSuccess === true &&
                    <span>
                    <Avatar src={this.props.profilepicture} className="avatar" alt="Gokul" />
                    <Input id="searchbox" placeholder="Search" disableUnderline={true} className="search-box" type="text" />
                    </span>
                    }
                </header>
            </div>
        )
    }
}

export default Header;