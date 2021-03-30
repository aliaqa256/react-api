import React, { Fragment } from 'react';

const AddUser = () => {
    return (


        <Fragment>

            <div className="MainAddUser">

                <label className="LabelAddPopup">Username</label>
                <br />
                <input className="InputAddPopup" type="text" />
                <br />

                <label className="LabelAddPopup">Email</label>
                <br />
                <input className="InputAddPopup" type="email" />
                <br />

                <label className="LabelAddPopup">Password</label>
                <br />
                <input className="InputAddPopup" type="password" />
                <br />

                <label className="LabelAddPopup">Confirm Password</label>
                <br />
                <input className="InputAddPopup" type="password" />
                <br />


                <button className="BtnAddPopup btn btn-dark">
                    <i className="fa fa-paper-plane"></i>
                </button>

            </div>
        </Fragment>
    );
}

export default AddUser;