import React, { Fragment } from 'react';
import BlogList from './Blog/BlogList';
import AdminPanel from './Panel/AdminPanel';
import UserList from './User/UserList';
import { Switch, Route } from 'react-router-dom';
import AddBlog from './Blog/AddBlog';



const AdminMainLayout = () => {
    return (
        <Fragment>
            <div className="BodyGray">
                <div className="main row">

                    <AdminPanel />

                    <div className="content col-lg-9 col-md-9 col-sm-9">

                        <Switch>
                            <Route exact path="/admin/blog" component={BlogList} />
                            <Route path="/admin/User" component={UserList} />
                            <Route path="/admin/blog/add" component={AddBlog} />
                        </Switch>


                    </div>


                </div>

            </div>
        </Fragment>




    );
}

export default AdminMainLayout;