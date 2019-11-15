import React, { Component } from 'react';

class UpdateCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ruc: '',
            description: 'Lideres en repuestos'
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput(e) {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.onAddCompany(this.state)

    }
    render() {
        return (

            <section className="update" >

                <div className="head-center">
                    <h2>My company</h2>
                    <p>Update informacion</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="nameCompany">NAME COMPANY</label>
                        <input className="company-input" name="title"
                            onChange={this.handleInput}
                            type="text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="rucNumber">RUC</label>
                        <input className="company-input" name="ruc"
                            onChange={this.handleInput}
                            type="number" />
                    </div>

                    <button className="btn update-btn" >UPDATE NOW</button>

                </form>

            </section>





        )
    }


}

export default UpdateCompany;