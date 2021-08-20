import React, { useContext, useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { getFirestore } from '../../services/getFirebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './CartForm.scss'



const CartForm = () => {
  const { register } = useForm();
  const { cartList, setCartList, cartPrice } = useContext(CartContext);
  const [buyer, setBuyer] = useState({});
  const [order, setOrder] = useState({ buyer, item: cartList, date: firebase.firestore.Timestamp.fromDate(new Date()), total: cartPrice });
  const [orderCode, setOrderCode] = useState('');
  const [clickSend, setClickSend] = useState(false);
  const [validate, setValidate] = useState(false);

  
  useEffect(() => {
    if (buyer.email === buyer.emailVerification && Boolean(buyer.emailVerification) === true){
      setValidate(true);
    }else{
      setValidate(false);
    }
  }, [buyer.email, buyer.emailVerification]);

  

  const handlerChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value});
    setOrder({ buyer, item: cartList });
  };



  const handlerSubmit = (e) => {
    e.preventDefault();
    setOrder({ buyer, item: cartList, date: firebase.firestore.Timestamp.fromDate(new Date()) });
    const db = getFirestore();
    db.collection('orders').add(order)
      .then(docRef => {
        setOrderCode(docRef.id)
      })
    setClickSend(true);
    
  }

  const returnHome = () => {
    setOrder({});
    setCartList([]);
    setClickSend(false);
  }
  

  return (

    <>
      {clickSend !== true && order.size !== 0 ?
        (<div className="form">
          <h1 className="formtitle">Ingresa tus Datos</h1>
          <form className="cartform" onSubmit={handlerSubmit} onChange={handlerChange}>
            <label htmlFor="firstName" className="cartform__label">Nombre</label>
            <input placeholder="Ej: Fulanito" className="cartform__input" {...register("firstName", { required: true, maxLength: 20 })} />
            <label htmlFor="lastName" className="cartform__label">Apellido</label>
            <input placeholder="Ej: Peralta" className="cartform__input" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <label htmlFor="lastName" className="cartform__label">Telefono</label>
            <input placeholder="Ej: 912345678" className="cartform__input" type="number" {...register("Telefono", { required: true, minLength: 9, maxLength: 9 })} />
            <label htmlFor="email" className="cartform__label">E-mail</label>
            <input placeholder="Ej: fulanito@peralta.com" className={`cartform__input ${validate  === false && Boolean(buyer.emailVerification) === true ? 'cartform__input--error':''}`} type="email" {...register("email", {pattern: /^\S+@\S+$/i, required: true, maxLength: 100 })} />
            <label htmlFor="email Verification" className="cartform__label">Verifica E-mail</label>
            <input placeholder="Ej: fulanito@peralta.com" className={`cartform__input ${validate  === false && Boolean(buyer.emailVerification) === true ? 'cartform__input--error':''}`} type="email" {...register("emailVerification", {pattern: /^\S+@\S+$/i, required: true, maxLength: 100 })} />
            <p className="cartform__emailerror">{validate  === false && Boolean(buyer.emailVerification) === true ? 'Tu correo no corresponde con el anterior': ''}</p>
            <input className="cartform__submit" type="submit" disabled={ validate === true ? false:true} />
          </form>
        </div>
        ) :

        (

          <div className="form">
            <h1 className="formtitle">Este el código de tu Orden</h1>
            <h2 className="formOrder">{orderCode}</h2>
            <Link onClick={returnHome} to="/" className="form__link" >Volver al Inicio</Link>
          </div>)}
    </>

  );
}

export default CartForm
