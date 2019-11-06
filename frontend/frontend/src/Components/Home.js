import React from 'react';

function Home() {
    return (
        <section className="home">
            <div className="col-left">
                <div className="box uno">
                    <h4>THIS IS ALL PRODUCTS IN OUR MALL ONLINE</h4>
                    <div className="inner-user">
                        <a href="#" >Send &gt; </a>
                        <i className="fa fa-user"></i>
                    </div>
                </div>
                <div className="box uno">
                    <h4>THIS IS ALL COMPANIES IN OUR MALL ONLINE</h4>
                    <div className="inner-user">
                        <a href="#" >Send 	&gt; </a>
                        <i className="fa fa-user"></i>
                    </div>
                </div>
                <div className="box dos">
                    <h4>Equip Challenge Front</h4>
                    <p>Excepture sint occaecat cuidatat non proident, sunt in culpa qui officia deserunt</p>
                    <a href="#" className="add-btn">+</a>
                </div>
            </div>
            <div className="col-right">
                <a href="#" className="start-btn">
                    <span>START YOUR PROJECT</span>
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>



        </section>
    )

}

export default Home;