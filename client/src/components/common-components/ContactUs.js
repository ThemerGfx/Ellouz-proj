import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "./CommontComponent.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
const inputStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40%",
      color: "white"
    }
  }
}));

function getModalStyle() {
  return {
    transform: `translate(0%, 0%)`,
    background: "#EFEFEF"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "55%",
    backgroundColor: "#EFEFEF",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
const ContactUs = props => {
  const classStyles = inputStyles();
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [firstName, setFirstName] = React.useState('')
  const addFirstName = (event) => { setFirstName(event.target.value) }
  const [lastName, setLastName] = React.useState('')
  const addLastName = (event) => { setLastName(event.target.value) }
  const [email, setEmail] = React.useState('')
  const addEmail = (event) => { setEmail(event.target.value) }
  const [phone, setPhone] = React.useState('')
  const addPhone = (event) => { setPhone(event.target.value) }
  const [region, setRegion] = React.useState('')
  const addRegion = (event) => { setRegion(event.target.value) }
  const [club, setClub] = React.useState('')
  const addClub = (event) => { setClub(event.target.value) }
  const [submit, setSubmit] = React.useState('')
  const [message, setMessage] = React.useState('')
  const addMessage = (event) => { setMessage(event.target.value) }

  const handleSubmit = event => {
    setSubmit({ firstName, lastName, email, phone, region, club, message })
    console.log(firstName + lastName + 5 + email + 6);
    axios
      .post("/api/form", { firstName, lastName, email, phone, region, club, message })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={props.open}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={modalStyle} className={classes.paper}>
        <i
          className="fas fa-times"
          style={{
            color: "black",
            fontSize: "30px",
            right: "10px",
            position: "fixed",
            top: "5px"
          }}
          onClick={props.handleClose}
        ></i>
        {console.log(submit)}

        <center>
          <h2 style={{ fontSize: "30px" }} id="simple-modal-title">
            VISITEZ LE CLUB
          </h2>
          <p style={{ fontSize: "13px" }} id="simple-modal-description">
            Un coach vous contactera pour prendre RDV
          </p>
        </center>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "fitcontent"
          }}
          className={classStyles.root}

        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              minWidth: "150px",
              margin: "0px"
            }}
            className="aaa"
          >
            <span
              style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              className="nom"
            >
              NOM
            </span>
            <input
              style={{ width: "100%", height: "30px", fontSize: "15px" }}
              className="input"
              onChange={addFirstName}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              minWidth: "150px",
              margin: "0px"
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px"
              }}
              className="nom"
            >
              PRENOM
            </span>
            <input
              style={{ width: "100%", height: "30px", fontSize: "15px" }}
              className="input"
              onChange={addLastName}

            ></input>
          </div>
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              minWidth: "150px",
              margin: "0px"
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                width: "100%"
              }}
            >
              ADRESSE MAIL
            </span>
            <input
              style={{ width: "100%", height: "30px", fontSize: "15px" }}
              className="input"
              onChange={addEmail}

            ></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              minWidth: "150px"
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              TELEPHONE
            </span>
            <input
              style={{ width: "100%", height: "30px", fontSize: "15px" }}
              className="input"
              onChange={addPhone}
              type="Number"

            ></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              minWidth: "150px"
            }}
          >
            <label
              style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
            >
              REGION
            </label>

            <select
              style={{ width: "100%", height: "30px", fontSize: "18px" }}
              className="input"
              onChange={addRegion}

            >
              <option value="dole">Dole</option>
              <option value="paris">Paris</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              minWidth: "150px"
            }}
          >
            <label
              style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
            >
              Club
            </label>

            <select
              style={{ height: "30px", width: "100%", fontSize: "18px" }}
              id="cars"
              onChange={addClub}

            >
              <option value="dole">Dole</option>
              <option value="paris">Paris</option>
            </select>
          </div>
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              minWidth: "150px",
              margin: "0px"
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                width: "100%"
              }}
            >
              Message
            </span>

            <textarea style={{
              fontSize: "15px",
            }}
              onChange={addMessage}
              rows="4" cols="50"
              placeholder="Enter text here..." >
            </textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              minWidth: "150px"
            }}
          >
            <button
              style={{
                backgroundColor: "black",
                border: "none",
                height: "30px",
                width: "200px"
              }}
              onClick={() => {
                handleSubmit()
                props.handleClose()
              }}
            >
              <span style={{ color: "white", fontSize: "20px" }}>ENVOYER</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactUs;













