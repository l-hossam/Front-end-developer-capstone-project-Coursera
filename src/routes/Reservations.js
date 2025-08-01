import Header from "./Header";
import Footer from "./Footer";
import "../components/styles/reservations.css";
import Form from "./Form";

function reservations() {
  return (
    <>
      <Header />
      
      <div className="body-image">
        <div className="general-container-reservation">
          <div className="text">
            <h2>Experience the perfect balance of tradition and luxury.</h2>
            <p>
              At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of tradition.
            </p>
            <p>Book a table with us to share in this experience.</p>
          </div>

          <div className="form">
            <h4>Reserve a Table</h4>
            <p>Please fill in and submit the form to book your reservation at Little Lemon.</p>
            <Form />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default reservations;
