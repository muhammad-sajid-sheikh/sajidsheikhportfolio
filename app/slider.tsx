"use client"
import { ClientReviews } from '@/data/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Reviewcard from './reviewCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function Slider(){
    return(
        <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive}>
            {ClientReviews.map((review)=>{
                return <div key={review.image}>
                    <Reviewcard review={review}/>
                </div>

            })}
        </Carousel>
    )
}
export default Slider