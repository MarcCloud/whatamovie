import React from 'react';
import gql from 'graphql-tag';
import { NextPage } from 'next';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import Container from '@material-ui/core/Container';
import { makeStyles,createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withApollo } from '../../lib/withApollo';
import SearchBox from '../../components/SearchBox';
import MovieList from '../../components/MovieList';
import ShellTileList from '../../components/ShellTileList';


export const POPULAR_MOVIES = gql`
  query GetPopular($page: Int!) {
    popularMovies(page: $page) {
      id
      title
      backdropPath
      posterPath
    }
  }
`;

export const SEARCH_MOVIE_TITLE = gql`
  query SearchByTitle($title: String!, $page: Int!) {
    searchMovies(title: $title, page: $page) {
      id
      title
      backdropPath
      posterPath
    }
  }
`;


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading:{
      color: theme.palette.background.paper
    },
    root: {
      padding: theme.spacing(1),
      background: "#00000022"
    },
  })
);

const Home: NextPage<{}> = () => {
  const classes = useStyles();
  const popularMoviesResult = useQuery(POPULAR_MOVIES, { variables: { page: 1 } });
  const [
    executeSearch,
    searchResult
  ] = useLazyQuery(SEARCH_MOVIE_TITLE);

  const handleSearch = (searchTerm: string) => {
    executeSearch({ variables: { title: searchTerm, page: 1 } });
  };
  return (
    <Container maxWidth="lg" className={classes.root}>
      
      <Grid container direction="column" spacing={2} justify="center">
        <Grid item container direction="row" justify="space-between" alignItems="center">
          <Grid item className={classes.heading}>
            <Typography variant="h2" color="inherit">
              Whatamovie
            </Typography>
          </Grid>
          <Grid item>
            <SearchBox placeholder="Search movies by title" label="Search Movie" onSearch={handleSearch}/>
          </Grid>
        </Grid>
        <Grid item>
          <Box marginY={2} textAlign="left">
          {searchResult.data?.searchMovies &&
          (<>
            <Typography variant="h4" className={classes.heading}>
              {`Your search results:`}
            </Typography>
              <MovieList movies={searchResult.data?.searchMovies || []}/>
          </>)}
          {searchResult.loading && <ShellTileList />}
        </Box>
        </Grid>
        <Grid item>
          <Box marginY={2} textAlign="left">
            <Typography variant="h4" className={classes.heading}>
              Popular
            </Typography>
          </Box>
          {popularMoviesResult.loading && <ShellTileList />}
          <MovieList movies={popularMoviesResult.data?.popularMovies || []}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withApollo({ ssr: true })(Home);
