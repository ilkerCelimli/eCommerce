import DashboardHeader from "./DashboardHeader.jsx";
import './ordersStyle.css'


export const Products = () => {

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
                    <th>Ürün Adı</th>
                    <th>Sipariş durumu</th>
                    <th>Müşteri</th>
                    <th>Ürün</th>
                    <th>fiyat</th>
                    </thead>

                    {/*   {orders.length !== 0 ?
                        <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td><span>{order.id}</span></td>
                                <td><span>{order.date}</span></td>
                                <td>
                                    <div>
                                        {order.status === 'Paid' ?
                                            <img
                                                src={DoneIcon}
                                                alt='paid-icon'
                                                className='dashboard-content-icon' />
                                            : order.status === 'Canceled' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                                : order.status === 'Refunded' ?
                                                    <img
                                                        src={RefundedIcon}
                                                        alt='refunded-icon'
                                                        className='dashboard-content-icon' />
                                                    : null}
                                        <span>{order.status}</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <img
                                            src={order.avatar}
                                            className='dashboard-content-avatar'
                                            alt={order.first_name + ' ' +order.last_name} />
                                        <span>{order.first_name} {order.last_name}</span>
                                    </div>
                                </td>
                                <td><span>{order.product}</span></td>
                                <td><span>${order.price}</span></td>
                            </tr>
                        ))}
                        </tbody>
                        : null}*/}
                </table>

            </div>
        </div>

    )
}