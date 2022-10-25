import { SyntheticEvent, useEffect, useState } from "react";

interface IUser {
  name: string;
  lastName: string;
  birthdate: string;
  gender: any;
  email: string;
  newsletter: boolean;
  username: string;
  password: string;
  repeatPassword: string;
  acctype: string;
}

export function Form() {
  const user: IUser = {
    name: "",
    lastName: "",
    birthdate: "",
    gender: "",
    email: "",
    newsletter: false,
    username: "",
    password: "",
    repeatPassword: "",
    acctype: "",
  };

  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   render();
  // }, [counter]);

  const handlerCounter = (value: number) => {
    // counter = counter + value;
    setCounter(counter + value);
  };

  const [form, setform] = useState(user);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log("Submiteando? xd");
  };

  const handleForm = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    setform({
      ...form,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
  };

  const form1 = () => {
    const template = (
      <>
        <h2>Personal Data</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <legend>Name</legend>
            <input
              type="text"
              name="name"
              placeholder="Introduzca su nombre"
              value={form.name}
              onInput={handleForm}
            />
          </div>
          <div>
            <legend>Last Name</legend>
            <input
              type="text"
              name="lastName"
              placeholder="Introduzca su apellido"
              value={form.lastName}
              onInput={handleForm}
            />
          </div>
          <div>
            <legend>BirthDate</legend>
            <input
              type="date"
              name="birthdate"
              value={form.birthdate}
              onInput={handleForm}
            />
          </div>
          <div>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                name="gender"
                value={"Female"}
                checked={form.gender === "Female"}
                onChange={handleForm}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value={"Male"}
                checked={form.gender === "Male"}
                onChange={handleForm}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value={"Other"}
                checked={form.gender === "Other"}
                onChange={handleForm}
              />{" "}
              Other
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value={"Prefer"}
                checked={form.gender === "Prefer"}
                onChange={handleForm}
              />{" "}
              Prefer
            </label>
          </div>
          <div>
            <legend>Email</legend>
            <input
              type="email"
              name="email"
              value={form.email}
              onInput={handleForm}
            />
          </div>
          <div>
            <legend>Newsletter</legend>
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleForm}
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={() => {
                handlerCounter(+1);
              }}
            >
              Next
            </button>
          </div>
        </form>
      </>
    );

    return template;
  };

  const form2 = () => {
    const template = (
      <>
        <h2>Access Data</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <legend>Username</legend>
            <input
              type="text"
              name="username"
              placeholder="Introduzca su nombre de usuario"
              value={form.username}
              onInput={handleForm}
            />
          </div>
          <div>
            <legend>Password</legend>
            <input
              type="password"
              name="password"
              placeholder="Introduzca su apellido"
              value={form.password}
              onInput={handleForm}
            />
          </div>
          <div>
            <legend>Repeat Password</legend>
            <input
              type="password"
              name="repeatPassword"
              value={form.repeatPassword}
              onInput={handleForm}
            />
          </div>
          <div>
            <legend>Account type</legend>
            <label>
              <input
                type="radio"
                name="acctype"
                value={"Personal"}
                checked={form.acctype === "Personal"}
                onChange={handleForm}
              />{" "}
              Personal
            </label>
            <label>
              <input
                type="radio"
                name="acctype"
                value={"Pro"}
                checked={form.acctype === "Pro"}
                onChange={handleForm}
              />{" "}
              Pro
            </label>
            <label>
              <input
                type="radio"
                name="acctype"
                value={"Business"}
                checked={form.acctype === "Business"}
                onChange={handleForm}
              />{" "}
              Business
            </label>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => {
                handlerCounter(-1);
              }}
            >
              Prev
            </button>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => {
                handlerCounter(+1);
              }}
            >
              Next
            </button>
          </div>
        </form>
      </>
    );

    return template;
  };

  const form3 = () => {
    return (
      <>
        <div>
          {" "}
          <h2>Credentials</h2>
          <p>Name: {form.name}</p>
          <p>Lastname: {form.lastName}</p>
          <p>Birthdate: {form.birthdate}</p>
          <p>Gender: {form.gender}</p>
          <p>Email: {form.email}</p>
          <p>Newsletter: {form.newsletter}</p>
          <p>Username: {form.username}</p>
          <p>Password: {form.password}</p>
          <p>Repeat password: {form.repeatPassword}</p>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => {
              handlerCounter(-1);
            }}
          >
            Prev
          </button>
        </div>
      </>
    );
  };

  const render = () => {
    if (counter === 1) return form2();
    if (counter === 2) return form3();
    return form1();
  };

  return render();
}
