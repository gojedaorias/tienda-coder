import React from 'react'
import './promises.scss'

const Promises =()=> {



const items =[
  {
      nombre: 'Zapatilla Azul',
      precio: '$100',
      imagen: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/297733/zapatilla-azul.jpg'
  },
  {
      nombre: 'Zapatilla Roja',
      precio: '$100',
      imagen: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/297733/zapatilla-roja.jpg'
  }
]




        const task = new Promise((resolve, reject) => {
            let status = 200
            if(status === 200){ 
                resolve(items)
            }else{
                reject(status)
            }   
        })

        task.then((resp) => {
            console.log(resp);

        }).catch((error) => {
            console.log(error);
        });

        console.log(task);
    return (
        <div>
            <h1>Promises</h1>
        </div>
    )
}

export default Promises
