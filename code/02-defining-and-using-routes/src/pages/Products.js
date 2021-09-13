import { Link } from "react-router-dom";

const Products = () => {
  return (
  <div>
    <h1>The Products Page</h1>
    <ul>
      <li>
        <Link to='/products/Book'>Book</Link>              
      </li>
      <li>
        <Link to='/products/Hammer'>Hammer</Link>
      </li>
      <li>
        <Link to='/products/Sickle'>Sickle</Link>
      </li>
    </ul>
  </div>
  
  )
};

export default Products;