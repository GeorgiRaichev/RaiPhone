import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/authContexts';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import * as phoneService from '../../services/phoneService';
import * as commentService from '../../services/commentService';
import { Link } from 'react-router-dom';
import '../Details/details.css'

export default function Details() {
    const { username, userId } = useContext(AuthContext);
    const [phone, setPhone] = useState({});
    const [comments, setComments] = useState([]);
    const { phoneId } = useParams();
    const navigate = useNavigate();
    const {
        isAuthenticated
    } = useContext(AuthContext);
    useEffect(() => {
        phoneService.getOne(phoneId)
            .then(setPhone);
        commentService.getAll(phoneId)
            .then(setComments);
    }, [phoneId]);


    const deleteButtonClickHandler = async () => {
        try {
            const hasConfirmed = confirm(`Are you sure you want to delete ${`${phone.brand} ${phone.model}`}`);
            if (hasConfirmed) {
                await phoneService.remove(phoneId);
                navigate('/shop');
            }
        } catch (error) {
            console.log(error);
        }


    }
    const buyButtonClickHandler = async () => {
        try {
            if (isAuthenticated) {
                const hasConfirmed = confirm(`Are you sure you want to buy ${`${phone.brand} ${phone.model}`}`);
                if (hasConfirmed) {
                    await phoneService.dali(phoneId, true);
                    navigate('/shop');
                }
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }



    }

    const addCommentHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);

        const newComment = await commentService.create(
            phoneId,
            formData.get('comment')
        );
        setComments(state => [...state, { ...newComment, owner: { username } }]);
        e.target.reset();
        } catch (error) {
            console.log(error);
        }
        
    };
    return (
        <>
            <section className="bg-light">
                <div className="container pb-5">
                    <div className='btnsEdit'>
                        {userId === phone._ownerId && (
                            <>
                                <Link to={`/phones/${phoneId}/edit`} className="btn" id='edit'>Edit</Link>
                                <button className="btn" id='delete' onClick={deleteButtonClickHandler}>Delete</button>
                            </>
                        )}
                    </div>
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
                                    <h1 className="h2">{phone.brand} {phone.model}</h1>
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
                                            <h6>Available Color :</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted">
                                                <strong>White / Black</strong>
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <button className="btn btn-success btn-lg" id='buyy' onClick={buyButtonClickHandler}>Buy</button>
                                        </div>
                                        <div className="col d-grid">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <b className='com'>Comments</b>
                    <div className='Comments-container'>
                        {comments.map(({ _id, text, owner: { username } }) => (
                            <div key={_id} className='comment'>
                                <p>{username}: {text}</p>
                            </div>
                        ))}
                        {comments.length === 0 && (
                            <p className="no-articles">No comments yet</p>
                        )}
                    </div>
                    {isAuthenticated && (<div className='Add-com'>
                        <form onSubmit={addCommentHandler}>
                            <div className="add-commentText">
                                <label className='lbladd'>Add new comment</label><br />
                                <textarea name="comment" id="comment" cols="30" rows="10" className='input-add'></textarea>
                            </div>
                            <div className="add-commentBtn">
                                <input type="submit" className="btn" id='addbtnn' value="Add comment" />
                            </div>
                        </form>
                    </div>)}

                </div>
            </section>
        </>
    );
}
