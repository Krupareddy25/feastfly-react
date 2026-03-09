import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import "../index.css";
export default function FoodCard({ item,showLoginToast }) {
  const { addToCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const discountPercent = Math.floor(Math.random() * 20) + 5;
  const originalPrice = Math.round(item.price / (1 - discountPercent / 100));
const handleAdd = (e) => {
  e?.stopPropagation(); 
  if (!currentUser) {
    showLoginToast()
    return;
  }
  addToCart(item);
};
  return (
    <>
      <div className="fm-card-food" onClick={() => setShowModal(true)}>
        <div className="fm-card-img">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="fm-card-body">
          <h4 className="fm-title">{item.name}</h4>
          <p className="fm-desc">{item.description.slice(0, 60)}...</p>

          <div className="fm-price-row">
            <div className="price-section">
              <span className="fm-price">₹{item.price}</span>
              <span className="fm-old-price">₹{originalPrice}</span>
              <span className="fm-discount">({discountPercent}% OFF)</span>
            </div>
            <span
              className={
                item.type === "Veg"
                  ? "badge-veg right-badge"
                  : "badge-nonveg right-badge"
              }
            >
              {item.type}
            </span>
          </div>
          <button
            className="fm-add-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal from opening
              handleAdd();
            }}
          >
            + Add to Cart
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fm-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="fm-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="fm-modal-img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="fm-modal-body">
              <h4 className="fm-title">{item.name}</h4>
              <p className="fm-desc">{item.description}</p>
              <div className="fm-price-row">
                <div className="price-section">
                  <span className="fm-price">₹{item.price}</span>
                  <span className="fm-old-price">₹{originalPrice}</span>
                  <span className="fm-discount">({discountPercent}% OFF)</span>
                </div>
                <span
                  className={
                    item.type === "Veg"
                      ? "badge-veg right-badge"
                      : "badge-nonveg right-badge"
                  }
                >
                  {item.type}
                </span>
              </div>
              <button
                className="fm-add-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAdd();
                }}
              >
                + Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
