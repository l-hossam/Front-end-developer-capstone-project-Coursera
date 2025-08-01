import "../components/styles/reservations.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schema using Yup
const schema = yup.object({
  name: yup.string().required("Full name is a required field!"),
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is a required field!"),
  telephone: yup
    .string()
    .required("Telephone is a required field!")
    .matches(
      /^(\+20\s?|0)?1[0125][0-9]{8}$/,
      "Phone number must be a valid Egyptian number (e.g., 01012345678 or +20 1012345678)"
    ),
  guests: yup
    .number()
    .typeError("Guests must be a number")
    .min(1, "There must be at least 1 guest!")
    .required("Please specify number of guests per table!"),
  date: yup
    .date()
    .typeError("Please enter a valid date and time")
    .required("Please select date and time!"),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Reservation submitted:", data);
    alert("Reservation successfully submitted!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name")}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="text@email.com"
            {...register("email")}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="field">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            id="telephone"
            placeholder="01012345678"
            {...register("telephone")}
          />
          {errors.telephone && <p className="error">{errors.telephone.message}</p>}
        </div>

        <div className="field occasion">
          <label htmlFor="occasion">Occasion (optional)</label>
          <select id="occasion" {...register("occasion")}>
            <option value="">Select occasion</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            placeholder="2"
            min="1"
            {...register("guests")}
          />
          {errors.guests && <p className="error">{errors.guests.message}</p>}
        </div>

        <div className="field">
          <label htmlFor="date">Date & Time</label>
          <input
            type="datetime-local"
            id="date"
            {...register("date")}
          />
          {errors.date && <p className="error">{errors.date.message}</p>}
        </div>

        <button className="reserve-btn" type="submit">
          Reserve
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
