import * as phoneService from '../../services/phoneService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../Add/add.css';

export default function Add() {
  const navigate = useNavigate();
  const [mistake, setMistake] = useState(null);
  const createPhoneSubmitHandler = async (e) => {
    e.preventDefault();
    const phoneData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const year = parseInt(phoneData.year);
      const price = parseFloat(phoneData.price);

      if (isNaN(year) || isNaN(price) || year < 0 || price < 0) {
        setMistake('Incorect data!');
        
        return;
      }
      else {
        setMistake(null);
        await phoneService.create(phoneData);
        navigate('/shop');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="reg-bod">
      <div className="reg-container">
        <div className="reg-title">Add phone</div>
        <div className="content">
          <form action="create" onSubmit={createPhoneSubmitHandler}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Brand</span>
                <input type="text" name="brand" placeholder="Enter brand" required />
              </div>
              <div className="input-box">
                <span className="details">Model</span>
                <input type="text" name="model" placeholder="Enter model" required/>
              </div>
              <div className="input-box">
                <span className="details">Year</span>
                <input type="text" name="year" placeholder="Enter year" required />
              </div>
              <div className="input-box">
                <span className="details">Details</span>
                <input type="text" name="details" placeholder="Enter details" required />
              </div>
              <div className="input-box">
                <span className="details">Price/$</span>
                <input type="text" name="price" placeholder="Enter price" required />
              </div>
              <div className="input-box">
                <span className="details">Image</span>
                <input type="text" name="imageUrl" placeholder="Upload a photo" required />
              </div>
            </div>
            <div>
              {mistake && (<p className='err'>{mistake}</p>)}
            </div>
            <div className="reg-button">
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
