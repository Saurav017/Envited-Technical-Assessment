import React from 'react'
import classes from './HeadingImage.module.css'
const HeadingImage = () => {
  return (
    <section className={classes.headingimage__main}>
        <div className={classes.heading_div}>
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T072646Z&X-Amz-Expires=86400&X-Amz-Signature=a1c4b7806bccd13b924403110a298cb74e87cbee08915080e5efdd5cfaf2e73e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" alt="mainImage" className={classes.headingImage}/>
        </div>
    </section>
  )
}

export default HeadingImage