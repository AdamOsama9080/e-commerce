import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import imagePannerOne from "../../images/woman-4246954_640.jpg";
import imagePannerTwo from "../../images/istockphoto-1370737372-640427.jpg";
import smallPannerOne from "../../images/student-849822_1280.jpg";
import smallPannerTwo from "../../images/mobile-phone-1875813_1280.jpg";
import smallPannerThree from "../../images/dumbbells-2465478_1280.jpg";
import smallPannerFour from "../../images/man-2425121_1280.jpg";
import cameraPaner from "../../images/camera-541213_640.jpg";
import tvPanner from "../../images/tv-627876_640.jpg";
import labtopPanner from "../../images/student-849822_640.jpg";
import WatchPanner from "../../images/wrist-watch-2159351_640.jpg";
import mobilePanner from "../../images/iphone-410324_640.jpg";
import tabletPanner from "../../images/hands-820272_640.jpg";
import clothesPanner from "../../images/hangers-1850082_640.jpg";
import shoesPanner from "../../images/shoess-612x612.jpg";
import viewPannerOne from "../../images/24-01_260x.avif";
import viewPannerTwo from "../../images/03_00_260x.avif";
import viewPannerThree from "../../images/06_00_260x.avif";
import viewPannerFour from "../../images/12_00_260x.avif";
import viewPannerFive from "../../images/15_00_260x.avif";
import viewPannerSix from "../../images/19_00_260x.avif";
import viewPannerSeven from "../../images/24-01_260x.avif";
import subPannerOne from "../../images/watchsubpanner.webp";
import subpannerFour from "../../images/subbanner-04.webp";
import subPannerThree from "../../images/subbanner-03.webp";
import subpannerTwo from "../../images/subbanner-02.webp";
import imageBrandOne from "../../images/brand-02_131x119@2x (1).webp";
import imageBrandTwo from "../../images/brand-03_131x119@2x (1).webp";
import imageBrandThree from "../../images/brand-04_131x119@2x (1).avif";
import imageBrandFour from "../../images/brand-05_131x119@2x (1).avif";
import imageBrandFive from "../../images/brand-06_131x119@2x.webp";
import imageBrandSix from "../../images/brand-07_131x119@2x.avif";
import imageBrandSeven from "../../images/brand-08_131x119@2x (1).avif";
import imageBrandEight from "../../images/brand-09_131x119@2x.webp";
import imageBlogOne from '../../images/blog-1_405x.webp';
import imageBlogTwo from '../../images/blog-2_405x.webp';
import imageBlogThree from '../../images/blog-3_405x.webp';
import imageBlogFour from '../../images/blog-4_405x.webp';
import imageBlogFive from '../../images/blog-5_405x.webp';

// import imageBrandOne from "../../images/bra";

import Slider from "react-slick";

export default function Home() {
  const [isHovered, setIsHovered] = useState(null);

  // const [productPanner, setProductPanner] = useState([]);
  // let mainPanner = productPanner.slice(3, 5);

  // async function productimg() {
  //   try {
  //     let response = await axios.get("https://fakestoreapi.com/products");
  //     setProductPanner(response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  // useEffect(() => {
  //   console.log(mainPanner)
  //   productimg();
  // }, []);
  // function SimpleSlider() {
  const ProductCard = ({
    image,
    brand,
    description,
    rating,
    price,
    index,
    setIsHovered,
  }) => (
    <div
      className="product bg-white p-4 rounded-3 m-2 position-relative"
      onMouseEnter={() => {
        setIsHovered(index);
      }}
      onMouseLeave={() => {
        setIsHovered(null);
      }}
    >
      <div className="user-product-ation position-relative d-flex justify-content-end">
        <div>
          <img src={image} className="w-100" alt="the view product" />
        </div>
        <div className="pos position-absolute d-flex flex-column user-action">
          <i className="fa-regular fa-heart fa-2xs d-block mb-4"></i>
          {isHovered === index && (
            <>
              <i className="fa-solid fa-shuffle fa-2xs d-block mb-4"></i>
              <i className="fa-solid fa-eye fa-2xs d-block mb-4"></i>
              <i className="fa-solid fa-bell fa-2xs d-block mb-4"></i>
            </>
          )}
        </div>
      </div>
      <div className="product-details">
        <h5>{brand}</h5>
        <p>{description}</p>
      </div>
      <div className="product-rate">
        {[...Array(rating).keys()].map((i) => (
          <i key={i} className="fa-solid fa-star product-rate-star"></i>
        ))}
        {[...Array(5 - rating).keys()].map((i) => (
          <i key={i} className="fa-regular fa-star bg-transparent"></i>
        ))}
      </div>
      <div className="product-price">{price}</div>
    </div>
  );

  const SubProductCard = ({ image, title, mainDesc, description, index }) => (
    <div className="product rounded-3 m-2 position-relative">
      <div className="component w-100 pt-0 ">
        <img src={image} alt="panner..." className="w-100" />
      </div>
      <div className="product-details position-absolute top-0 mt-3 ms-3">
        <div className={`banner-label ${index === 0 ? "text-white" : ""}`}>
          {title}
        </div>
        <div className={`banner-subtitle ${index === 0 ? "text-white" : ""}`}>
          {mainDesc}
        </div>
        <div className={`banner-title ${index === 0 ? "text-white" : ""}`}>
          {description}
        </div>
      </div>
    </div>
  );


const CustomDiv = ({ image, data, title, describe, link }) => (
  <div className="c brands-card rounded-3 m-2 ps-0 pe-0">
    <img src={image} alt="blog image..." className="w-100 d-inline-block" />
    <div className="p-3 blog-tesr-info">
      <p className="mb-1">{data}</p>
      <h6 className="mb-1">{title}</h6>
      <p className="mb-0">{describe}</p>
      <Link to={link} className="r d-inline-block text-capitalize btn-more mt-3">read more</Link>
    </div>
  </div>
);



  var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  var subSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const continousSlider = {
    // dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false, // Add this line
    arrows:false,
  };

  var subSliderBlog = {
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false, // Add this line
    arrows: true,
  }

  const products = [
    {
      brand: "H&M",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, sunt!",
      rating: 4,
      price: "100.00$",
      image: viewPannerOne,
    },
    {
      brand: "Dell",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, sunt!",
      rating: 5,
      price: "1200.00$",
      image: viewPannerTwo,
    },
    {
      brand: "Sony",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, sunt!",
      rating: 3,
      price: "800.00$",
      image: viewPannerThree,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, sunt!",
      brand: "Nike",
      rating: 4,
      price: "80.00$",
      image: viewPannerFour,
    },
    {
      brand: "Apple",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, sunt!",
      rating: 5,
      price: "1500.00$",
      image: viewPannerFive,
    },
    {
      brand: "Adidas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, sunt!",
      rating: 4,
      price: "90.00$",
      image: viewPannerSix,
    },
  ];

  const subpanner = [
    {
      image: subPannerOne,
      title: "BIG SCREEN",
      mainDesc: "Smart Watch Series 7",
      description: "from $399 or $16.62/mo. for 24mo.*",
    },
    {
      image: subpannerTwo,
      title: "STUDIO DISPLAY",
      mainDesc: "600 nits of brihtness",
      description: "27-inch 5K Retina display",
    },
    {
      image: subPannerThree,
      title: "smartphones",
      mainDesc: "Smartphone 13 Pro.",
      description:
        "Now in Green. From $999.00 or $41.62/mo.for 24 mo. Footnote*",
    },
    {
      image: subpannerFour,
      title: "home speakers",
      mainDesc: "Room-filling sound.",
      description: "From $699 or $116.58/mo. for 12 mo.*",
    },
  ];

  const imgBrands = [
    {
      image: imageBrandOne,
    },
    {
      image: imageBrandTwo,
    },
    {
      image: imageBrandThree,
    },
    {
      image: imageBrandFour,
    },
    {
      image: imageBrandFive,
    },
    {
      image: imageBrandSix,
    },
    {
      image: imageBrandSeven,
    },
    {
      image: imageBrandEight,
    },
  ];

  const LastNewsPanner = [
    {
      image:imageBlogOne,
      date:"11June , 2022",
      title:"Sed ut perspiciatis unde omnis renaissance",
      describe:"You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury..."
    },
    {
      image:imageBlogTwo,
      date:"11June , 2022",
      title:"Sed ut perspiciatis unde omnis renaissance",
      describe:"You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury..."
    },
    {
      image:imageBlogThree,
      date:"11June , 2022",
      title:"Sed ut perspiciatis unde omnis renaissance",
      describe:"You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury..."
    },
    {
      image:imageBlogFour,
      date:"11June , 2022",
      title:"Sed ut perspiciatis unde omnis renaissance",
      describe:"You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury..."
    },
    {
      image:imageBlogFive,
      date:"11June , 2022",
      title:"Sed ut perspiciatis unde omnis renaissance",
      describe:"You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury..."
    },
  ]



  // }
  return (
    <>
      <section className="home-one py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <AliceCarousel
                autoPlay
                autoPlayInterval={3000}
                infinite
                mouseTracking
                disableButtonsControls
              >
                <div className="main-panner  position-relative">
                  <div>
                    <img
                      className="i img-fluid rounded-3 sliderimg"
                      src={imagePannerOne}
                      alt="img-panner-one"
                    />
                    <div className="back-ground-opacity"></div>
                  </div>
                  <div className="main-panner-category position-absolute">
                    <h1 className="text-white text-uppercase">Visa Payment</h1>
                    <h3 className="t color-logo mb-5 text-uppercase">
                      from your mobile
                    </h3>
                    <p className="text-white fs-4">
                      Securely pay with Visa <br /> directly from your mobile
                      device.
                    </p>
                    <Link className="view-large-panner view-right">
                      VIEW MORE
                    </Link>
                  </div>
                </div>

                <div className="main-panner  position-relative">
                  <div>
                    <img
                      className="i img-fluid rounded-3 sliderimg"
                      src={imagePannerTwo}
                      alt="img-panner-one"
                    />
                    <div className="back-ground-opacity"></div>
                  </div>
                  <div className="main-panner-category position-absolute">
                    <h1 className="text-white text-uppercase">Visa Payment</h1>
                    <h3 className="t color-logo mb-5 text-uppercase">
                      from your Home
                    </h3>
                    <p className="text-white fs-4">
                      Enjoy the convenience of Visa payments
                      <br /> without leaving your home.
                    </p>
                    <Link className="view-large-panner ">VIEW MORE</Link>
                  </div>
                </div>
              </AliceCarousel>
            </div>

            <div className="c col-6">
              <div className="d d-flex gap-5 flex-wrap justify-content-between align-items-center">
                <div className="small-panner position-relative">
                  <div className="">
                    <img
                      src={smallPannerOne}
                      alt="small-panner-one"
                      className=" img-fluid rounded-3 w-100"
                    />
                    <div className="back-ground-opacity"></div>
                  </div>
                  <div className="main-panner-category position-absolute">
                    <h4 className="text-uppercase mb-2 color-logo">Labtops</h4>
                    <h6 className=" mb-5 text-uppercase text-white">
                      from 2000$ <br /> or 50$/mon
                    </h6>
                    <Link className="view-small-panner">MORE</Link>
                  </div>
                </div>

                <div className="small-panner position-relative">
                  <div className="">
                    <img
                      src={smallPannerTwo}
                      alt="small-panner-one"
                      className=" img-fluid rounded-3 w-100"
                    />
                    <div className="back-ground-opacity"></div>
                  </div>
                  <div className="main-panner-category position-absolute">
                    <h4 className="text-uppercase mb-2 color-logo">Phones</h4>
                    <h6 className=" mb-5 text-uppercase text-white">
                      from 300$ <br /> or 40$/mon
                    </h6>
                    <Link className="view-small-panner">MORE</Link>
                  </div>
                </div>

                <div className="small-panner position-relative">
                  <div className="">
                    <img
                      src={smallPannerThree}
                      alt="small-panner-one"
                      className=" img-fluid rounded-3 w-100"
                    />
                    <div className="back-ground-opacity"></div>
                  </div>
                  <div className="main-panner-category position-absolute">
                    <h4 className="text-uppercase mb-2 color-logo">Shoes</h4>
                    <h6 className=" mb-5 text-uppercase text-white">
                      from 100$ <br /> or 15$/mon
                    </h6>
                    <Link className="view-small-panner">MORE</Link>
                  </div>
                </div>

                <div className="small-panner position-relative">
                  <div className="">
                    <img
                      src={smallPannerFour}
                      alt="small-panner-one"
                      className=" img-fluid rounded-3 w-100"
                    />
                    <div className="back-ground-opacity"></div>
                  </div>
                  <div className="main-panner-category position-absolute">
                    <h4 className="text-uppercase mb-2 color-logo">Clothes</h4>
                    <h6 className=" mb-5 text-uppercase text-white">
                      from 20$ <br /> or 1$/mon
                    </h6>
                    <Link className="view-small-panner">MORE</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-two py-5">
        {/* <div>hello home 2</div> */}
        <div className="c container-xxl">
          <div className="r row">
            <div className="col-12">
              <div className="sevices d-flex justify-content-between">
                <div className="d d-flex align-items-center">
                  {/* hello */}
                  <i className="fa-solid fa-truck-fast fa-2xl"></i>
                  <div className="ms-3">
                    <h5>Free shipping</h5>
                    <p className="mb-0">from all order over 100$</p>
                  </div>
                </div>
                <div className="d d-flex align-items-center ">
                  {/* hello */}
                  <i class="fa-solid fa-gift fa-2xl"></i>
                  <div className="ms-3">
                    <h5>Daily Surprise offer</h5>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d d-flex align-items-center ">
                  {/* hello */}
                  <i class="fa-solid fa-headset fa-2xl"></i>
                  <div className="ms-3">
                    <h5>Support 24/7</h5>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d d-flex align-items-center ">
                  {/* hello */}
                  <i class="fa-solid fa-percent fa-2xl"></i>
                  <div className="ms-3">
                    <h5>Affordable prices</h5>
                    <p className="mb-0">Get factory direct price</p>
                  </div>
                </div>
                <div className="d d-flex align-items-center ">
                  {/* hello */}
                  <i class="fa-solid fa-credit-card fa-2xl"></i>
                  <div className="ms-3">
                    <h5>Secure Payment</h5>
                    <p className="mb-0">100% protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-two py-5">
        <div className="c container-xxl">
          <div className="r row">
            <div className="c col-12">
              <div className="cateogries bg-white rounded-3 d-flex justify-content-between align-items-center flex-wrap p-3">
                <div className="cateogry d-flex align-items-center gap-4 py-3">
                  <div className="">
                    <h5>Labtops</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img
                    className="w-50"
                    src={labtopPanner}
                    alt="panner-labtop-and-pc"
                  />
                </div>
                <div className="cateogry d-flex align-items-center gap-4 py-3">
                  <div className="">
                    <h5>watches</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img
                    className="w-50"
                    src={WatchPanner}
                    alt="panner-watches"
                  />
                </div>
                <div className="cateogry d-flex align-items-center gap-4 py-3">
                  <div className="">
                    <h5>camera</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img className="w-50" src={cameraPaner} alt="panner-camera" />
                </div>
                <div className="cateogry d-flex align-items-center gap-4 py-3 border-end-0">
                  <div className="">
                    <h5>TV</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img className="w-50" src={tvPanner} alt="panner-tv" />
                </div>
                <div className="line-betwwen-categoty"></div>
                <div className="cateogry d-flex align-items-center gap-4 py-3">
                  <div className="">
                    <h5>Clothes</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img
                    className="w-50"
                    src={clothesPanner}
                    alt="panner-labtop-and-pc"
                  />
                </div>
                <div className="cateogry d-flex align-items-center gap-4 py-3">
                  <div className="">
                    <h5>Shoes</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img
                    className="w-50"
                    src={shoesPanner}
                    alt="panner-watches"
                  />
                </div>
                <div className="cateogry d-flex align-items-center gap-4 py-3">
                  <div className="">
                    <h5>Tablet</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img
                    className="w-50"
                    src={tabletPanner}
                    alt="panner-camera"
                  />
                </div>
                <div className="cateogry d-flex align-items-center gap-4 py-3 border-end-0">
                  <div className="">
                    <h5>Phones</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img className="w-50" src={mobilePanner} alt="panner-tv" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-two py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="c col-12">
              <h3>Featured Collection</h3>
              <Slider {...settings} className="product-slider">
                {products.map((product, index) => (
                  <div key={index}>
                    <ProductCard
                      brand={product.brand}
                      description={product.description}
                      rating={product.rating}
                      price={product.price}
                      image={product.image}
                      index={index} // Pass the index as a prop
                      setIsHovered={setIsHovered}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="c col-12">
              <Slider {...subSliderSettings} className="product-slider py-5">
                {subpanner.map((product, index) => (
                  <div key={index}>
                    <SubProductCard
                      image={product.image}
                      title={product.title}
                      mainDesc={product.mainDesc}
                      describe={product.describe}
                      index={index}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="home-three py-5">
        <div className="contain container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="slider-brands brands-card">
                <Slider {...continousSlider}>
                  {imgBrands.map((brand, index) => (
                    <div key={index}>
                      <img src={brand.image} alt={`Brand ${index + 1}`} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-four py-5">
        <div className="c container-xxl overflow-hidden">
          <div className="r row overflow-hidden">
            <h4 className="mb-2">Our Latest News</h4>
          <Slider {...subSliderBlog} className="">
                {LastNewsPanner.map((LastNewsPanner, index) => (
                  <div key={index}>
                    <CustomDiv
                      image={LastNewsPanner.image}
                      title={LastNewsPanner.title}
                      data={LastNewsPanner.date}
                      describe={LastNewsPanner.describe}
                      index={index}
                    />
                  </div>
                ))}
            </Slider>
            {/* <div className="c col-3 brands-card rounded-3 ps-0 pe-0">
              <img src={imageBlogOne} alt="blog imaege ...." className="w-100 d-inline-block img-fluid"/>
              <div className="p-3 blog-tesr-info">
                  <p>11June , 2022</p>
                  <h6>A beautiful sunday morning renaissance</h6>
                  <p>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury...</p>
                  <Link className="r d-inline-block text-capitalize btn-more mt-3">read more</Link>
              </div>
            </div>
            <div className="c col-3 brands-card rounded-3 ps-0 pe-0">
              <img src={imageBlogOne} alt="blog imaege ...." className="w-100 d-inline-block"/>
              <div className="p-3 blog-tesr-info">
                  <p>11June , 2022</p>
                  <h6>A beautiful sunday morning renaissance</h6>
                  <p>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury...</p>
                  <Link className="r d-inline-block text-capitalize btn-more mt-3">read more</Link>
              </div>
            </div>
            <div className="c col-3 brands-card rounded-3 ps-0 pe-0">
              <img src={imageBlogOne} alt="blog imaege ...." className="w-100 d-inline-block"/>
              <div className="p-3 blog-tesr-info">
                  <p>11June , 2022</p>
                  <h6>A beautiful sunday morning renaissance</h6>
                  <p>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury...</p>
                  <Link className="r d-inline-block text-capitalize btn-more mt-3">read more</Link>
              </div>
            </div>
            <div className="c col-3 brands-card rounded-3 ps-0 pe-0">
              <img src={imageBlogOne} alt="blog imaege ...." className="w-100 d-inline-block"/>
              <div className="p-3 blog-tesr-info">
                  <p>11June , 2022</p>
                  <h6>A beautiful sunday morning renaissance</h6>
                  <p>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury...</p>
                  <Link className="r d-inline-block text-capitalize btn-more mt-3">read more</Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
