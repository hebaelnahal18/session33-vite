
function About() {
  return (
    <>
          <section className="about-section" id="about">
        <div className="container">
            <div className="about-card">
                <div className="about-img">
                    <img src="./images/top_service.png" alt=""/>
                </div>
                <div className="about-content">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra maecenas
                        accumsan
                        lacus vel</p>
                    <a href="#" className="btn_2">Learn more</a>
                    <div className="banner_item">
                        <div className="banner-single">
                            <img src="./images/banner_1.svg" alt=""/>
                            <h5>Emergency</h5>
                        </div>
                        <div className="banner-single">
                            <img src="./images/banner_2.svg" alt=""/>
                            <h5>Appointment</h5>
                        </div>
                        <div className="banner-single">
                            <img src="./images/banner_3.svg" alt=""/>
                            <h5>Qualfied</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
