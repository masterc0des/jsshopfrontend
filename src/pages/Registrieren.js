import React, { useState } from 'react';
import './pages.css';

function Registrieren() {

  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [geburtsdatum, setGeburtsdatum] = useState("");
  const [adresse, setAdresse] = useState("");
  const [hausnummer, setHausnummer] = useState("");
  const [plz, setPLZ] = useState("");
  const [ort, setOrt] = useState("");
  const [email, setEmail] = useState(""); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {"vorname": vorname, "nachname": nachname, "geburtsdatum": geburtsdatum, "adresse": adresse, "hausnummer": hausnummer, "plz": plz, "ort": ort, "username": username, "email": email, "password": password}
    const JSONData = JSON.stringify(formData);

    console.clear();

    fetch("http://localhost:8080/api/adduser", { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSONData })
    .then(response => response.json())
    .then(serverRes => console.log(serverRes))
  }

  return (
    <div id='div-register'>
        <h1 id="h1-register">Registrierung</h1>
        <form id="register-form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">Vorname:</label>
          <br></br>
          <input className="input" type="text" name="name" size="22" onChange={event => setVorname(event.target.value)}></input>
          <br></br>
          <br></br>
          <label className="label" htmlFor="username">Nachname:</label>
          <br></br>
          <input className="input" type="text" name="surname" size="22" onChange={event => setNachname(event.target.value)}></input>
          <br></br>
          <br></br>
          <label className="label" htmlFor="birthdate">Geburtsdatum:</label>
          <br></br>
          <input className="input" type="text" name="birthdate" size="22" onChange={event => setGeburtsdatum(event.target.value)}></input>
          <br></br>
          <br></br>
          <label className="label" htmlFor="adress">Adresse:</label>
          <br></br>
          <input className="input" type="text" name="adress" size="22" onChange={event => setAdresse(event.target.value)}></input>
          <br></br>
          <br></br>
          <label className="label" htmlFor="streetno">Hausnummer:</label>
          <br></br>
          <input className="input" type="text" name="streetno" size="22" onChange={event => setHausnummer(event.target.value)}></input>
          <br></br>
          <br></br>
          <label className="label" htmlFor="postalcode">PLZ:</label>
          <br></br>
          <input className="input" type="text" name="postalcode" size="22" onChange={event => setPLZ(event.target.value)}></input>
          <br></br>
          <br></br>
          <label className="label" htmlFor="city">Ort:</label>
          <br></br>
          <input className="input" type="text" name="city" size="22" onChange={event => setOrt(event.target.value)}></input>
          <br></br>
          <br></br>
          <label className="label" htmlFor="username">Nutzername:</label>
          <br></br>
          <input className="input" type="text" name="username" size="22" onChange={event => setUsername(event.target.value)}></input>
          <br></br>
          <br></br>
          <label className="label" htmlFor="email">E-Mail:</label>
          <br></br>
          <input className="input" type="text" name="email" size="22" onChange={event => setEmail(event.target.value)}></input>
          <br></br>
          <br></br>
          <label className="label" htmlFor="password">Passwort:</label>
          <br></br>
          <input className="input" type="password" name="password" size="22" onChange={event => setPassword(event.target.value)}></input>
          <br></br>
          <br></br>
          <input className="submit" type="submit" value="Registrieren"></input>
        </form>
    </div>
  )
}

export default Registrieren;