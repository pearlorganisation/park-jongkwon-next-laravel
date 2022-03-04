import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Home() {

  const data = [
    {
      "id": 1,
      "title": "Face Cream",
      "url": "https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_960_720.jpg"
    },
    {
      "id": 2,
      "title": "Makeup Brush",
      "url": "https://cdn.pixabay.com/photo/2016/10/06/21/11/brush-1720073_960_720.jpg"
    },
    {
      "id": 3,
      "title": "Shaving Cream",
      "url": "https://cdn.pixabay.com/photo/2014/08/10/18/00/razor-414909_960_720.jpg"
    },
    {
      "id": 4,
      "title": "Cream xyz",
      "url": "https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_960_720.jpg"
    },
    {
      "id": 5,
      "title": "Makeup",
      "url": "https://cdn.pixabay.com/photo/2016/10/06/21/11/brush-1720073_960_720.jpg"
    },
    {
      "id": 6,
      "title": "Cream",
      "url": "https://cdn.pixabay.com/photo/2014/08/10/18/00/razor-414909_960_720.jpg"
    }

  ]

  const data1 = [
    {
      "id": 1,
      "name": "Disha Patani",
      "rank": 1
    },
    {
      "id": 2,
      "name": "Ilarika Rautela",
      "rank": 2
    },
    {
      "id": 3,
      "name": "Akanksha Rana",
      "rank": 3
    },
    {
      "id": 4,
      "name": "Kajal Panwar",
      "rank": 4
    },
    {
      "id": 5,
      "name": "Vibhanshi Singh",
      "rank": 3
    },
    {
      "id": 6,
      "name": "Juhi Negi",
      "rank": 3
    },
    {
      "id": 7,
      "name": "Sonali Panwar",
      "rank": 3
    }
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className="container-fluid">
      
        {/* top picks for you  */}

        <div className="row top-pick-row">
        <div className="custom-shape-divider-top-1646378330">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
    </svg>
</div>
<div className="custom-shape-divider-bottom-1646378505">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
    </svg>
</div>
          <div className="col-md-12 text-center">
            <button className="btn home-heading-1">
              <div className="inside-btn">
                <div>
                  <i className="ri-vip-crown-2-line"></i>
                </div>
                Top Picks For You
                <div>
                  <i className="ri-vip-crown-2-line"></i>
                </div>
              </div>

            </button>
            <div className="row">
              <Carousel responsive={responsive}>
                {
                  data.map((e) => {
                    return (
                      <>
                        <div className="col-md-10 mx-auto top-pick-carousel-col">
                          <div>
                            <div className="card card-display">
                              <Image src={e.url} className="card-img-top top-pick-image" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus molestie nisl vitae hendrerit. Integer sed dolor vel metus convallis egestas at eget purus.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </Carousel>
            </div>
          </div>
        </div>

        {/* Real Time View Ranking */}

        <div className="row">
          <div className="col-md-12 text-center">
            <button className="btn home-heading-2">
              <div className="inside-btn">
                <div>
                  <i className="ri-timer-2-line"></i>
                </div>
                Real Time View Ranking
                <div>
                  <i className="ri-timer-2-line"></i>
                </div>
              </div>
            </button>
            <div className="row">
              <Carousel responsive={responsive}>
                {
                  data1.map((e) => {
                    return (
                      <>
                        <div className="col-md-10 mx-auto top-pick-carousel-col">
                          <div>
                            <div className="card card-display">
                              <Image src="female.jpg" className="card-img-top top-pick-image" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <h5>Rank:{e.rank}</h5>
                                <a href="#" className="btn btn-primary">Have a look</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </Carousel>
            </div>
          </div>
        </div>

        {/* todays a whole vibe */}

        <div className="row top-pick-row">
        
          <div className="col-md-12 text-center">
            <button className="btn home-heading-1">
              <div className="inside-btn">
                <div>
                <i className="ri-flashlight-fill"></i>
                </div>
               Today&lsquo;s A Whole Vibe
                <div>
                <i className="ri-flashlight-fill"></i>
                </div>
              </div>
            </button>
            <div className="row">
              <Carousel responsive={responsive}>
                {
                  data1.map((e) => {
                    return (
                      <>
                        <div className="col-md-10 mx-auto top-pick-carousel-col">
                          <div>
                            <div className="card card-display">
                              <video className="video-tag"
                              poster="creame2.jpg"
                              // width="320" height="240"
                               controls>
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
                              </video>
                              <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <h5>Rank:{e.rank}</h5>
                                <a href="#" className="btn btn-primary">Click Here</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </Carousel>
            </div>
          </div>
          <div className="custom-shape-divider-top-1646378330">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
    </svg>
</div>
<div className="custom-shape-divider-bottom-1646378505">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
    </svg>
</div>
       
        </div>

        {/* spring festivals */}

        <div className="row">
          <div className="col-md-12 text-center">
            <button className="btn home-heading-2">
              <div className="inside-btn">
                <div>
                <i className="ri-emotion-laugh-line"></i>
                </div>
                Spring Festival 30-70% Off
                <div>
                <i className="ri-emotion-laugh-line"></i>
                </div>
              </div>
            </button>
            <div className="row">
              <Carousel responsive={responsive}>
                {
                  data1.map((e) => {
                    return (
                      <>
                        <div className="col-md-10 mx-auto top-pick-carousel-col">
                          <div>
                            <div className="card card-display">
                              <Image src="creame3.jpg" className="card-img-top top-pick-image" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus molestie nisl vitae hendrerit. Integer sed dolor vel metus convallis egestas at eget purus.</p>
                                <a href="#" className="btn btn-primary">Have a look</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </Carousel>
            </div>
          </div>
        </div>

      </div>




    </>
  )
}