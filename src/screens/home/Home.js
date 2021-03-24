import React, { Component } from 'react';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header/Header';
import { Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

const insta_user_name = "gk_62";
const insta_user_password = "Hithere";
const profile_picture = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIPDw8PDxERDw8PDw8PDw8PEREPDw8PGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU3GiRIQDszQi80NT8BDAwMEA8PGBERGjEhGCE0NDE1MTE0NDQxMTExNDExMTExMTQ0NDQ0NDQ0NDE0NDE/NDExMTE1PzE0MTQ0NDExNP/AABEIAK4BIgMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAYF/8QAQxAAAgIBAgIEBg0MAwEAAAAAAAECEQMEEgUhBjFRcRMUIkFhkRZUYnN0gYKSobLD0dIVIyQyNDVCUlOTorEHM2Ml/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECBAMF/8QANhEAAgIBAgMEBwUJAAAAAAAAAAECEhEDEwQhMUFxgdFRYZGSobHBI1JTYqIiMjNygrLC0uH/2gAMAwEAAhEDEQA/APhgMKPZyWoBQUOh0LJW2IKKAMlbZI6ChiyOhNFAAZHQAAdBkdBBQwDIUEBQqDI6CCiqAWR7YqChgA9sKABgPbFQUMdCyOhNDodAGR7YgGAZHthQUAULIUCgoKHQZCgqCh0AZCgqCh0FDyFBDAYZHQ50OgGMhQAAAWS1AAoYBkdAoKAYZHQQDAWR0FQwoYZHQQUMAyOggGAZHQQx0KhDoADAB7YqHQAA9sVDAdCyPbEAwoMj2wodCKDI9sVCKAMhtgAAGQ2wAYCyG2IBiDIbYAABkNswAALyclAYAAi1AB2IAKUBgAAVtgAWFgVtgMVhYsj2xgKwsMj2ygJsLEVtFWBNhYD2igJsW4CtplisncG4ClpFWVZnuDcBWyaWKyLAA2S7HZnYWBWya2KzOwsQbJpYWZ2FjHsmm4dmdhYBsl2OzOwsA2TSwM7AQbRIWTYrLMy0y7FYrEItaZVhZIBkpaaKsLJAVi6FWFkgKyKoirDcSArIqiKsZB9PgHB563OsUXtjFbss2rUMafN976kvuYroU6wi5S5JHFgwzySUccZTk+qEYucn3Jcz6sei+vkrWmnT7ai/U2mfW13SLFooy03C4wgovbk1TSnkySXW1297tdiqj4eTpDrZO3qs9+5yTgvVGkTeT6YRwi+I1FaMYxj2Wy37F07upv7FOIe1pevH+IfsU4h7Wl68f4jl/L2s9tan+9k+8Py/rPbWo/vZPvFefq+Je3xX5PZL/Y6fYpxD2tL1w/EKXRXXrm9NP4nGT9SZz/l/We2tR/en9449INYufjOfl/65H9DdBeXq+I9vivyeyXmcep02TFLZlxyxyX8MoShKu2n5vSZHrNB0pWdR03FMcc+KXVn2KOXG/wCfl/uNNek+V0j4K9FkjtfhMGWO/BlXNSh6WuVq132n6A3OxlaepK+1qxrN9O1PHXD9K7U+Z8gQxD3DVQLGAE3CggAYXHQQxALcCoDEAXHUYgALhUdgILHcVRjEIdwqSAAXcyqIAAEOZVQAAE5lKIAAE2KqADAViqiGIYrDwB67TS8U4HLLHycuuzSxbuaksaUk1fyJ/OPInruMfuLh3v8AP7UlyzgzcVHL0ovo5rPgm/mkeRADv4Jwuetzxw4+V+VKTVxhFdc360q87aHY0zcYRc5PCXNs44QcmlFNuX6qinJy7kubO/8AIGrcd3iuevecifqqz0Wr47h4dem4bCEsi8jLq5xU5ZJLrUa9PyV5kz4z6V69y3eMyu7pbFH1VRNzMp8TqK2nBRj2Xby/COcHx8uGWNuOSMoSXXFxcJLvT5nq/wDjvDgnqcnhlB5VjTwRkk49flSin/Elt+JsvR9J8erS0/FMcJwl5MNRCKjlxN/xOurvVdzPi9IODz0Gbapbsc1vxZY8t8b5dXU1yuu1dpLnyJm5a8ZcNqLbnJcmuaaXXD5PvTw8H3P+RsOCGXD4NQjnlGbzRilbja2yaXn/AFvV6ETopeOcEz45O8miksmNvm446+7f9B5CTbbbdtu23zbfaz1vRD9h4z8GX1Mor8idTh9jhYRtlwlFp/1eTa7jyNgNrr7xC3D08BQxDJ3AwIBgFwAAALgAhgFwAQxFXAYgApSDAAAFWDBIDAbmZ0hAxhRNysCAdBQnMrAgHQ6JuPBIx0FCcysCAdDE5jwTR6/jH7i4d79P7U8ket4x+4+He/5PtSb5MnEr9vQ/n/xkeRPX8IfivBtVqY8s2oyLBGS/WWParr085/QeRPW6SLz8CzQjznpdQsso+d43FXLu8qfzWJTDjUqQUv3XOOe7Pb44PI9fPtGFDoi5sEevTer4G9/PJoc0Ywk+vwdRVdy3tfIR5Kj1ujj4DgeolK09VqIY8d8t0Y7ef+GT1Ap9THxnTSa63jj6/DJ5A9d0R/YeM/Bl9TKeTo9b0RX6Dxj4MvqZSYzy/aHHfwH3x/uieRfW+8VFtdfeFE3NbfMigougoVgyRQy6FQWAgC2hNDsBIFUIqwxAMRSkACGBakIQDAqwEgVQUTcjAqCihE3KwKhgOiXMeBUA6HRNwJCito0hOYZIodF7Q2EXFkij1vF1/wDE4d7/AJPtTy6geslDxjgWNRVvSaiW5L+SW7n6si9THGeVLuMnFSxLRl2Ka+KkvmzyFH1+jfFXo8+6Ud2HLHweeHXvg/Ol2rn62vOfOUBrGc9zDyjtqRhqQcJrMWeg4t0Xk14zoH4zpsluKhcskPcuPW0urt7V5zz70k1La4SUv5HFqV91Wdmg1ubTycsGSWNvr2vyX3xfJ/Gj7a6Y6zbW7G/dPGt3+6+gb1IS5818TMnxWmq8pr0ttPx5NPv5ZOXhPRbJk/O6q9LpoLdKeXyJbeyMX1d7+ky6S8VjqZQw4Fs0unj4PDCmt3m3Nebkkl5672Ya7iWfUteGyyyJO1F8oL0qKpX6aOPwZMtVYxHp8Qhpzc1q6zTkuiXRZ6v1t+n0HPsPWdE1+g8X+Dr6mU85sPT8Jh4vwrW5Xy8Yaw4/dKqbXzp/NYaUsy7k/kLjJZ0lHtcor9Sf0Z5FwFsOjYLac7mtyMNobTfYGwdwsc+0W06HAnYOwWMdomjbaKilIqxg0DRq4kuJaY8mdBRbiJotSKyQBTQqLTAkB0MrIBQUXtHtM7mLJnQ6NFEewhzFkz2j2migUsZLmKxioDUDdQGoEuYrGCgUoHQsZSgTcm5zrGUsZ0LGUsZNyXM51A+x0c4ktLklHJHfp88fB5oVa28+deerfemzhWMaxiWq4tNdTlqqOpBwl0Z9fivRqUfz2l/SNNLyoyh5coR7GlzfevjPhPHtdO7XmfJr4j6mg1+bTu8WSUL5yj1wl3xfL4z7K6WZ68rHgk+145W/8i3LSlzy4+GV9GZlPiYcmlNenNX48seJ5JRKUT1nssz/ANLB8yf4h+y3P/RwfMn+IX2X3/0vzDe1/wAJe+vI8ntGoN8kr7j1fssz/wBLT/Mn+IH0rz+bHgT7VCdr/IPs/vv3f+i3tf8ADXvryPm8L6O5M35zKnp9PHypZJ+Q3FddJ/7fLv6h8f4hHN4PBgW3S4Ftgua3Sqt33d77SNfxLPqP+2cnHrUF5MF8ldfxnD4MJasVGsO3q31fkghCcprU1Wsrol0Xr582+z1Loc3gx7Do2C8Gc7Gm5z7Cdh1OAtg8jsczgS4HS4E7CsjscziS4nS4CcCkyrHK4EOJ1OBEoFqRSkcziS4m7gS4lqRakYNEtGziQ0dEy0zOgKoCsjybKJSgaqBSgYXI4uRkoFKBsoFKBNibGKgUoGygUoEWJsZKA1jNlApQJuTYxUC1E2UClAm5FzFQKUDZQKUBWJsYeDKUDbYVsFYVjFQDYbqBSgKxLkYKA9hvsHsHkLGGwNh0bB7QyKxzbA2HRsHsHkVjl2BsOjYGweR2ObYJwOnYJwHkLHK4EuB1uBDgVYqxyuBLgdTgZuBdi1I5nAiUTpcCHEpMtSOVwM5ROqUCJROiZakcsomconTKBlKJ0TOiZhQGu0C8lZOxRKUDVRGoHmuRmsQoFqJagWokORLkZKBagaqBUYEuRLkZKBagaqBagTYhyMVAtRNVApQFkmxkoFKBqoFKAZJsY7BqBuoDUB5JsYrGPabKBSgGRWMPBj2G+wewYrGG0ew32DUAyKxzbB7Do2BtKyFjm2BsOjYJwALHPsJcDp2EuA8jUjmcBOB0OAnAaZSkcrgZuB1uBm4F5KUjklAiUDslAylApMtSOOUDOUDslAylEtM6qRySiZSidcomUoHRM6KRzUBrtAuxeTujE0UCoxLSPLbMzZEYGigVFFxiS2c3IiMC1A0SGkLJDZKgUoFpFqIskuRmoFKBqkVFATkyUC1A02lKIybGagNQNVEaRRNjJRHsNlEaiArGKiPYa0PaUKxltDYbUFALJjtDYbUG0YZMdhLib7RUAWMNgOBs4ktDKyYOAnE3aJaAeTmcCHE6WiWiilI5pQMpQOtxMpIpM6KRyygZSgdckZyiWmdFI45QMpQOuSMpotM6xkcu0DWgLyXk/9k=";
const base_url = "https://graph.instagram.com/me/media?fields=id,caption&access_token=";
const access_token = "IGQVJVSW1wekJ2MFB0aE40emFHaE5ERHloVHZA0ZAjVOcThFanpDVlFlVE95QUNqT3MzS2lYQURiY1VWaHJGRmJ4cWd6ZAENtVkxCUzFVYW5RbEJHVjBzN09ENERTcVNPLWZATYW9DbnVsSVB4RERBN2kzdgZDZD";
//const access_token = "ZAENtVkxCUzFVYW5RbEJHVjBzN09ENERTcVNPLWZATYW9DbnVsSVB4RERBN2kzdgZDZD";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    image: {
        width: null,
        resizeMode: 'contain',
        height: 220
    },
    Card: {
        width: 200,
        margin: 'auto'
    }
}));

class Home extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: true,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            loginPasswordRequired: "dispNone",
            loginPassword: "",
            loginFailed: false,
            allImagesData: [],
            like: false,
            likeClicked: "",
            numLikes: 0
        }
    }

    getInstagramImages(imageid, varallImagesData) {
        // Get upcoming movies
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let tempImageData = JSON.parse(this.responseText);
                var item = { "id": tempImageData.id, "media_type": tempImageData.media_type, "media_url": tempImageData.media_url, "username": tempImageData.username, "timestamp": tempImageData.timestamp };
                varallImagesData.push(item);
                that.setState({ allImagesData: varallImagesData });
            }
        });
        xhr.open("GET", "https://graph.instagram.com/" + imageid + "?fields=id,media_type,media_url,username,timestamp&access_token=" + access_token);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    }

    componentWillMount() {
        // Get upcoming movies
        let allImages = [];
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        let varAllImagesData = [];
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                allImages = JSON.parse(this.responseText);
                for (const img of Object.entries(allImages.data)) {
                    that.getInstagramImages(img[1].id, varAllImagesData);
                }
                that.setState({ allImagesData: varAllImagesData })
            }
        });
        xhr.open("GET", base_url + access_token);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    }

    likeHandler = (e) => {
        const{name, value} = e.target;
        this.state.[name] === true ? this.setState({[name]: false, numLikes: this.state.numLikes+1}) : this.setState({[name]: true, numLikes: this.state.numLikes+1});
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header loginSuccess={true} profilepicture={profile_picture} />
                <div className="flex-container wrap">
                    {this.state.allImagesData.map(movie => (
                        <Card id={movie.id} className={classes.Card}>
                            <CardHeader
                                avatar={
                                    <Avatar src={profile_picture} alt="Gokul" className={classes.avatar} />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={movie.username}
                                subheader={movie.timestamp}
                            />
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image={movie.media_url}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    PG Diploma in Full Stack Development
                                </Typography><br/>
                                <span>
                                    <FavoriteIcon onClick={this.likeHandler} className={this.state.likeClicked} />
                                    <Typography>{this.state.numLikes} Likes</Typography>
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Home);