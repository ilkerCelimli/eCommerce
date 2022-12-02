import {useEffect, useState} from "react";
import './ordersStyle.css'
import {calculateRange, sliceData} from "./utils/table-paginition.js";
import DashboardHeader from "./DashboardHeader.jsx";
import {OrdersService} from "../../services/OrdersService.js";
import DoneIcon from '../../assets/icons/done.svg'
import Cancel from '../../assets/icons/cancel.svg'
import RefundedIcon from '../../assets/icons/refunded.svg'
export const Orders = ({item}) => {




    const [search, setSearch] = useState('');
   const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        const service = new OrdersService();
        service.findAll().then(res => {setOrders(res)});
        setPagination(calculateRange(orders, 5));
        setOrders(sliceData(orders, page, 5));
    }, []);

    // Search
/*
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = orders.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };
*/

    // Change Page
    const __handleChangePage = (new_page) => {
        setPage(new_page);
      //  setOrders(sliceData(all_orders, new_page, 5));
    }
    return (
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="New Order" />

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Orders List</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            //value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            /*onChange={e => __handleSearch(e)}*/ />
                    </div>
                </div>

                <table>
                    <thead>
                    <th>ID</th>
                    <th>Sipariş durumu</th>
                    <th>Müşteri</th>
                    <th>Ürün</th>
                    <th>fiyat</th>
                    </thead>

                        <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td><span>{order.id}</span></td>
                                <td>
                                    <div>
                                        {order.status === 'Paid' ?
                                            <img
                                                src={DoneIcon}
                                                alt='paid-icon'
                                                className='dashboard-content-icon' />
                                            : order.status === 'Canceled' ?
                                                <img
                                                    src={Cancel}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                                : order.status === 'Refunded' ?
                                                    <img
                                                        src={RefundedIcon}
                                                        alt='refunded-icon'
                                                        className='dashboard-content-icon' />
                                                    : null}
                                        <span>{order.orderStatus}</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>{order.name} {order.surname}</span>
                                    </div>
                                </td> {/*
                                <td><span>{order.product}</span></td>*!/*/  }
                                <td><span>${order.price}</span></td>
                            </tr>
                        ))}
                        </tbody>
                </table>

        </div>
            </div>

    )
}