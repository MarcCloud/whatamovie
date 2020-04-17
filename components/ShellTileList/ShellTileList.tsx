import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shellTile: {
      background: '#444eaa'
    },
    root: {
      padding: theme.spacing(1)
    }
  })
);
const ShellTileList = () => {
  const classes = useStyles();
  return (
    <GridList className={classes.root} cellHeight={180} cols={3}>
      <GridListTile>
        <Skeleton variant="rect" animation="wave" height={178} className={classes.shellTile} />
      </GridListTile>
      <GridListTile>
        <Skeleton variant="rect" animation="wave" height={178} className={classes.shellTile} />
      </GridListTile>
      <GridListTile>
        <Skeleton variant="rect" animation="wave" height={178} className={classes.shellTile} />
      </GridListTile>
    </GridList>
  );
};

export default ShellTileList;
