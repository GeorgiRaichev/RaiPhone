import { Link } from 'react-router-dom';
export default function PhoneListItem({
    _id,
    brand,
    model,
    price,
    imageUrl,
}) {
    return (

        <div className="product">

            <Link to={`/phones/${_id}`}>
                <img src={imageUrl} alt="Product 1" />
                <div className="product-info">
                    <div className="product-title">{`${brand} ${model}`}</div>
                    <div className="product-price">{price}$</div>

                </div>
            </Link>
            <button className='EditBtn'>Edit</button>
            <button className='DelBtn'>Delete</button>
        </div>

    );
}
