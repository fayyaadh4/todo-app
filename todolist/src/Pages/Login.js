import React from "react";
import GoogleLogin from "./GoogleLogin";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Menu from "../Menu";

//sign in component styled using materials
//contains local and google login
export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className="form"
              noValidate
              action="http://localhost:5000/local"
              method="post"
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <GoogleLogin></GoogleLogin>
        </Container>
      </div>
    );
  }
}

/*

            <form action='http://localhost:5000/local' method="post">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username"></input>
                    <br />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password"></input>
                </div>
                <input type="submit" value="Log in"></input>
            </form>
            <a href="/register">Register</a>
            */
