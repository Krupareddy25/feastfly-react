import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (cart.length === 0) {
    return (
      <main
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 30 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h2 className="">
            <italic style={{ fontFamily: "fantasy" }}>
              YOUR CART IS EMPTY
            </italic>
          </h2>
          <p className="text-muted p-2">
            Looks like you haven't added anything to your cart yet..!
          </p>
          <Link to="/menu" className="btn btn-warning px-4 py-2 mt-3">
            Browse Delicious Menu
          </Link>
        </div>
      </main>
    );
  }
  return (
    <>
      {" "}
      <style>{`
      .cart-item-card {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 12px;
      }
      .cart-item-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
      }
      .qty-box button {
        width: 30px;
        height: 30px;
        border: 1px solid #ddd;
        background: #fff;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
      }
      .qty-box span {
        min-width: 20px;
        text-align: center;
      }
      .delete-icon {
        cursor: pointer;
        font-size: 16px;
      }
      .delete-icon:hover {
        color: #dc3545;
      }
    `}</style>
      <div className="container py-5">
        <div className="d-flex align-items-center gap-4 mb-4">
          <Link to="/menu" className="text-decoration-none">
            <button className="btn btn-warning d-flex align-items-center gap-2 px-3">
              <i className="bi bi-arrow-left"></i>
              Continue Shopping
            </button>
          </Link>
          <div>
            <h1
              className="fw-bold mb-1"
              style={{ fontSize: "26px", fontFamily: "system-ui" }}
            >
              YOUR CART
            </h1>
            <p className="text-muted mb-0">
              {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div key={item.id} className="cart-item-card mb-3 p-3">
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                    />
                    <div>
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <p className="text-warning fw-semibold mb-1">
                        ₹{item.price}
                      </p>
                      <div className="d-flex align-items-center gap-2 qty-box">
                        <button onClick={() => decreaseQty(item.id)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => increaseQty(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="text-end d-flex flex-column justify-content-between">
                    <i
                      className="bi bi-trash text-danger delete-icon"
                      onClick={() => removeItem(item.id)}
                    ></i>
                    <h6 className="fw-bold mt-4">₹{item.price * item.qty}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4">
            <div
              className="card shadow-sm border-0 p-4"
              style={{ borderRadius: "12px" }}
            >
              <h5 className="fw-bold mb-3">ORDER SUMMARY</h5>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-2"
                >
                  <span className="text-muted">
                    {item.qty} × {item.name}
                  </span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
              <div className="d-flex justify-content-between text-muted small">
                <span>Delivery Charges</span>
                <span>₹0</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total Payable</span>
                <span>₹{total}</span>
              </div>
              <Link
                to="/checkout"
                className="btn btn-warning w-100 mt-4"
                style={{ borderRadius: "8px" }}
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
