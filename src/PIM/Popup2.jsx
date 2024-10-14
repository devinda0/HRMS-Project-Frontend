function Popup2({ closePopup }) {
    return (
      <div className="popup-overlay">
        <div className="popup-container">
          
          <div className="container">
            <div className="fname">
              <label htmlFor="firstName">Contact Name</label><br />
              <input type="text" id="firstName" name="firstName" placeholder="xxxxxx" /><br />
            </div>
            
          </div>
  
          <div className="container">
            <div className="Gender">
              <label htmlFor="Gender">Relationship</label><br />
              <input type="text" id="Gender" name="Gender" placeholder="xxxxxx" /><br />
            </div>
            <div className="Birthday">
              <label htmlFor="Birthday">contact number</label><br />
              <input type="date" id="Birthday" name="Birthday" placeholder="xxxxxx" />
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
  
  export default Popup2;