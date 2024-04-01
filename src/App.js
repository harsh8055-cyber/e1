import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import './App.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Grocery Store</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {/* <Typography variant="h4" gutterBottom>About Us</Typography> */}
        <Typography variant="body1" gutterBottom>
        At this grocery store, we're passionate about providing fresh, high-quality groceries to our customers. Our journey began with a simple mission: to make shopping for groceries convenient, enjoyable, and affordable for everyone.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://seed2plant.in/cdn/shop/products/Beansseeds.jpg?v=1603967248"
                title="Beans"
              />
              <CardContent>
                <Typography variant="h6">Beans</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                ₹ 30
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://cdn.britannica.com/25/78225-050-1781F6B7/broccoli-florets.jpg"
                title="Image 2"
              />
              <CardContent>
                <Typography variant="h6">Brocolli</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                ₹ 40
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg"
                title="Image 3"
              />
              <CardContent>
                <Typography variant="h6">Tomato</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                ₹ 30
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://m.media-amazon.com/images/I/71xkI-PIE5L.jpg"
                title="CUCUMBER"
              />
              <CardContent>
                <Typography variant="h6">CUCUMBER</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                ₹ 20
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://m.media-amazon.com/images/I/71GUFttn0jL._AC_UF1000,1000_QL80_.jpg"
                title="CUCUMBER"
              />
              <CardContent>
                <Typography variant="h6">ONION</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                ₹ 30
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;