import { SyntheticEvent, useState } from "react";

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

interface ILoginData {
  username: string;
  password: string;
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

  const loginData: ILoginData = {
    username: "",
    password: "",
  };

  const [counter, setCounter] = useState(0);

  const handlerCounter = (value: number) => {
    setCounter(counter + value);
  };

  const [form, setform] = useState(user);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
  };

  const handleForm = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    setform({
      ...form,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
  };

  const [loginState, setloginState] = useState(loginData);

  const handleLogin = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    setloginState({ ...loginState, [element.name]: element.value });
  };

  const ageCalculator = () => {
    const today = new Date(); // Guardamos la fecha de hoy dentro de una variable
    const birthDate = new Date(form.birthdate); // Guardamos la fecha de nacimiento dentro de una variable
    let age = today.getFullYear() - birthDate.getFullYear(); // Restamos las fechas y las guardamos dentro de otra variable
    return age;
  };

  // La idea era componentizar los formularios para mejorar la legibilidad, pero no me ha dado tiempo
  const form1 = () => {
    ageCalculator();
    const template = (
      <>
        <h2>Personal Data</h2>
        {/* No me funciona el autoComplete="off" */}
        {/* No me funciona el required tampoco */}
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <legend>Name</legend>
            <input
              type="text"
              name="name"
              placeholder="Insert first name"
              value={form.name}
              onInput={handleForm}
              required
            />
          </div>
          <div>
            <legend>Last Name</legend>
            <input
              type="text"
              name="lastName"
              placeholder="Insert last name"
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
            <p>
              {" "}
              {!isNaN(ageCalculator()) &&
                "Your current age:" + ageCalculator() + " years old"}
            </p>
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
              placeholder="Email"
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
            <p>Accept terms of use</p>
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
              placeholder="Inset username"
              value={form.username}
              onInput={handleForm}
              required
            />
          </div>
          <div>
            <legend>Password</legend>
            <input
              type="password"
              name="password"
              placeholder="Insert password"
              value={form.password}
              onInput={handleForm}
              required
            />
          </div>
          <div>
            <legend>Repeat Password</legend>
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat password"
              value={form.repeatPassword}
              onInput={handleForm}
              required
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
          <button
            type="submit"
            onClick={() => {
              handlerCounter(+1);
            }}
          >
            Next
          </button>
        </div>
      </>
    );
  };

  const loginForm = () => {
    const template = (
      <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <legend>Username</legend>
            <input
              type="text"
              name="username"
              placeholder="Insert username"
              value={loginState.username}
              onInput={handleLogin}
              required
            />
          </div>
          <div>
            <legend>Password</legend>
            <input
              type="password"
              name="password"
              placeholder="Insert password"
              value={loginState.password}
              onInput={handleLogin}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={() => {
                loginChecker();
              }}
            >
              Confirm
            </button>
          </div>
        </form>
      </>
    );

    return template;
  };

  const loginChecker = () => {
    // let templateError = (
    //   <>
    //     <h2>ERROR INVALID DATA</h2>
    //   </>
    // );

    // let templateCorrect = () => {
    //   <h2>CORRECT DATA!</h2>;
    // };

    if (
      loginState.username !== form.username ||
      loginState.password !== form.password
    ) {
      return console.log("INVALID DATA");
    }

    return console.log("VALID DATA");
  };

  const render = () => {
    if (counter === 1) return form2();
    if (counter === 2) return form3();
    if (counter === 3) return loginForm();
    return form1();
  };

  return render();
}
