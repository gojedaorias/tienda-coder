import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./ItemDetailContainer.scss";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

function ItemDetalContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        let db = getFirestore();
        let itemCollection = db.collection("items");
        let query = id ? itemCollection.doc(id) : itemCollection;
        query.get()
            .then((resp) => {
                resp.size === 0
                    ? console.log("no tenemos resultados")
                    : setItem({ id: resp.id, ...resp.data() });
            });
    }, [id]);

    return (
        <div>
            <ItemDetail item={item} />
            <ItemListContainer/>
        </div>
    );
}

export default ItemDetalContainer;
