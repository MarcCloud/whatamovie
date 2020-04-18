import React from 'react';
import { useRouter } from 'next/router';
import { Movie } from '../../types';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    gridList: {
      width: '100%',
      height: '100%'
    },
    gridTile: {
      '&:hover': {
        cursor: 'pointer'
      }
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    }
  })
);
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Box className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        {movies.map((movie) => (
          <GridListTile
            className={classes.gridTile}
            key={movie.id}
            onClick={() => {
              router.push(`/movies?movie=${movie.id}`);
            }}
          >
            <img src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} alt={movie.title} />
            <GridListTileBar
              title={movie.title}
              actionIcon={
                <IconButton aria-label={`more about ${movie.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
};

interface MovieListProps {
  movies: Movie[];
}
export default MovieList;
