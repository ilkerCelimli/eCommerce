import './paymentStyle.scss'
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {sellProductModel} from "../../models/SellProductModel.js";
import {AdresServices} from "../../services/AdresServices.js";
export const Payment = () => {

    const {register, handleSubmit, errors} = useForm();
    const carts = useSelector(state => state.cart);
    const [cities, setCities] = useState([]);
    const [products,setProducts] = useState([])
    useEffect(() => {
        const adres = new AdresServices();
        adres.getCities().then(res => {setCities(res)})


    }, [])

    const handlePayment = data => {
        console.log(carts)
        console.log(data)
        carts.card.map(item => {
            const product = {
                shopperId: '',
                productId: item.productId,
                userId: '',
                adress : {
                    adress:data.address,
                    title:"Başlık yok",
                    cityId:data.city
                },


            }
            products.push(product)
        })

        console.log(products)
    }



return (
        <div className="wrapper-payment">
            <div className="container-payment">
                <form onSubmit={handleSubmit(handlePayment)}>
                    <h1>
                        <i className="fas fa-shipping-fast"></i>
                        Shipping Details
                    </h1>
                    <div className="name">
                        <div>
                            <label htmlFor="f-name">İsim</label>
                            <input type="text" name="f-name" {...register("name")} />
                        </div>
                        <div>
                            <label htmlFor="l-name">Soyisim</label>
                            <input type="text" name="l-name" {...register("surname")} />
                        </div>
                    </div>

                    <div className="address">
                        <label htmlFor="address">Adres</label>
                        <input type="text" name="address" {...register("address")} />
                    </div>
                    <div className="city">
                        <label htmlFor="city">Şehir</label>
                        <select {...register("city")}>
                            <option>Seçiniz.</option>
                            {
                            cities.map((city,index) => {
                                return <option key={index} value={city.id}>{city.city}</option>
                            })
                            }

                        </select>
                    </div>

                    <h1>
                        <i className="far fa-credit-card"></i> Ödeme bilgileri.
                    </h1>
                    <div className="cc-num">
                        <label htmlFor="card-num">Kredi kartı Numarası</label>
                        <input type="text" name="card-num"/>
                    </div>
                    <div className="cc-info">
                        <div>
                            <label htmlFor="card-num">S.Kullanım Tarihi</label>
                            <input type="text" name="expire"/>
                        </div>
                        <div>
                            <label htmlFor="card-num">CCV</label>
                            <input type="text" name="security"/>
                        </div>
                    </div>
                    <div className="btns">
                        <button type={"submit"}>Satın al</button>
                        <button onClick={() => history.push("/cart")}>Sepete geri dön</button>
                    </div>
                </form>
            </div>


        </div>

    )
}