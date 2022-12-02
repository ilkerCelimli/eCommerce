import './userProfileStyle.scss'
import {useForm} from "react-hook-form";

export const UserProfile = () => {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className={"local-bootstrap"}>
            <div className="container-xl px-4 mt-4">
                {/*  <!-- Account page navigation--> */}

                <div className="row">

                    <div className="col-xl-8">
                        {/*    <!-- Account details card--> */}
                        <div className="card mb-4">
                            <div className="card-header">Account Details</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/*  <!-- Form Group (username)-->*/}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputUsername">Username (how your name
                                            will appear to other users on the site)</label>
                                        <input className="form-control" id="inputUsername" type="text"
                                               placeholder="Enter your username" {...register("username")}/>
                                    </div>
                                    {/* <!-- Form Row-->*/}
                                    <div className="row gx-3 mb-3">
                                        { /* !--Form Group (first name)--}*/}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                            <input className="form-control" id="inputFirstName" type="text"
                                                   placeholder="Enter your first name" {...register("name")}/>
                                        </div>
                                        {/*!--Form Group (last name)--*/}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                            <input className="form-control" id="inputLastName" type="text"
                                                   placeholder="Enter your last name" {...register("surname")} />
                                        </div>
                                    </div>
                                    {/* <!-- Form Row        --> */}
                                    <div className="row gx-3 mb-3">
                                    </div>
                                    {/* <!-- Form Group (email address)-->*/}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                        <input className="form-control" id="inputEmailAddress" type="email"
                                               placeholder="Enter your email address" {...register("email")} />
                                    </div>
                                    {/*  <!-- Form Row-->*/}
                                    <div className="row gx-3 mb-3">
                                        {/* <!-- Form Group (phone number)--> */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                            <input className="form-control" id="inputPhone" type="tel"
                                                   placeholder="Enter your phone number" {...register("phoneNumber")} />
                                        </div>
                                        {/* <!-- Form Group (birthday)-->*/}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                            <input className="form-control" id="inputBirthday" type="text"
                                                   name="birthday" placeholder="Enter your birthday"
                                                   {...register("birtday")} />
                                        </div>
                                    </div>
                                    {/* <!-- Save changes button--> */}
                                    <button className="btn btn-primary" type="submit">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}