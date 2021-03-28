import React, { Fragment } from 'react';
import BlogList from './Blog/BlogList';
import AdminPanel from './Panel/AdminPanel';




const AdminMainLayout = () => {
    return (
        <Fragment>
            <div className="BodyGray">
                <div className="main row">

                    <AdminPanel />

                    <div className="content col-lg-9 col-md-9 col-sm-9">
        
                        <BlogList />

                    </div>


                </div>

            </div>
        </Fragment>




    );
}

export default AdminMainLayout;