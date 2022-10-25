import { SyntheticEvent, useState } from "react";

interface IUser {
  name: string;
  lastName: string;
  birthdate: string;
  gender: string;
  email: string;
  newsletter: boolean;
}

export function Form() {
  const user: IUser = {
    name: "",
    lastName: "",
    birthdate: "",
    gender: "",
    email: "",
    newsletter: false,
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <legend>Name</legend>
        <input type="text" name="name" placeholder="Introduzca su nombre" />
      </div>
      <div>
        <legend>Last Name</legend>
        <input
          type="text"
          name="lastName"
          placeholder="Introduzca su apellido"
        />
      </div>
      <div>
        <legend>BirthDate</legend>
        <input
          type="birthDate"
          name="birthDate"
          placeholder="Introduzca fecha de nacimiento"
        />
      </div>
      <div>
        <legend>Gender</legend>
        <label>
          <input type="radio" name="gender" id="" value={"female"} /> Female
        </label>
        <label>
          <input type="radio" name="gender" id="" value={"male"} /> Male
        </label>
        <label>
          <input type="radio" name="gender" id="" value={"other"} /> Other
        </label>
        <label>
          <input type="radio" name="gender" id="" value={"prefer"} /> Prefer
        </label>
      </div>
      <div>
        <legend>Email</legend>
        <input type="email" name="email" />
      </div>
      <div>
        <legend>Newsletter</legend>
        <input type="checkbox" name="newsletter" />
      </div>
      <div>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}
