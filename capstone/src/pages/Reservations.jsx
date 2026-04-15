import {useForm} from "react-hook-form";
import {object, string, number, date, boolean} from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Reservations = () => {
    const formSchema = object({
        full_name: string()
            .max(20, "Maximum of 20 characters.")
            .required("This field is required."),

        email: string()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format.")
            .required("This field is required."),

        party_size: number()
            .typeError("Must be a number.")
            .required("This field is required.")
            .min(1, "1 person required at minimum.")
            .max(8, "Maximum party size of 8."),

        date: date()
            .required("This field is required."),

        time: string()
            .required("This field is required."),

        dietary_restrictions: string()
            .optional()
            .max(30, "Cannot exceed 30 characters."),

        seating: string(),

        newsletter: string()
            .optional()

    })

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors}

    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const handleChange = (event) => {
        console.log(`${event.target.name}: ${event.target.value}`);
        setValue(event.target.name, event.target.value);
    }


    return (
        <>
            <h1>This is Reservations</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Full Name:
                    <input
                        type="text"
                        {...register("full_name")}
                        id={"full_name"}
                        onChange={handleChange}
                    />
                    {errors.full_name && <span> {errors.full_name.message} </span>}

                </label>
                <br/>
                <label htmlFor="">Email:
                    <input
                        type="text"
                        {...register("email")}
                        id={"email"}
                        onChange={handleChange}
                    />
                    {errors.email && <span> {errors.email.message} </span>}

                </label>
                <br/>
                <label htmlFor="">Party Size:
                    <input
                        type="number"
                        {...register("party_size")}
                        id={"party_size"}
                        onChange={handleChange}
                    />
                    {errors.party_size && <span> {errors.party_size.message} </span>}

                </label>
                <br/>
                <label htmlFor="">Date:
                    <input
                        type="date"
                        {...register("date")}
                        id={""}
                        onChange={handleChange}
                    />
                    {errors.date && <span> {errors.date.message} </span>}

                </label>
                <br/>
                <label htmlFor="">Time:
                    <input
                        type="time"
                        {...register("time")}
                        id={"time"}
                        onChange={handleChange}
                    />
                    {errors.time && <span> {errors.time.message} </span>}

                </label>
                <br/>
                <label htmlFor="">Dietary Restrictions:
                    <input
                        type="textbox"
                        {...register("dietary_restrictions")}
                        id={"dietary_restrictions"}
                        onChange={handleChange}
                    />
                    {errors.dietary_restrictions && <span> {errors.dietary_restrictions.message} </span>}

                </label>
                <br/>
                <fieldset>
                    <legend>Seating Preference:</legend>

                    <label>
                        <input type="radio" value="bar" defaultChecked={true} {...register("seating")} />
                        Bar
                    </label>

                    <label>
                        <input type="radio" value="patio" {...register("seating")} />
                        Patio
                    </label>

                    <label>
                        <input type="radio" value="dining_room" {...register("seating")} />
                        Dining Room
                    </label>
                </fieldset>

                {errors.seating && <span>{errors.seating.message}</span>}

                {errors.seating && <span>{errors.seating.message}</span>}
                <br/>
                <fieldset>
                    <legend>Subscribe to Our Newsletter:</legend>

                    <label>
                        <input
                            type="checkbox"
                            value="yes"
                            {...register("newsletter")}
                        />
                        Yes
                    </label>

                    {errors.newsletter && (
                        <span>{errors.newsletter.message}</span>
                    )}
                </fieldset>
                <br/>
                <button type={"submit"}>Submit</button>
                <button type={"reset"}>Reset</button>
            </form>
        </>
    )
}

export default Reservations;