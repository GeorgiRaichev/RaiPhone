import { useNavigate, useParams } from "react-router-dom";
import * as phoneService from '../../services/phoneService';
import { useEffect, useState } from "react";
import '../Edit/edit.css'

export default function Edit() {
  const navigate = useNavigate();
  const { phoneId } = useParams();
  const [phone, setPhone] = useState({
    brand: '',
    model: '',
    year: '',
    details: '',
    price: '',
    imageUrl: '',
  });

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const result = await phoneService.getOne(phoneId);
        setPhone(result);
      } catch (error) {
        console.error("Error fetching phone:", error);
      }
    };

    fetchPhone();
  }, [phoneId]);

  const editPhoneSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData);

    try {
      await phoneService.edit(phoneId, values);
      navigate('/shop');
    } catch (error) {
      console.error("Error editing phone:", error);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };

  const onChange = (e) => {
    setPhone((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="reg-bod">
      <div className="reg-container">
        <div className="reg-title">Edit phone</div>
        <div className="content">
          <form action="create" onSubmit={editPhoneSubmitHandler}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Brand</span>
                <input type="text" name="brand" placeholder="Enter brand" value={phone.brand} onChange={onChange} required="" />
              </div>
              <div className="input-box">
                <span className="details">Model</span>
                <input type="text" name="model" placeholder="Enter model" value={phone.model} onChange={onChange} required="" />
              </div>
              <div className="input-box">
                <span className="details">Year</span>
                <input type="text" name="year" placeholder="Enter year" value={phone.year} onChange={onChange} required="" />
              </div>
              <div className="input-box">
                <span className="details">Details</span>
                <input type="text" name="details" placeholder="Enter details" value={phone.details} onChange={onChange} required="" />
              </div>
              <div className="input-box">
                <span className="details">Price/$</span>
                <input type="text" name="price" placeholder="Enter price" value={phone.price} onChange={onChange} required="" />
              </div>
              <div className="input-box">
                <span className="details">Image</span>
                <input type="text" name="imageUrl" placeholder="Upload a photo" value={phone.imageUrl} onChange={onChange} required="" />
              </div>
            </div>
            <div className="reg-button">
              <input type="submit" value="Edit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
