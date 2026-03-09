import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import qr from "../assets/ScannerQR.jpeg";
export default function Checkout() {
  const { cart, clearCart, saveOrder } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9][0-9]{9}$/;
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  const isFormValid =
    name.trim() !== "" &&
    emailRegex.test(email) &&
    phoneRegex.test(phone) &&
    address1.trim() !== "" &&
    city.trim() !== "" &&
    pincodeRegex.test(pincode);
  const handleSaveAddress = () => {
    if (!name || !email || !phone || !address1 || !city || !pincode) {
      setPopupMessage("Please fill all required fields");
      setTimeout(() => setPopupMessage(""), 3000);
      return;
    }
    if (!emailRegex.test(email)) {
      setPopupMessage("Enter a valid email (example@gmail.com)");
      setTimeout(() => setPopupMessage(""), 3000);
      return;
    }
    if (!phoneRegex.test(phone)) {
      setPopupMessage("Phone must be 10 digits and start with 6-9");
      setTimeout(() => setPopupMessage(""), 3000);
      return;
    }
    if (!pincodeRegex.test(pincode)) {
      setPopupMessage("Pincode must be 6 digits and cannot start with 0");
      setTimeout(() => setPopupMessage(""), 3000);
      return;
    }
    setAddressSaved(true);
    setPopupMessage("Address saved successfully.!!");
    setTimeout(() => setPopupMessage(""), 3000);
  };
  const handlePayment = () => {
    const order = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleDateString("en-GB"),
      status: "Paid",
      customer: { name, email, phone, address: address1, city, pincode },
    };
    saveOrder(order);
    setTimeout(() => {
      clearCart();
      navigate("/orders");
    }, 200);
  };
  return (
    <div className="container py-4 ms-auto" style={{ maxWidth: "1100px" }}>
      {popupMessage && <div className="custom-popup">{popupMessage}</div>}
      <div className="d-flex align-items-center mb-4">
        <Link to="/cart" className="btn btn-warning me-4">
          ← Back to Cart
        </Link>
        <h4
          style={{
            fontFamily: "fantasy",
            letterSpacing: "1px",
            fontWeight: 400,
          }}
        >
          CHECKOUT
        </h4>
      </div>
      <div className="row g-6">
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header fw-bold">CONTACT INFORMATION</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="Enter a valid email address (example@gmail.com)"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter phone number"
                  value={phone}
                  pattern="^[6-9][0-9]{9}$"
                  title="Phone number must be 10 digits and start with 6-9"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header fw-bold">DELIVERY ADDRESS</div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Address Line 1 *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street address"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment / Landmark"
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">City *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Pincode *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={pincode}
                    pattern="^[1-9][0-9]{5}$"
                    title="Pincode must be 6 digits and cannot start with 0"
                    onChange={(e) => setPincode(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="text-end">
                <button
                  className="btn btn-warning fw-semibold px-4"
                  onClick={handleSaveAddress}
                >
                  Save & Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE ORDER SUMMARY */}
        <div className="col-lg-5">
          <div className="card">
            <div
              className="card-header fw-bold"
              style={{ background: "#f8f9fa" }}
            >
              YOUR ORDER ( {cart.length} )
            </div>

            <div className="card-body">
              {cart.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    width="55"
                    height="55"
                    style={{
                      borderRadius: "8px",
                      objectFit: "cover",
                      marginRight: "10px",
                    }}
                  />
                  <div className="flex-grow-1">
                    <div className="fw-semibold">{item.name}</div>
                    <small className="text-muted">Qty: {item.qty}</small>
                  </div>
                  <div className="fw-semibold">₹{item.price}</div>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-3">
                <span style={{ fontFamily: "system-ui" }}>PAYABLE AMOUNT</span>
                <span>₹{total}</span>
              </div>
              {addressSaved && (
                <>
                  <hr />
                  <button
                    className="btn btn-warning w-100 fw-bold mt-3"
                    disabled={!isFormValid}
                    onClick={() => setShowScanner(true)}
                  >
                    Pay Now
                  </button>
                  {showScanner && (
                    <>
                      <div className="scanner-overlay">
                        <div className="scanner-modal">
                          <h5 className="fw-bold mb-3">Scan & Pay</h5>

                          <img
                            src={qr}
                            alt="UPI QR"
                            className="img-fluid mb-3"
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "10px",
                              border: "1px solid #ddd",
                              padding: "8px",
                            }}
                          />

                          <p className="text-muted small">
                            Scan this QR using any UPI app
                          </p>

                          <button
                            type="button"
                            className="btn btn-outline-warning w-100 fw-bold"
                            onClick={handlePayment}
                          >
                            Payment Done
                          </button>

                          <button
                            className="btn btn-outline-danger w-100 mt-2"
                            onClick={() => setShowScanner(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
