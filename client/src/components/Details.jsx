import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as phoneService from '../services/phoneService';
import * as commentService from '../services/commentService'

export default function Details() {
    const [phone, setPhone] = useState({});
    const [comments, setComments] = useState([]);
    const { phoneId } = useParams();

    useEffect(() => {
        phoneService.getOne(phoneId)
            .then(setPhone)
        commentService.getAll()
            .then(setComments);
    }, [phoneId]);


    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            phoneId,
            formData.get('username'),
            formData.get('comment')
        );
        setComments(state => [...state, newComment]);
    }

    return (
        <>
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img
                                    className="image1 "
                                    src={phone.imageUrl}
                                    alt="Card image cap"
                                    id="product-detail"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2">{phone.model}</h1>
                                    <p className="h3 py-2">{phone.price}$</p>

                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Brand: {phone.brand}</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted">
                                                <strong></strong>
                                            </p>
                                        </li>
                                    </ul>
                                    <h6>Details: {phone.details}</h6>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Avaliable Color :</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted">
                                                <strong>White / Black</strong>
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                        </div>
                                        <div className="col d-grid">
                                            <button type="submit" className="btn" id='favou' name="submit" value="buy">Favourites: 0</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <b className='com'>Comments</b>
                    <div className='Comments-container'>
                        {comments.map(comment => (
                            <div key={comment._id} className='comment'>
                                <p>{comment.username}: {comment.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className='Add-com'>
                        <form onSubmit={addCommentHandler}>
                            <div className="add-commentText">
                                <label className='lbladd'>Add new comment</label><br />
                                <input type="text" name='username' placeholder='username' />
                                <textarea name="comment" id="comment" cols="30" rows="10" className='input-add'></textarea>
                            </div>
                            <div className="add-commentBtn">
                                <input type="submit" className="btn" id='addbtnn' value="Add comment" />
                            </div>
                        </form>
                    </div>
                </div>

            </section>

        </>
    )



}