"use client";
import React from "react";
import { useForm, getF } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='contact__form'>
      <div className='contact__form__names'>
        <div className='contact__form__input-group'>
          <label htmlFor='firstName'>
            First Name <span>*</span>
          </label>
          <input
            className='contact__form__input'
            id='firstName'
            type='text'
            {...register("firstName", { required: "First Name is required" })}
            aria-invalid={errors.firstName ? "true" : "false"}
            aria-required='true'
          />
          <div className='contact__form__error-box'>
            {errors.firstName && (
              <span className='contact__form__error' role='alert'>
                {errors.firstName?.message}
              </span>
            )}
          </div>
        </div>

        <div className='contact__form__input-group'>
          <label htmlFor='lastName'>
            Last Name <span>*</span>
          </label>
          <input
            className='contact__form__input'
            id='lastName'
            type='text'
            {...register("lastName", { required: "Last Name is required" })}
            aria-invalid={errors.lastName ? "true" : "false"}
            aria-required='true'
          />
          <div className='contact__form__error-box'>
            {errors.lastName && (
              <span className='contact__form__error' role='alert'>
                {errors.lastName?.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='contact__form__input-group'>
        <label htmlFor='email'>
          Email <span>*</span>
        </label>
        <input
          className='contact__form__input'
          id='email'
          type='email'
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          aria-invalid={errors.email ? "true" : "false"}
          aria-required='true'
        />
        <div className='contact__form__error-box'>
          {errors.email && (
            <span className='contact__form__error' role='alert'>
              {errors.email.type === "required"
                ? "Email is required"
                : "Please enter a valid email address"}
            </span>
          )}
        </div>
      </div>

      <div className='contact__form__input-group'>
        <label htmlFor='subject'>
          Subject <span>*</span>
        </label>
        <input
          className='contact__form__input'
          id='subject'
          type='text'
          {...register("subject", { required: "Subject is required" })}
          aria-invalid={errors.subject ? "true" : "false"}
          aria-required='true'
        />
        <div className='contact__form__error-box'>
          {errors.subject && (
            <span className='contact__form__error' role='alert'>
              {errors.subject?.message}
            </span>
          )}
        </div>
      </div>

      <div className='contact__form__input-group'>
        <label htmlFor='message'>
          Message <span>*</span>
        </label>
        <textarea
          className='contact__form__textarea'
          id='message'
          rows='6'
          {...register("message", { required: "Message is required" })}
          aria-invalid={errors.message ? "true" : "false"}
          aria-required='true'
        />
        <div className='contact__form__error-box'>
          {errors.message && (
            <span className='contact__form__error' role='alert'>
              {errors.message?.message}
            </span>
          )}
        </div>
      </div>

      <button type='submit' className='btn btn__secondary'>
        Submit
      </button>
    </form>
  );
}
