import React, { Fragment,useEffect,useState } from 'react';
import BlogListItem from './BlogListItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url="http://localhost:8000"



const BlogList = () =>
{
    
    const [ getallblog, setallblog ] = useState( [] )

    const getallblogapi=() =>
    {
        
        axios.get( url + "/api/blog" ).then( ( {data} ) =>
        {
            setallblog( data )
            
            
        } )
            .catch( ex =>
            {
                
                console.log( ex );
            } );


    }
    
    
   
    useEffect( () =>
    {
        getallblogapi()
        console.log(getallblog);
        
    }, [] );

    return (
        <Fragment>
       <Link to="/admin/blog/add">

     <div className="AddBlog"  >
          
                    <i className="fas fa-plus AddItem"></i>
               
            </div>

                
       </Link>
   
     
       
           
                <BlogListItem />
    
          

        </Fragment>
    );
}

export default BlogList;