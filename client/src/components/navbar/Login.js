import React from "react";
import "./Navbar.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { withRouter } from "react-router-dom";
import history from "../common-components/history";
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

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const [modalStyle] = React.useState(getModalStyle);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classStyles = inputStyles();
  const classes = useStyles();
  const onSubmit = (e) => {
    handleClose();
    axios
      .post("members/login", { email, password })
      .then((res) => {
        localStorage.setItem("usertoken", res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        if (res) {
          history.push("/profile");
        }
      });
  };

  return (
    <div>
      <div className="login" onClick={handleOpen}>
        <img src="https://img.icons8.com/ios/50/000000/login-as-user.png" />
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
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
            onClick={handleClose}
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
                width: "90%",
                minWidth: "150px",
                margin: "0px",
              }}
              className="aaa"
            >
              <span
                style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
                className="nom"
              >
                ADRESSE MAIL
              </span>
              <input
                style={{ width: "100%", height: "30px" }}
                className="input"
                onChange={getEmail}
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
                PASSWORD
              </span>
              <input
                style={{ width: "100%", height: "30px" }}
                className="input"
                type="password"
                onChange={getPassword}
              ></input>
            </div>
          </div>
          <div
            style={{
              marginTop: "15px",
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
              onClick={onSubmit}
            >
              <span style={{ color: "white", fontSize: "20px" }}>Sign in</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
