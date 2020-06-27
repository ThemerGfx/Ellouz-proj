import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./CommontComponent.scss";
import axios from "axios";
import Alert from "./Alert";
import Button from "@material-ui/core/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const inputStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40%",
      color: "white",
    },
  },
}));

function getModalStyle() {
  return {
    transform: `translate(0%, 0%)`,
    background: "#EFEFEF",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "55%",
    backgroundColor: "#EFEFEF",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProspectForm = (props) => {
  //alert
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classStyles = inputStyles();
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [firstName, setFirstName] = React.useState("");
  const addFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const [lastName, setLastName] = React.useState("");
  const addLastName = (event) => {
    setLastName(event.target.value);
  };
  const [email, setEmail] = React.useState("");
  const addEmail = (event) => {
    setEmail(event.target.value);
  };
  const [phone, setPhone] = React.useState("");
  const addPhone = (event) => {
    setPhone(event.target.value);
  };
  const [region, setRegion] = React.useState("");
  const addRegion = (event) => {
    setRegion(event.target.value);
  };
  const [club, setClub] = React.useState("");
  const addClub = (event) => {
    setClub(event.target.value);
  };
  const [prospect, setProspect] = React.useState("");

  const addProspect = () => {
    setProspect({ firstName, lastName, email, phone, region, club });
    axios
      .post("/prospect/create", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phone,
        region: region,
        club: club,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
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
        alignItems: "center",
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
            top: "5px",
          }}
          onClick={props.handleClose}
        ></i>

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
            width: "fitcontent",
          }}
          className={classStyles.root}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              minWidth: "150px",
              margin: "0px",
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
              style={{ width: "100%", height: "30px" }}
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
              margin: "0px",
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              className="nom"
            >
              PRENOM
            </span>
            <input
              style={{ width: "100%", height: "30px" }}
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
              margin: "0px",
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                width: "100%",
              }}
            >
              ADRESSE MAIL
            </span>
            <input
              style={{ width: "100%", height: "30px" }}
              className="input"
              onChange={addEmail}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              minWidth: "150px",
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              TELEPHONE
            </span>
            <input
              style={{ width: "100%", height: "30px" }}
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
              minWidth: "150px",
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
              minWidth: "150px",
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
              display: "flex",
              justifyContent: "center",
              width: "100%",
              minWidth: "150px",
            }}
          >
            <button
              style={{
                backgroundColor: "black",
                border: "none",
                height: "30px",
                width: "200px",
              }}
              onClick={() => {
                addProspect();
                props.handleClose();
              }}
            >
              <span style={{ color: "white", fontSize: "20px" }}>ENVOYER</span>
            </button>
            <SnackbarProvider maxSnack={3}>
              <Alert />
            </SnackbarProvider>
            <Button onClick={handleClick(TransitionUp)}>Up</Button>

            <Snackbar
              open={open}
              onClose={handleClose}
              TransitionComponent={transition}
              message="I love snacks"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ProspectForm;
