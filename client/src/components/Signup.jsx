import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const Signup = () => {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [designation, setDesignation] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          name,
          id,
          phone,
          pass,
          cpass,
          designation,
        })
        .then((res) => {
          if (res.data === "exists") {
            alert("User Exists");
          } else if (res.data === "notexists") {
            alert("WElcome new User");
            history("/home", { state: { id: phone } });
          }
        })
        .catch(() => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className="login-main flex-col-center">
        <div className="login-inner-content flex-col-center">
          <h1>EBeat Register</h1>
          <form action="post">
            <div class="input-group">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group">
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="text"
                class="form-control"
                placeholder="User ID"
                aria-label="User ID"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                class="form-control"
                placeholder="Phone No"
                aria-label="phone"
                aria-describedby="basic-addon1"
              />
            </div>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              name="pword"
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-labelledby="passwordHelpBlock"
              placeholder="Password"
            />
            <input
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
              name="cpword"
              type="password"
              id="cinputPassword5"
              class="form-control"
              aria-labelledby="passwordHelpBlock"
              placeholder="Confirm Password"
            />
            <select
              class="form-select"
              aria-label="Default select example"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option selected>Select Designation</option>
              <option value="1">SP</option>
              <option value="2">DYSP</option>
              <option value="3">Inspector</option>
              <option value="4">Beat Officer</option>
            </select>

            <button
              type="submit"
              onClick={submit}
              value=""
              className="btn btn-primary"
            >
              Register
            </button>
          </form>
          <br />
          <p>or</p>
          <br />
          <Link to="/">Log In</Link>
        </div>
      </div>
    </>
  );
};
