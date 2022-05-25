import React from "react";



export default function UserForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
return (
  <form className="form container" onSubmit={onSubmit}>
    <div className="errors">
      {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
      <div>{errors.firstName}</div>
      <div>{errors.Name}</div>
      <div>{errors.email}</div>
    </div>
    <label>
      First Name&nbsp;
      <input
        value={values.firstName}
        onChange={onChange}
        name="firstName"
        type="text"
      />
    </label>
    <label>
      Last Name&nbsp;
      <input
        value={values.lastName}
        onChange={onChange}
        name="lastName"
        type="text"
      />
    </label>
    <label>
      Email
      <input
        value={values.email}
        onChange={onChange}
        name="email"
        type="email"
      />
    </label>

    <div className="submit">
      <label>
        I have Read the Terms of Service
        <input
          type="checkbox"
          name="service"
          checked={values.service}
          onChange={onChange}
        />
      </label>
      <button disabled={disabled}>submit</button>
    </div>
  </form>
);

}