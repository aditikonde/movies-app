import React, { Component } from 'react';
import Header from '../../common/Header/Header';
import moviesData from '../../common/moviesData';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import Home from '../Home/Home';
import ReactDom from 'react-dom';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {},
            starIcons: [
                {
                    id: 1,
                    stateId: "star1",
                    color: "black"
                },
                {
                    id: 2,
                    stateId: "star2",
                    color: "black"
                },
                {
                    id: 3,
                    stateId: "star3",
                    color: "black"
                },
                {
                    id: 4,
                    stateId: "star4",
                    color: "black"
                },
                {
                    id: 5,
                    stateId: "star5",
                    color: "black"
                }
            ]
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((movie) => {
            return movie.id === this.props.movieId
        })[0];

        this.setState({ currentState });
        console.log(this.state);
    }

    backToHomeHandler = () => {
        ReactDom.render(<Home />, document.getElementById('root'));
    }

    artistClickHandler = (url) => {
        window.location = url;
    }

    starClickHandler = (starId) => {
        let starIconList = [];
        for (let star of this.state.starIcons) {
            let starNode = star;
            if (star.id <= starId) {
                starNode.color = "yellow";
            } else {
                starNode.color = "black";
            }
            starIconList.push(starNode);
        }
        this.setState({ starIcons: starIconList });
    }

    render() {
        let movie = this.state.movie;
        const opts = {
            height: '300',
            width: '700',
            playerVars: { autoplay: 1 }
        };

        return (
            <div>
                <Header />
                <div className="back">
                    <Typography onClick={this.backToHomeHandler}>
                        <span className="back-btn">&#60; Back to Home</span>
                    </Typography>
                </div>
                <d className="flex-container-details">
                    <div className="left-details">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middle-details">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title}
                            </Typography>
                            <br />

                            <Typography>
                                <span className="bold">Genre: </span>{movie.genres.join(',')}
                            </Typography>
                            <Typography>
                                <span className="bold">Release Date: </span>{movie.release_date}
                            </Typography>
                            <Typography>
                                <span className="bold">Duration: </span>{movie.duration}
                            </Typography>
                            <Typography>
                                <span className="bold">Rating: </span>{movie.critics_rating}
                            </Typography>
                            <br />
                            <Typography className="marginTop16">
                                <span className="bold">Plot: </span><a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline}
                            </Typography>

                            <div className="trailerContainer">
                                <Typography>
                                    <span className="bold">Trailer:</span>
                                </Typography>
                                <YouTube
                                    videoId={movie.trailer_url.split("?v=")[1]}
                                    opts={opts}
                                    onReady={this.onReady} />
                            </div>
                        </div>
                    </div>
                    <div className="right-details">

                        <Typography><span className="bold">Rate this Movie:</span></Typography>
                        {this.state.starIcons.map(star => (
                            <StarBorderIcon className={star.color} key={"star" + star.id} onClick={() => this.starClickHandler(star.id)} />
                        ))}
                        <div className="marginTop16 marginBottom16">
                            <Typography>
                                <span className="bold ">Artists: </span>
                            </Typography>
                            <br />
                            <GridList cellHeight={150} cols={2}>
                                {movie.artists.map((artist) => (
                                    <GridListTile className="artist-tile"
                                        onClick={() => this.artistClickHandler(artist.wiki_url)}>
                                        <img src={artist.profile_url} />
                                        <GridListTileBar title={artist.first_name + " " + artist.last_name} />

                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>


                    </div>
                </d>
            </div>
        );
    }
}

export default Details;