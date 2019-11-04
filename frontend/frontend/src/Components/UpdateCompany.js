import React, { Component } from 'react';



class UpdateCompany extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault()
        var title = this.title;
        var ruc = this.ruc;
        console.log(title.value)
        console.log(ruc.value)
    }
    render() {
        return (
            <div className="App3" >
                <section className="update" >

                    <div className="head-center">
                        <h2>My company</h2>
                        <p>Update informacion</p>
                    </div>
                    <form>
                        <div className="input-group">
                            <label>NAME COMPANY</label>
                            <input className="company-input" ref={(c) => this.title = c} type="text" name="title" />
                        </div>
                        <div className="input-group">
                            <label>RUC</label>
                            <input className="company-input" ref={(c) => this.ruc = c} min="14" max="15" name="ruc" type="number" />
                        </div>

                        <button className="btn update-btn" onClick={this.onSubmit}>UPDATE NOW</button>

                    </form>

                </section>


            </div>


        )
    }


}

export default UpdateCompany;