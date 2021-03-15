import React, { Component } from 'react';
import './Home.css';
import Details from '../../screens/Details/Details';
import ReactDom from 'react-dom';
import artists from '../../common/artists';
import genres from '../../common/genre';
import Header from '../../common/Header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/moviesData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff7887',
        padding: '8px',
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridList: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.dark,
    }

});

class Home extends Component {

    constructor() {
        super();
        this.state = {
            movieName: "",
            genres: [],
            artists: []
        }
    }

    movieNameChangeHandler = event => {
        this.setState({ movieName: event.targer.value });
    }

    genreSelectHandler = event => {
        this.setState({ genres: event.target.value });
    }

    artistSelectHandler = event => {
        this.setState({ artists: event.target.value });
    }

    applyFilterHandler = () => {

    }

    movieClickHandler = (movieId) => {
        ReactDom.render(<Details movieId={movieId} />, document.getElementById('root'));
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upocoming Movies</span>
                </div>
                <GridList cellHeight={280} cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => (
                        < GridListTile key={movie.id}>
                            <img src={movie.poster_url} alt={movie.title} />
                            <GridListTileBar title={movie.title} />
                        </ GridListTile>
                    ))}
                </GridList>

                <div className="flex-container">
                    <div className="left">
                        {/* For released movies */}
                        <GridList cellHeight={350} className={classes.gridList}>

                            {moviesData.map((movie) => (
                                <GridListTile
                                    onClick={() => this.movieClickHandler(movie.id)}
                                    className="released-movie-grid-item" key={"grid" + movie.id}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Released Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>

                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                                    <Input id="movieName" onChnage={this.movieNameChangeHandler} />
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="selectMultipleCheckBox">Genre</InputLabel>
                                    <Select multiple
                                        input={<Input id="selectMultipleCheckBox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genreSelectHandler} >

                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => (
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name} />
                                            </MenuItem>))}
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="selectMultipleArtistCheckBox">Artist</InputLabel>
                                    <Select multiple
                                        input={<Input id="selectMultipleArtistCheckBox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistSelectHandler} >

                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                            </MenuItem>))}
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl} >
                                    <TextField
                                        id="releaseDateStart"
                                        label="Release Date Start"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>

                                <FormControl className={classes.formControl} >
                                    <TextField
                                        id="releaseDateEnd"
                                        label="Release Date End"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                                <br />
                                <br />
                                <FormControl className={classes.formControl} >
                                    <Button variant="contained" color="primary" onClick={this.applyFilterHandler}>
                                        Apply
                                </Button>
                                </FormControl>

                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div >
        );
    }
}

export default withStyles(styles)(Home);