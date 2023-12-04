export default function PhoneListItem({
    brand,
    model,
    price,
    imageUrl, 
}) {
    return (
        <div className="s-container">
            <div className="product">
                <img src={imageUrl} alt="Product 1" />
                <div className="product-info">
                    <div className="product-title">{`${brand} ${model}`}</div>
                    <div className="product-price">{price}$</div>
                </div>
            </div>           
        </div>
    );
}
