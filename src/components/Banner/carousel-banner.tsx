import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
interface ImageData {
  src: string;
  alt: string;
}
interface props {
  images?: ImageData[]
}
const CarouselBanner = ({images = []}: props) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return(
        <>
            <Carousel 
                responsive={responsive}
                draggable={false}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
            >
              {images.map((data, index) => {
                return <img src={data.src} alt={data.alt} key={index} className="w-full"/>
              })}
            </Carousel>
        </>
    )
}
export default CarouselBanner