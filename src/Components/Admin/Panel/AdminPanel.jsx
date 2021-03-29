import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';


const AdminPanel = (props) => {
  const {pathname}=props.location
  
  const blog = pathname === "/admin/blog" ? "PanelAdminItem list-group-item NavActive" : "list-group-item PanelAdminItem ";
  const user = pathname === "/admin/user" ? "PanelAdminItem list-group-item NavActive" : "list-group-item PanelAdminItem ";

  return (
    <div className="panel col-lg-3 col-md-3 col-sm-3 ">

      <div>
        <img src="../../../img/teal.jpg" alt="image alt" className=" AdminImage" />
        <br /><br />
        <p className="AdminName">Admin Name</p>
      </div>


      <div id="myNav">
        <ul className="list-group row PanelAdminList">


          <Link style={{ textDecoration: 'none' }} to="/admin/blog">
           
            <li className={blog}  >مطالب</li>
          </Link>


          <Link to="/admin/user"   style={{ textDecoration: 'none' }}>
            <li className={user}>کاربران</li>
          </Link>

          <li className="list-group-item PanelAdminItem">دسته بندی ها</li>
          <li className="list-group-item PanelAdminItem">تنظیمات سایت</li>

        </ul>
      </div>





    </div>


  );
}

export default withRouter(AdminPanel);