import React,{Fragment} from 'react';

const AdminPanel = () => {
    return ( 
  <div className="panel col-lg-3 col-md-3 col-sm-3 ">

            <div>
              <img src="../../../img/teal.jpg" alt="image alt" className=" AdminImage" />
              <br /><br />
              <p className="AdminName">Admin Name</p>
            </div>


            <div id="myNav">
              <ul className="list-group row PanelAdminList">
                <li className="list-group-item PanelAdminItem">مطالب</li>
                <li className="list-group-item PanelAdminItem">کاربران</li>
                <li className="list-group-item PanelAdminItem">دسته بندی ها</li>
                <li className="list-group-item PanelAdminItem">تنظیمات سایت</li>

              </ul>
            </div>





          </div>


     );
}
 
export default AdminPanel;