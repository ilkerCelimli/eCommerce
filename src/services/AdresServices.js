import axios from 'axios'
import {toast} from "react-toastify";

export class AdresServices {


    async getCities() {

        const request = await axios.get('http://localhost:8080/api/cities/findCities', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'allow-control-allow-origin': '*'
            }
        })
        const response = await request.data
            return response;


    }
}
