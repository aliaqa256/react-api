import React, { Fragment } from 'react';

const EditUser = () => {
    return (

        <Fragment>
            <div class="MainAddUser">

                <label class="LabelAddPopup">Username</label>
                <br />
                <input class="InputAddPopup" type="text" />
                <br />

                <label class="LabelAddPopup">Email</label>
                <br />
                <input class="InputAddPopup" type="email" />
                <br />



                <button class="BtnAddPopup btn btn-dark">
                    <i class="fa fa-paper-plane"></i>
                </button>

            </div>

        </Fragment>
    );
}

export default EditUser;