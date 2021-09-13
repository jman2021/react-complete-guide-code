import { useParams } from "react-router";

const ProductDetails = () => {
    const params = useParams()


    return (
        <>
            <h1>Product Details Page</h1>
            <h4>{params.productId}</h4>
        </>
        )
  };
  
  export default ProductDetails;