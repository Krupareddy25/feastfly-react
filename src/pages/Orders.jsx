import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function Orders() {
  const { orders } = useContext(CartContext);
  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 fw-bold text-center" style={{fontFamily:"fangsong"}}>Your Orders</h2>
      {orders.length === 0 ? (
        <div className="alert alert-warning">
          No orders placed yet.
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="card mb-4 shadow-sm border-0"
            style={{ borderRadius: "12px" }}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="fw-bold mb-1">Order ID: {order.id}</h6>
                  <strong>Date:</strong> <small className="text-muted">{ order.date}</small>
                </div>
                <span className="badge bg-success py-2 px-4 align-self-start">
                  {order.status}
                </span>
              </div>
              <hr />
              <div className="mb-3">
                <h6 className="fw-bold">Delivery Details</h6>
                <p className="mb-1">
                  <strong>Name:</strong> {order.customer?.name}
                </p>
                <p className="mb-1">
                  <strong>Phone:</strong> {order.customer?.phone}
                </p>
                <p className="mb-1">
                  <strong>Address:</strong> {order.customer?.address},{" "}
                  {order.customer?.city} - {order.customer?.pincode}
                </p>
              </div>
              <hr />
              <h6 className="fw-bold mb-3">Items</h6>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center mb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width="60"
                    height="60"
                    style={{
                      borderRadius: "8px",
                      objectFit: "cover",
                      marginRight: "12px"
                    }}
                  />
                  <div className="flex-grow-1">
                    <div className="fw-semibold">{item.name}</div>
                    <small className="text-muted">
                      Qty: {item.qty}
                    </small>
                  </div>
                  <div className="fw-semibold">
                    ₹{item.price * item.qty}
                  </div>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total Amount</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}