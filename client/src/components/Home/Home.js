import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from 'react-redux';
import useStyles from './styles'
import { getPosts } from '../../actions/posts';
import Paginate from '../Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = () => {
    if(search.trim()){
      //dispatch -> fetch search post
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) alert(e.value);
  }

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid container className={classes.gridContainer} justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} md={9} >
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <AppBar position='static' color='inherit' className={classes.appBarSearch}>
              <TextField
                name='search'
                variant='filled'
                value={search}
                label='Search Memories'
                onKeyPress={handleKeyPress}
                fullWidth
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
                style={{margin: '10px 0'}}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label='Search Tags'
                varient='filled'
              />
              <Button onClick={searchPost} color='primary'>Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6} className={classes.pagination}>
              <Paginate/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;