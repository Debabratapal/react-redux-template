import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "300px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  flexCenter: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    float: "right"
  },
  input: {
    marginBottom: "1.5rem"
  }
});

const LoginPage = props => {
  const classes = useStyles();
  const [email, setEmail] = useState("sneed.ravi@gmail.com");
  const [password, setPassword] = useState("debabratasneed");
  const [error, setError] = useState({
    email: false,
    password: false
  });

  const setValues = (field, e) => {
    if (field === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setError({
        email: email ? false : true,
        password: password ? false : true
      });
      setTimeout(() => {
        setError({
          input: false,
          password: false
        });
      }, 2000);
      return;
    }
    let loginObj = { email, password };
    props.login(loginObj);
  };

  if (props.authenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className={classes.flexCenter}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Login
            </Typography>
          </CardContent>
          <CardActions>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.input}
                value={email}
                onChange={e => setValues("email", e)}
                fullWidth
                error={error.email}
                type="text"
                label="Email"
              />
              <TextField
                className={classes.input}
                value={password}
                onChange={e => setValues("password", e)}
                fullWidth
                error={error.password}
                type="password"
                label="Password"
              />
              <Button
                variant="contained"
                className={classes.btn}
                type="submit"
                onClick={onSubmit}
                size="large"
                color="primary"
              >
                Login
              </Button>
            </form>
          </CardActions>
        </Card>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: obj => login(obj)
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
