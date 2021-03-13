import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/Header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/moviesData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

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
        fontWeight: 'bold'
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

});

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upocoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
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
                                <GridListTile className="released-movie-grid-item" key={"grid" + movie.id}>
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

                    </div>
                </div>

            </div >
        );
    }
}

export default withStyles(styles)(Home);