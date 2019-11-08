import React from 'react';

class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            discount: ''
        }
    }
    render() {
        return (
            <div className="CreateProduct u-profile" >
                <p>Change Information</p>
                <h2>Update Profile</h2>
                <form ref="myForm" className="myForm" onSubmit={this.handleSubmit} >
                    <div className="input-group">
                        <label htmlFor="name">NAME</label>
                        <input onChange={this.handleInput} type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">EMAIL</label>
                        <input onChange={this.handleInput} type="email" name="email" placeholder="email" />
                    </div>
                    <button className="btn btn-product" >Update Now</button>
                    <a className="change-link">Change Password &gt;</a>
                </form>
            </div>
        )

    }
}

export default UpdateProfile;