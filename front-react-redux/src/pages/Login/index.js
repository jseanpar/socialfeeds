import React, { useState } from "react";
import Axios from "axios";
import "./style.css";
import { connect, useDispatch } from "react-redux";
import * as usersActions from "../../actions/usersActions";
import { GET_TOKEN } from '../../types/usersTypes'
import { GET_LOCAL, GET_LOCALPORT } from '../../types/envTypes'


function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();


  const onChangeUsername = (e) => {
    const username = e.target.value;
    console.log(username);
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const autentication = async () => {
    if (username === "" || password === "") {
      setMessage("Debe completar correo electrónico y contraseña");
    } else {
      await Axios.post(`${GET_LOCAL}:${GET_LOCALPORT}/login/`, {
        username: username,
        password: password,
      }).then(async (response) => {
        if (response.data.token) {
          const token = response.data.token;

          dispatch({
            type: GET_TOKEN,
            payload: token
          })
          
          response = await Axios.get(
            `${GET_LOCAL}:${GET_LOCALPORT}/login/isUserAuth/`,
            { headers: { "x-access-token": token } }
          );
          if (response.data.auth) props.history.push("/");
        } else {
          setMessage("Correo electrónico o contraseña incorrectos");
        }
      });
    }
  };

  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Socialfeeds</h3>
            <span className="loginDesc">
              Conecta amigos alrededor del mundo en Socialfeeds.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input
                placeholder="Correo electrónico"
                name="username"
                type="email"
                value={username}
                onChange={onChangeUsername}
                autoComplete="off"
                className="loginInput"
              />
              <input
                placeholder="Contraseña"
                name="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                autoComplete="off"
                className="loginInput"
              />
              <button onClick={() => autentication()} className="loginButton">
                Iniciar sesión
              </button>
              <span className="loginForgot">Olvidaste tu contraseña</span>
              <button className="loginRegisterButton">
                Crear nueva cuenta
              </button>
            </div>
            {message && (
              <div className="alert alert-danger mt-4" role="alert">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps, usersActions)(Login);
