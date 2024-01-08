import "./community.css";

function Community() {
  return (
    <div className="community">
      <div className="community_content">
        <div className="community_title">
          <h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
        </div>
        <div className="community_text">
          <p>Type your email down below and be young wild generation</p>
        </div>
        <div className="community_input">
          <form className="community_form">
            <input type="email" placeholder="Add your email here" required />
            <button className="community_btn" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Community;
