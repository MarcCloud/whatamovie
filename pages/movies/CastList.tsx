import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { Actor } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    gridList: {
      height: theme.spacing(44)
    },
    title: {
      color: theme.palette.primary.dark
    },
    titleBar: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    },
    tileImg: {
      width: 100
    }
  })
);

interface CastListProps {
  actors: Actor[];
}

const CastList: React.FC<CastListProps> = ({ actors }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <GridList className={classes.gridList} cols={1} spacing={1}>
        {actors?.map((actor) => (
          <GridListTile key={actor.id}>
            <img
              className={classes.tileImg}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <GridListTileBar title={actor.name} />
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
};

export default CastList;
