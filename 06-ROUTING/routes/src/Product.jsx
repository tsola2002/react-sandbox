import { useParams } from "react-router-dom";

export function Product(){
    const { id } = useParams();

    return <h2>Product ID: {id}</h2>;
}