import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Link from 'next/link'
import moment from 'moment'
import { useQuery } from '@apollo/react-hooks';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography  from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { withApollo } from '../../lib/withApollo';
import { MOVIE_WITH_RELATED_MOVIES } from './queries';
import { Movie } from '../../types';

import CastList from './CastList';
import MovieList from '../../components/MovieList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      background: "#00000022"
    },
    whiteText:{
      color: "#FFF"
    }
  })
);

const MovieDetail: NextPage<{}> = () => {
  const {query} = useRouter();
  const classes= useStyles();
  const { data } = useQuery(MOVIE_WITH_RELATED_MOVIES, {
    variables: { movieId: parseInt(query.movie as string) }
  });
  const movie: Movie = data?.movie || {};
  return (
    <Container maxWidth="lg" className={classes.root}>
      {movie ? (
        <>
          <Box>
            <Link href="/">
              <a className={classes.whiteText}>
                <IconButton size="small" color="inherit">
                  <ChevronLeft/>
                  Back
                </IconButton>
              </a>
            </Link>
          </Box>
          <Grid container direction="row" justify='flex-start'>
            <Grid item lg={6} md={6}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} alt={movie.title} />
            </Grid>
            <Grid item container direction="column" lg={6} md={6} className={classes.whiteText} spacing={2}>
            <Grid item>
              <Typography variant="h4">{movie.title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="overline">Synopsis</Typography>
              <Typography variant="body2">{movie.overview}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="overline">Runtime</Typography>
              <Typography variant="body2">{movie.runtime} minutes</Typography>
            </Grid>
            <Grid item>
              <Typography variant="overline">Release Date</Typography>
              <Typography variant="body2">{moment(movie.releaseDate).format('MMMM Do YYYY')}</Typography>
            </Grid>
            <Grid item >
              <Typography variant="overline">Cast</Typography>
              <CastList actors={movie.cast || []}/>
            </Grid>
          </Grid>
          </Grid>
          <Box>
            <Box marginY={2} color="#FFF">
              <Typography variant="h4" color="inherit">Similar Movies</Typography>
            </Box>
            <MovieList movies={data?.relatedMovies || []}/>
          </Box>
        </>
      ): <></>}
    </Container>
  );
};

export default withApollo({ ssr: true })(MovieDetail);
