import React from "react";
import { useForm } from "react-hook-form";

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSub = (bodyData) => {
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
        <button className="btn btn-info mt-3">Order</button>
      </form>
    </div>
  );
}
