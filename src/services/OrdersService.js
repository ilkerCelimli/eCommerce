import axios from "axios";

export class OrdersService {

    async findAll() {
        const request = await axios.get('http://localhost:8080/sellProducts/findOrders')
        const response = await request.data;
        return response;
    }

}