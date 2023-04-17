import React from 'react'
import Blogs from '../blogData'

export default function BlogCard() {
  return (    
    <>
        {Blogs.map(blog => {
            return (
                <div class="col-lg-4 col-md-6">
                    <div class="p-3 blog-card">
                        <img  className='blogImg' src={blog.imgUrl}/>
                        <h5>{blog.title}</h5>
                        <p className='blogPara'>{blog.desc.length>50 && blog.desc.substring("",200)+"..."}</p>

                    </div>
                </div> 
            )
        })}
    </>
  )
}



{/* <div class="col-6">
        <div class="p-3 blog-card">Blog</div>
    </div> */}