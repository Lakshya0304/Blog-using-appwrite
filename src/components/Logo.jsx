import React from 'react'

function Logo({width , height}) {
  return (
    <div>
      <img src='https://colmanandcompany.com/blog/wp-content/uploads/2014/04/blog-word-cloud1.jpg' className={`${width} ${height}`} ></img>
    </div>
  )
}

export default Logo
