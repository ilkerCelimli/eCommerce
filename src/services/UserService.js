import axios from "axios";
import {toast} from "react-toastify";

export class UserService {

    async registerUser(userModel) {
        const request = await axios.post('http://localhost:8080/api/user/registerUser', userModel, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'allow-control-allow-origin': '*'

            },


        })

        if (request.status === 200) {
            return toast("Başarı ile kayıt olundu", {
                autoClose: 2000,

            });
        } else return toast("Kayıt olurken bir hata oluştu", {
                autoClose: 2000,
            }
        )


    }

}