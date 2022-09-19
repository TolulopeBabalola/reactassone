import React from 'react'
import Image from "react-bootstrap/Image";

function Home({Abt, Cnt}) {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner mb-3">
                            <div class="carousel-item active">
                                <Image src="https://cdn.pixabay.com/photo/2015/11/19/06/19/dubai-1050418_1280.jpg" class="d-block"/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Alabian Technologies</h5>
                                    {/* <p>Home for coding 24/7 in Lagos Nigeria</p> */}
                                    <div className=' topbtn d-flex pt-2'>
                                    <button className='btn btn-outline-dark offset-md-4'>{Abt}</button>
                                    <button className='btn btn-outline-dark offset-md-1'>{Cnt}</button>
                                    </div>     
                                </div>
                            </div>
                            <div class="carousel-item">
                            <Image src="https://cdn.pixabay.com/photo/2017/12/21/23/44/skyscraper-3032786_1280.jpg" class="d-block"/>
                                <div class="carousel-caption d-none d-md-block">
                                <h5>Dr. Ernest</h5>
                                    {/* <p>First class coding doctor</p> */}
                                    <div className=' topbtn d-flex pt-2'>
                                    <button className='btn btn-outline-dark offset-md-4'>{Abt}</button>
                                    <button className='btn btn-outline-dark offset-md-1'>{Cnt}</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                            <Image src="https://cdn.pixabay.com/photo/2015/11/06/11/48/office-building-1026492_1280.jpg" class="d-block"/>
                                <div class="carousel-caption d-none d-md-block">
                                <h5>Coding School</h5>
                                    {/* <p>Keep learning at your pace</p> */}
                                    <div className=' topbtn d-flex pt-2'>
                                    <button className='btn btn-outline-dark offset-md-4'>{Abt}</button>
                                    <button className='btn btn-outline-dark offset-md-1'>{Cnt}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
    </div>
  )
}

export default Home