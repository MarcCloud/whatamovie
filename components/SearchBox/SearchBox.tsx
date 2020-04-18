import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    }
  })
);

interface SearchBoxProps {
  placeholder: string;
  label: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ label, placeholder, onSearch }) => {
  const classes = useStyles();
  const [
    searchTerm,
    setSearchTerm
  ] = useState('');
  return (
    <Paper component="form" className={classes.root} onSubmit={(e) => e.preventDefault()}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ 'aria-label': `search box ${label}` }}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            onSearch(searchTerm);
          }
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value as string);
        }}
      />
      <IconButton
        type="button"
        className={classes.iconButton}
        aria-label="search"
        onClick={() => {
          onSearch(searchTerm);
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBox;
