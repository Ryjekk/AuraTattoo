"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import emailjs from "@emailjs/browser";
import Image from "next/image";
export default function BookingForm({ residents, initialArtist }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      artist: initialArtist || residents[0].slug,
    },
  });

  const submitStatusClasses = {
    loading: "form__submit-status__message--loading",
    success: "form__submit-status__message--success",
    error: "form__submit-status__message--error",
  };

  const [submitStatus, setSubmitStatus] = useState(null);
  const artistKeyMap = {
    malkaink: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY_MALKAINK,
    eerieettt: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY_EERIEETTT,
    sereneneroink:
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY_SERENENEROINK_AND_CONTACT,
    curiousatattoo: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY_CURIOUSATATTOO,
  };
  const form = useRef();
  const onSubmit = ({ artist }) => {
    const key = artistKeyMap[artist];
    setSubmitStatus({
      type: "loading",
      message: "Sending your message...",
    });
    emailjs
      .sendForm(
        //  *   general service id and template id has to be updated for all users in emailJs *  //
        "service",
        "booking",
        form.current,
        {
          publicKey: key,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitStatus({
            type: "success",
            message: "Your message has been sent successfully!",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitStatus({
            type: "error",
            message:
              "There was an error sending your message. Please try again later.",
          });
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" ref={form}>
      <div className="form__input-group">
        <label htmlFor="artist">Tattoo artist *</label>
        <select
          className={`form__input ${errors.artist ? "form__input--error" : ""}`}
          id="artist"
          type="text"
          {...register("artist", { required: "Resident artist is required" })}
          aria-invalid={errors.artist ? "true" : "false"}
          aria-required="true"
        >
          {residents.map((resident) => (
            <option key={resident.id} value={resident.slug}>
              {resident.name}
            </option>
          ))}
        </select>
        <div className="form__error-box">
          {errors.artist && (
            <span className="form__error" role="alert">
              {errors.artist?.message}
            </span>
          )}
        </div>
      </div>
      <div className="form__input-group">
        <label htmlFor="name">Name *</label>
        <input
          className={`form__input ${errors.name ? "form__input--error" : ""}`}
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          aria-invalid={errors.name ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.name && (
            <span className="form__error" role="alert">
              {errors.name?.message}
            </span>
          )}
        </div>
      </div>

      <div className="form__input-group">
        <label htmlFor="email">Email *</label>
        <input
          className={`form__input ${errors.email ? "form__input--error" : ""}`}
          id="email"
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          aria-invalid={errors.email ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.email && (
            <span className="form__error" role="alert">
              {errors.email.type === "required"
                ? "Email is required"
                : "Please enter a valid email address"}
            </span>
          )}
        </div>
      </div>

      <div className="form__input-group">
        <label htmlFor="idea">
          Tell me about your idea *{" "}
          <div className="form__tooltip">
            <Image
              className="form__tooltip__icon"
              src="/ico/info.svg"
              alt="info icon"
              width={12}
              height={12}
            />

            <span className="form__tooltip__text">
              <span>desired style</span>
              <span>reference links</span>
            </span>
          </div>
        </label>
        <textarea
          className={`form__textarea ${
            errors.idea ? "form__textarea--error" : ""
          }`}
          id="idea"
          rows="6"
          {...register("idea", { required: "Tattoo description is required" })}
          aria-invalid={errors.idea ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.idea && (
            <span className="form__error" role="alert">
              {errors.idea?.message}
            </span>
          )}
        </div>
      </div>

      <div className="form__input-group">
        <label htmlFor="size">Approx size in cm *</label>
        <input
          className={`form__input ${errors.size ? "form__input--error" : ""}`}
          id="size"
          type="text"
          {...register("size", { required: "Size is required" })}
          aria-invalid={errors.size ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.size && (
            <span className="form__error" role="alert">
              {errors.size?.message}
            </span>
          )}
        </div>
      </div>

      <div className="form__input-group">
        <label htmlFor="placement">Placement on the body*</label>
        <input
          className={`form__input ${
            errors.placement ? "form__input--error" : ""
          }`}
          id="placement"
          type="text"
          {...register("placement", { required: "Placement is required" })}
          aria-invalid={errors.placement ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.placement && (
            <span className="form__error" role="alert">
              {errors.placement?.message}
            </span>
          )}
        </div>
      </div>
      <div className="form__input-group">
        <label htmlFor="date">{`Desired date(s)*`}</label>
        <input
          className={`form__input ${errors.date ? "form__input--error" : ""}`}
          id="date"
          type="text"
          {...register("date", { required: "Size is required" })}
          aria-invalid={errors.date ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.date && (
            <span className="form__error" role="alert">
              {errors.date?.message}
            </span>
          )}
        </div>
      </div>

      <div className="form__input-group">
        <label htmlFor="howDidYouHear">How did you hear about us?* </label>
        <textarea
          className={`form__textarea ${
            errors.idea ? "form__textarea--error" : ""
          }`}
          id="howDidYouHear"
          rows="2"
          {...register("howDidYouHear", {
            required: "We really want to hear how you found us.",
          })}
          aria-invalid={errors.howDidYouHear ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.howDidYouHear && (
            <span className="form__error" role="alert">
              {errors.howDidYouHear?.message}
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className={`btn btn__umber btn__submit ${
          submitStatus?.type === "loading" ? "btn__submit-loading" : ""
        }`}
      >
        {submitStatus?.type === "loading" ? (
          <PulseLoader color="#fff" size={8} />
        ) : (
          "Submit"
        )}
      </button>
      <div className="form__submit-status">
        {submitStatus && (
          <span
            className={`form__submit-status__message 
            ${
              submitStatusClasses[submitStatus.type] ||
              "form__submit-status__message--error"
            }
              
              `}
          >
            {submitStatus.message}
          </span>
        )}
      </div>
    </form>
  );
}
