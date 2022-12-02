import './RegisterStyle.scss'
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {AdresServices} from "../../services/AdresServices.js";
import {UserService} from "../../services/UserService.js";
import {toast, useToast} from "react-toastify";

export const Register = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        const userModel = {
            name: data.firstname,
            surname: data.lastname,
            role:   "USER",
            email: data.email,
            phoneNumber: data.phone,
            password: data.password,
            birtday: data.birtday,

            adress:{
                adress:data.address,
                cityId:data.cityId,
            }

        }
        //userModel.address.cityId = data.cityId;
       const userService = new UserService();
        userService.registerUser(userModel)
        console.log(userModel);

   //     history.push("/")
    }
    const [cities, setCities] = useState([]);
    useEffect(() => {
        const adres = new AdresServices();
        adres.getCities().then(res => {setCities(res)})


    }, [])

    return (
        <div className="form_wrapper">
            <div className="form_container">
                <div className="title_container">
                    <h2>Responsive Registration Form</h2>
                </div>
                <div className="row clearfix">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="input_field"><span><i aria-hidden="true"
                                                                  className="fa fa-envelope"></i></span>
                                <input type="email" name="email" placeholder="Email" required
                                       className={"inputs"} {...register("email")} />
                            </div>
                            <div className="input_field"><span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Password"
                                       required {...register("password")}/>
                            </div>
                            <div className="input_field"><span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Re-type Password"
                                       required {...register("rePassword")} />
                            </div>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <div className="input_field"><span><i aria-hidden="true" className="fa fa-user"></i></span>
                                        <input type="text" name="name" placeholder="First Name"
                                               style={{width: '195px'}} {...register("firstname")} />
                                    </div>
                                </div>
                                <div className="col_half">
                                    <div className="input_field"><span><i aria-hidden="true" className="fa fa-user"></i></span>
                                        <input type="text" name="name" placeholder="Last Name" required
                                               style={{width: '195px'}} {...register("lastname")} />
                                    </div>
                                </div>
                            </div>

                            <div className={"input_field"}>
                                <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                <input type="text" name="phone" placeholder="Phone" required
                                        style={{width: '195px'}} {...register("phone")} />
                            </div>

                            <div className="input_field">
                                <label>{"Doğum Gününüz."}</label>
                                <input type={'date'} {...register("birtday")} />

                            </div>

                            <div className={"input_field"}>
                                <label>Tc numaranız</label>
                                <input type={'number'} {...register("tcNo")} />
                            </div>

                            <div className={"input_field select_option"}>
                                <label>Şehir.</label>
                                <select name={"city"} {...register("cityId")} >
                                    {cities.map(city => {
                                        return <option key={city.code} value={city.code}>{city.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className={"input_field"}>
                                <label>Adresiniz</label>
                                <input type={'text'} {...register("address")} />
                            </div>

                            <div className="input_field checkbox_option">
                                <input type="checkbox" id="cb1"/>
                                <label htmlFor="cb1">I agree with terms and conditions</label>

                            </div>
                            <div className="input_field checkbox_option">
                                <input type="checkbox" id="cb2"/>
                                <label htmlFor="cb2">I want to receive the newsletter</label>

                            </div>
                            <input className="button" type="submit" value="Register"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
};