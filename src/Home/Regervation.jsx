
function Regervation() {
  return (
    <>
          <section className="regervation-section" id="contact">
        <div className="container">
            <div className="regervation-cards">
                <div className="regervation-content">
                    <h2>Make an Appointment</h2>
                    <div className="regervation-form">
                        <input type="text" id="name" placeholder="Name"/>
                        <input type="email" id="email" placeholder="Email Addres"/>
                        <div className="select-control">
                            <select id="department" name="department">
                                <option value="" className="select-header">Select Services</option>
                                <option value="cardiology">Name Of Service</option>
                                <option value="cardiology">Name Of Service</option>
                                <option value="cardiology">Name Of Service</option>
                                <option value="cardiology">Name Of Service</option>
                            </select>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="time-control">
                            <select className="form-control">
                                <option value="" selected="" className="select-header">Time</option>
                                <option value="1">8 AM TO 10AM</option>
                                <option value="1">10 AM TO 12PM</option>
                                <option value="1">12PM TO 2PM</option>
                                <option value="1">2PM TO 4PM</option>
                                <option value="1">4PM TO 6PM</option>
                                <option value="1">6PM TO 8PM</option>
                                <option value="1">4PM TO 10PM</option>
                                <option value="1">10PM TO 12PM</option>
                            </select>
                            <i className="fa-regular fa-clock"></i>
                        </div>
                        <textarea className="form-control" id="Textarea" rows="4" placeholder="Your Note "
                            style={{height: "127px"}}></textarea>
                    </div>
                    <a href="#" className="btn_2 regervation-btn">Make an Appointment</a>
                </div>
                <div className="regervation-image">
                    <img src="/images/reservation.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Regervation
