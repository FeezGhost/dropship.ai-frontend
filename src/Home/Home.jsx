import React from 'react';
import socials from '../assets/socials.png';
import cartbox from '../assets/cart-box.png';
import uparrow from '../assets/uparrow.png';
import thumpsup from '../assets/thumbsup.png';
import board from '../assets/ai-board.png'
import userfriendly from '../assets/userfriendly.png'
import bulb from '../assets/bulb.png'
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';
import mblInteract from '../assets/mbl-interact.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import './Home.css';




function Home() {
  return (
	<>
	<section id="header" className="d-flex align-items-center mt-5">
		 <div className="container-fluid nav_bg"> 
			<div className="row">
			
				<div className="col-10 mx-auto">
					<div className='row'>
					<div className="col-md-6 mx-auto d-flex justify-content-center flex-column blur">
					</div>
					<div className='col-md-6 ml-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column blur-two'>
						<h1> 
							<span className='dropship'> DropShip.</span> 
							<span className='ai'> Ai</span> 
						</h1>
						<h7>An AI-powered drop shipping starter kit. tool designed to make your drop shipping journey as easy and quick as possible.</h7>
						<div className="mt-3">
							<NavLink to="/" className="btn-get-started">
								Create Your Account
							</NavLink>
						</div>
					</div>
					<div className='col-lg-6 order-2 order-lg-2 header-img d-flex justify-content-center flex-column'>
						<img src={socials} alt="socials" className='img-fluid animated'/>
					</div>
					</div>
				</div>
				</div>
			</div>
	</section>
	<section id="header" className="d-flex align-items-center mt-5">
		 <div className="container-fluid nav_bg mt-5"> 
			<div className="row">
					<div className='col-md-6 ml-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center backdrop-blur'>
						<div className="flex-row">
							<div className="rectangle">
										<img src={board} alt="ai-board"/> <br/>
									<span className='text-color'> Ai Enabled</span>
								</div>
								  <div className="rectangle-three flex backdrop-blur">
                                    <img src={bulb} alt="ai-board"/> <br/>
                            	      <span className='text-color-three'> Efficient</span>
                            	</div>  
						</div>
						<div className="rectangle-two">
							<img src={userfriendly} alt="ai-board"/> <br/>
						</div> 
					</div>
					<div className='col-md-5 ml-5 pt-5 pt-lg-0 order- order-lg-2 d-flex justify-content-center flex-column'>
                        <h1> 
                            <span className='are-you'> Why you</span> <br/>
                            <span className='ready'> Choose us?</span> 
                        </h1>
                        <h7>Choose our AI-powered starter kit for efficient, beginner-friendly drop shipping. Improved productivity, profitability and expert support ensure success.</h7>
                        <div className="mt-3">
                            <p>
                            <NavLink to="/" className="">
                                Read More
                            </NavLink>
                            </p>
                        </div>
                    </div>
					
			</div>
			</div>
	</section>
	<section id="header" className="d-flex align-items-center mt-3">
		 <div className="container-fluid nav_bg"> 
			<div className="row">
				<div className="col-10 mx-auto">
					<div className='row section-two-row'>
					<div className='col-md-6 ml-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column'>
						<h1> 
							<span className='ready'> Are You Ready</span> <br/>
							<span className='to'> to</span> 
							<span className='generate'> Generate?</span> 
						</h1>
						<div className="mt-3">
							<NavLink to="/" className="btn-yes">
								Yes
							</NavLink>
						</div>
					</div>
					<div className='col-lg-3  order-2 order-lg-2 cart-img d-flex ml-auto'>
						<img src={cartbox} alt="socials" className='img-fluid animated'/>
					</div>
					</div>
				</div>
				</div>
			
		</div>
	</section>
	<section id="header" className="d-flex align-items-center mt-5">
		 <div className="container-fluid nav_bg rect-info"> 
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row">
					<div className='col-lg-3 order-2 order-lg-2 header-img d-flex justify-content-center flex-column rect-one'>
					       <h4>Ai-Powered Product Research</h4>
							<h5>Highlighting the AI's ability to identify profitable products and trends in 
							real-time, helping users find success faster.</h5>
					</div>
					<div className='col-md-3 ml-5 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column rect-two'>
					       <h4>Automated Order Management</h4>
							<h5>Demonstrating how the AI handles all aspects of order management, freeing up time for users to focus on growth.</h5>
					</div>
					<div className='col-md-3 ml-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column rect-three'>
					       <h4>Customizable Marketing Strategies</h4>
							<h5>AI-powered marketing personalization generates strategies based on customer behavior to effectively reach target.</h5>
					</div>
					</div>
				</div>
			</div>
			</div>
	</section>
	<section id="header" className="d-flex align-items-center mt-10 ">
		 <div className="container-fluid nav_bg "> 
			<div className="row streamline-section">
				<div className="col-10 mx-auto">
					<div className='row highlight-section'>
					<div className='col-lg-5 order-2 order-lg-2 header-img d-flex justify-content-center flex-column dropship-mbl'>
						<img src={mblInteract} alt="mblInteract" className='img-fluid animated mblInteract'/>
					</div>
					<div className='col-md-4 ml-5 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column ai-streamlines'>
						<h1> 
							<span className='text-green'> Ai </span> 
							<span className=''>streamlines drop shipping  <br/>journey with starter tool</span> 
						</h1>
						<h7>AI streamlines drop shipping process with a beginner-friendly tool for improved efficiency.</h7>
						<span>AI Boosts Drop Shipping</span>
						<span>Streamlined Process</span>
						<span>Beginner-Friendly Tool</span>
						<span>Improved Efficiency</span>
						<div className="mt-3">
							<p>
							<NavLink to="/" className="">
								Read More
							</NavLink>
							</p>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
	</section>
	<section id="header" className="d-flex align-items-center mt-7 streamline-section">
		 <div className="container-fluid nav_bg"> 
			<div className="row">
				<div className="col-10 mx-auto">
					<div className='row'>
					<div className='col-md-9 ml-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column revolution-ai'>
						<h7>Revolutionize Your Drop Shipping with AI-Enabled, Beginner-Friendly <br/>Tools for Increased Efficiency and Profitability</h7>
						<div className="mt-3">
							<p>
							<NavLink to="/" className="explore-btn">
								Explore More
							</NavLink>
							</p>
						</div>
					</div>
					<div className='col-lg-3 order-2 order-lg-2 header-img d-flex justify-content-center flex-column'>
						<img src={uparrow} alt="socials" className='img-fluid animated'/>
					</div>
					</div>
				</div>
				</div>
			</div>
	</section>
	<section id="header" className="d-flex align-items-center mt-10 streamline-section">
		 <div className="container-fluid nav_bg"> 
		 <div className="row">
		 <div className="col-10 mx-auto ">
			<span className='credible-cus-text'>Credible customers <br/> </span>
			<span className='assess-text'> assessments.</span>
		</div>
		 </div>
		 <div className="row">
		 <Carousel>
        <div key="slide1" style={{ padding: 40, height: 300, marginLeft:'30rem' }}>
		<div className="testimonial-2">
			<h5>Asim</h5>
			<p>Hey there, I'm Kristina! I've called Western New York and Niagara Falls, NY home for most of my life, and am excited and eager to share its charm, history, and beauty with as many people as possible.</p>
		</div>
        </div>
        <div key="slide2" style={{ padding: 40, height: 300, marginLeft:'30rem' }}>
		<div className="testimonial-2">
			<h5>Adrian</h5>
			<p>Hey there, I'm Kristina! I've called Western New York and Niagara Falls, NY home for most of my life, and am excited and eager to share its charm, history, and beauty with as many people as possible.</p>
		</div>
        </div>
    </Carousel>

		 </div>
		 </div>
	</section>
	<section id="header" className="d-flex align-items-center ">
		 <div className="container-fluid nav_bg"> 
			<div className="row">
				<div className="col-10 mx-auto">
					<div className='row'>
					<div className='col-md-5 col-sm-8 ml-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column upgrade-premium'>
						<h1> 
							<span className='upgrade'> UPGRADE</span> 
							<span className='premium'> TO  PREMIUM</span> 
						</h1>
						<h7>UNLOCK ALL FEATURES - when you upgrade for a measly 7$ a month, you get access to the full functionality of DropShip.ai, and MORE!
						You will also be privy to ZERO price increase when we inevitably upgrade out systems, and become more and more advanced.</h7>
						<div className="mt-3">
							<NavLink to="/signup" className="btn-sign-up">
								Sign Up
							</NavLink>
						</div>
					</div>
					<div className='col-lg-5 order-2 order-lg-2 header-img d-flex justify-content-center flex-column thumbs-up-div mt-5'>
						<img src={thumpsup} alt="socials" 
						className='img-fluid animated'/>
					</div>
					</div>
				</div>
				</div>
			</div>
	</section>
	<Footer/>
	</>
  )
}

export default Home