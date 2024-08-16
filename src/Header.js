function Header() {
  return (
    <>
      <div className="container">
        <div className="card" style={{ border: "none" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#9400D3" }}>
              WE MAKE YOUR IDEA'S
            </h5>
            <h5 className="card-subtitle mb-2 text-body-secondary">
              INTO REALITY
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="card-link">Get started</button>
            <button className="card-link">Another link</button>
          </div>
        </div>
        <img src="./image1.avif" alt="pic1" className="image" />
      </div>
    </>
  );
}
export default Header;
