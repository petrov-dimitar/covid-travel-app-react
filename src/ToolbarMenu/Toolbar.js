import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../App.css'
import Button from '@material-ui/core/Button';
import '../index.css'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Link,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'red',
      color: 'white',
      
    }
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Link to="/landing"> <Button className={classes.menuButton}   startIcon={<DeleteIcon />} color="inherit">Home</Button></Link> 
        <Link to="/plan"> <Button className={classes.menuButton}   startIcon={<CloudUploadIcon />} color="inherit">Plan Trip</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}