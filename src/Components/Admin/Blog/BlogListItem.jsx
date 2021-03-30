import React from 'react';

const BlogListItem = (props) => {
    return (

      
            
        <div className="AdminBlogList text-truncate row ">
            {console.log( props )}

                    <div className="col  BlogListItem text-truncate">blog.title </div>
                    <i className="verticalLine"></i>
                    <div className="col BlogListItem text-truncate">Blog.User</div>
                    <i className="verticalLine"></i>
                    <div className="col BlogListItem text-truncate">Blog.Date</div>
                    <div className="row BlogListIcon">
                        <div className="col BlogListItem">
                            <i className="fas fa-edit EditIcon"></i>
                        </div>
                        <div className="col BlogListItem">
                            <i className="fas fa-trash-alt TrashIcon"></i>
                        </div>
                    </div>
                </div>

    
       
        
    
            

   
        
    

    
    
       
      
    );
}

export default BlogListItem;