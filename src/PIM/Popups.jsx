function Popups({ closePopup }) {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        
        <div className="container">
          <div className="fname">
            <label htmlFor="firstName">First Name</label><br />
            <input type="text" id="firstName" name="firstName" placeholder="xxxxxx" /><br />
          </div>
          <div className="lname">
            <label htmlFor="lastName">Last Name</label><br />
            <input type="text" id="lastName" name="lastName" placeholder="xxxxxx" />
          </div>
        </div>

        <div className="container">
          <div className="Gender">
            <label htmlFor="Gender">Gender</label><br />
            <input type="text" id="Gender" name="Gender" placeholder="xxxxxx" /><br />
          </div>
          <div className="Birthday">
            <label htmlFor="Birthday">Birth Day</label><br />
            <input type="date" id="Birthday" name="Birthday" placeholder="xxxxxx" />
          </div>
          <div className="Martial_Status">
            <label htmlFor="Martial Status">Martial Status</label><br />
            <input type="text" id="Martial Status" name="Martial Status" placeholder="xxxxxx" />
          </div>
        </div>
        <div className="Button">
              <button className="button2" onClick={closePopup}>Cancel</button>
              <button className="button1" >Save</button>
            </div>

      </div>
    </div>
  );
}

export default Popups;