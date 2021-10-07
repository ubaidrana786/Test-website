import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const usestyle = makeStyles({
  formwidth: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px",
    },
  },
});

export const AddUser = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });


  const handlechange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };

  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/posts", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      response.json().then((result) => {
        history.push("/all");
      });
    });
  };

  const classes = usestyle();
  return (
    <div>
      <FormGroup className={classes.formwidth}>
        <FormControl>
          <InputLabel>User Name</InputLabel>

          <Input
            type="text"
            name="name"
            value={values.name}
            onChange={handlechange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handlechange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Address</InputLabel>
          <Input
            type="text"
            name="address"
            value={values.address}
            onChange={handlechange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            type="number"
            name="phone"
            value={values.phone}
            onChange={handlechange}
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          variant="contained"
          style={{ backgroundColor: "#343a40", color: "white" }}
        >
          Add User
        </Button>
      </FormGroup>
    </div>
  );
};
