export default function Add() {
  return (
    <div className="reg-bod">
    <div className="reg-container">
      <div className="reg-title">Add phone</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Brand</span>
              <input type="text" placeholder="Enter brand" required="" />
            </div>
            <div className="input-box">
              <span className="details">Model</span>
              <input type="text" placeholder="Enter model" required="" />
            </div>
            <div className="input-box">
              <span className="details">Year</span>
              <input type="text" placeholder="Enter year" required="" />
            </div>
            <div className="input-box">
              <span className="details">Details</span>
              <input type="text" placeholder="Enter details" required="" />
            </div>
            <div className="input-box">
              <span className="details">Price/$</span>
              <input type="text" placeholder="Enter price" required="" />
            </div>
            <div className="input-box">
              <span className="details">Image</span>
              <input type="text" placeholder="Upload a photo" required="" />
            </div>
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