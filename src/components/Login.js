
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
export const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("")
  let history = useHistory();
  const emailchahgehandle = (e) => {
    e.preventDefault();
    setemail(e.target.value);
  };
  const passwordchahgehandle = (e) => {
    e.preventDefault();
    setpassword(e.target.value);
  };
  const login = async (e) => {
    e.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      alert("please email and password")
      return;
    }
    else {
      let item = { email, password };
      let result = await fetch("https://reqres.in/api/login", {
        method: "post",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();
      localStorage.setItem("login", JSON.stringify(result));
      history.push("./")
      setemail("");
      setpassword("");
    }
  };

  const usestyle = makeStyles({
    formwidth: {
      width: "30%",
      margin: "15% 0 0 35%",
      "& > *": {
        marginTop: "30px",
      },
    },
  });
  const classes = usestyle();
  return (
    <>
      <FormGroup className={classes.formwidth}>
        <FormControl>
          <InputLabel>Email</InputLabel>
          {/* <Input name="user" onChange={(e) => setemail(e.target.value)} /> */}
          <Input name="user" value={email} onChange={emailchahgehandle} />
        </FormControl>

        <FormControl>
          {/* <InputLabel>password</InputLabel>
          <Input
            type="password"
            name="password"
            onChange={(e) => setpassword(e.target.value)}
          /> */}
          <InputLabel>password</InputLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={passwordchahgehandle}
          />
        </FormControl>
        <Button
          variant="contained"
          style={{ backgroundColor: "#343a40", color: "white" }}
          onClick={login}
        >
          Log In
        </Button>

      </FormGroup>
    </>
  );
};
