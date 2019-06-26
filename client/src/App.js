import React,{ Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit*3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '이강인',
    'gender': '남자'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '박지성',
    'gender': '남자'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이승우',
    'gender': '남자'
  }
]


class App extends Component{
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>성별</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(temp => { 
              return (<Customer key={temp.id} id={temp.id} image={temp.image} name={temp.name} gender={temp.gender} />)
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
