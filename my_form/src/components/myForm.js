import React from "react";
import { useForm } from "react-hook-form";

export default function MyForm() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSub = (bodyData) => {
    delete bodyData.email2;
    console.log(bodyData);
  };
  return (
    <div className="container">
      <h1>Order form</h1>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6 shadow p-2">
        <label>Name:</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          type="text"
          className="form-control"
        />
        {errors.name && (
          <div className="text-danger d-block">
            Enter valid name - minimun 2 chars
          </div>
        )}
        <label>Phone:</label>
        <input
          {...register("phone", { required: true, minLength: 6 })}
          type="tel"
          className="form-control"
        />
        {errors.phone && (
          <div className="text-danger d-block">
            Enter valid phone - minimun 6 chars
          </div>
        )}

        <label>Email:</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          type="text"
          className="form-control"
        />
        {errors.email && (
          <div className="text-danger d-block">Enter valid email</div>
        )}
        <label>Email repeat:</label>
        <input
          {...register("email2", {
            required: true,
            validate: (value) => value === getValues("email"),
          })}
          type="text"
          className="form-control"
        />
        {errors.email2 && (
          <div className="text-danger d-block">Email not equal</div>
        )}
        <label>Select color: </label>
        <select
          {...register("colors", { required: true })}
          className="form-select"
        >
          <option value="">Choose color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        {errors.colors && (
          <div className="text-danger d-block">Choose color please</div>
        )}
        <button className="btn btn-info mt-3">Order</button>
      </form>
    </div>
  );
}
