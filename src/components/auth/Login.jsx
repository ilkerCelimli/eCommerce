import './loginStyle.css';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/Auth/AuthReducers.js";
import {useHistory} from 'react-router-dom'
export const Login = () => {


    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const auth = useSelector(state => state.auth);
    const reducer = useDispatch();
    const handleLogin = (data) => {
        console.log(data);
        reducer(login(data));
        history.push("/");
    }


    return(
        <div className="container-2">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleSubmit(handleLogin)}>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="User name / Email" {...register("email")} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" {...register("password")}/>
                        </div>
                        <button className="button login__submit" type={"submit"}>
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>

                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    )
}