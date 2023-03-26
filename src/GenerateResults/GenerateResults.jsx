import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './GenerateResults.css';
import axios from 'axios';
import vector from '../assets/Vector.png'
import {Configuration, OpenAIApi} from 'openai'

function GenerateResults() {
  const [dis, setdisable] = useState(false)
  const [data, setdata] = useState(false);
  const [error,setError]=useState('')
  const [prodS,setProd]=useState()
  const [storNameS,setStore]=useState()
  const [platformS,setPlatform]=useState()
  const [usernames,setUsername]=useState()
  const [bioS,setBio]=useState()
  const [marketing_campaignS,setMarketingCampaign]=useState()
  const [web_designS,setWebDesign]=useState()
  const [ad_ideaS,setAdIdea]=useState()
  const [scaling,setScaling]=useState()
  const [subscribed,setIsSubscribed]=useState()


  useEffect=(()=>{
	let subs=localStorage.getItem("isSubscribed")
	setIsSubscribed(subs)
	debugger
  })

  

  const configuration = new Configuration({
	apiKey: process.env.REACT_APP_API_KEY,
  });

  const generate_response=async(data)=>{
	const openai= new OpenAIApi(configuration);
	try{
		const completion = await openai.createCompletion({
			prompt:`${data}`,
			model: 'text-davinci-003',
			max_tokens: 1024,
			n: 1,
			stop: 'None',
			temperature:0.5
	});
	return completion.data.choices[0].text.toString().replace(/\n/g, '')
	}
	catch(err){
		setError(err.message)
		setdisable(false)
	}
	
  }

  	let store_name;
	let platform;
	let username;
	let bio;
	let marketing_campaign;
	let web_design;
	let ad_idea;
	let product; 

  const setData=async()=>{
	setdisable(true)
	setError('')
	product = await generate_response("Can you name one single unique product in no more than 5 words (limitations: no food, NO NAME BRAND PRODUCTS, something that can be shipped on the internet)");
	await setProd(product)

	if(product){
		let store_name = await generate_response(`Recommend a store name for ${product}`)
		await setStore(store_name)
		if(store_name){
			platform = await generate_response(`Recommend one platform to advertise ${product}`)
			await setPlatform(platform)
			
			if(platform){
				username = await generate_response(`Recommend a username for a social account that advertises ${product}`);
				await setUsername(username)
				if(username){
					bio=await generate_response(`Create a BIO for a social media account that sells ${product}`);
					await setBio(bio)

				if(bio){
					marketing_campaign = await generate_response(`What would be an effective 5-step marketing campaign for {product} on ${platform}`);
					await setMarketingCampaign(marketing_campaign)
					if(marketing_campaign){
						web_design = await generate_response(`code an E-commerce website that sells ${product} with the name ${store_name} and has a simple, modern, sleek, consistent, and effective design for the user to purchase ${product} and that includes: unique colorscheme, catalog page, add to cart, and mission statement. All in HTML`)
						await setWebDesign(web_design)
						if(web_design){
							ad_idea = await generate_response(`Create an idea for an video Advert for an E-commerce store that sells ${product} and is named ${store_name} and whose marketing plan is ${marketing_campaign}`);
							await setAdIdea(ad_idea)

						if(ad_idea){
							let scaling = await generate_response(`Create a 5-step plan in order to help scale an E-commerce store that sells ${product} and is named ${store_name} and whose markeitng plan is ${marketing_campaign} and is beign addvertized on ${platform}`);
							await setScaling(scaling)
							setdata(true)
							setdisable(false)

						}
						}
					}
				}
				}
			}
		}
		
	}
  }

  return (
    <div>
		{!data? 
		<div className='d-flex align-items-center justify-content-center col-md-12 gen-rslt'>
        <div className='card'>
          <div className='card-body '>
            <div className='row m-5'>
              <span className=''>Generating</span> <br />
              <span className='dropship-ai'> Results...</span>
            </div>
            <form className='m-3'>
              <div className='m-3 btn-div'>
                <button
                  type='button'
                  disabled={dis}
                  onClick={setData}
                  className='btn btn-primary'
                >
                  Get Results
                </button>
              </div>
              {dis ? (
                <p className='dropship-ai'>
                  please wait while we are processing your request
                </p>
              ) : (
                ''
              )}
			  {
				error !== ''?(
					<p className='text-danger'>
					{error}
				  </p>
				):''
			  }
            </form>
          </div>
        </div>
      </div>:
	  <div className='page-login d-flex align-items-center justify-content-center'>
		  {/* {showToast ? <Toast color={color} content={content} /> : ''} */}
			<div className='row'>
			  <div className='col-9 d-flex justify-content-center flex-column '>
				<h1>
				  <span className='dropship-ai'> DropShip.Ai</span><br />
				  <span className=''> Results</span> 
				</h1>
				<form className='mt-2'>
				  <div  className='d-flex justify-content-center flex-column'>
					<label for='userName' className='form-label'>
					  Product
					</label>
					<input
					  type='email'
					  className='form-control sp-input'
					  id='userName'
					  aria-describedby='emailHelp'
					  value={prodS}
					/>
				  </div>
				  <div  className='d-flex justify-content-center flex-column'>
					<label for='email' className='form-label'>
					  Store Name
					</label>
					<input
					  type='email'
					  className='form-control sp-input'
					  id='email'
					  aria-describedby='emailHelp'
					  value={storNameS}
					  placeholder='Name'
					/>
				  </div>
				  <div  className='d-flex justify-content-center flex-column'>
					<label for='password' className='form-label'>
					  Platform
					</label>
					
					<input
					  type='email'
					  className='form-control sp-input'
					  id='password'
					  value={platformS}
					  placeholder='Enter Password'
					/>
				  </div>
				  <div  className='d-flex justify-content-center flex-column'>
					<label for='confirmPassword' className='form-label'>
					  Social Media Username
					  {subscribed !=true ? <img
                    src={vector}
                    alt='socials'
                    className='img-fluid animated sp-img'
                    /> :''}
					</label>
					
					<input
					  type='email'
					  value={usernames}
					  className='form-control sp-input'
					  id='confirmPassword'
					  placeholder='Confirm Password'
					  onBlur={true}
					/>
				  </div>
				  <div  className='d-flex justify-content-center flex-column'>
					<label for='confirmPassword' className='form-label'>
					  Bio
					  {subscribed !=true ? <img
                    src={vector}
                    alt='socials'
                    className='img-fluid animated sp-img'
                    /> :''}
					</label>
				
					<input
					  type='email'
					  value={bioS}
					  className='form-control sp-input '
					  id='confirmPassword'
					  placeholder='Confirm Password'
					/>
				  </div>
				  {/* <div >
					<label for='confirmPassword' className='form-label'>
					  Socials
					</label>
					<input
					  type='password'
					  value={productdata.socials}
					  className='form-control'
					  id='confirmPassword'
					  placeholder='Confirm Password'
					/>
				  </div> */}
				  <div  className='d-flex justify-content-center flex-column'>
					<label for='confirmPassword' className='form-label'>
					  Marketing Campaign
					  {subscribed !=true ? <img
                    src={vector}
                    alt='socials'
                    className='img-fluid animated sp-img' 
                    /> :''}
					</label>
					
					<input
					  type='email'
					  value={marketing_campaignS}
					  className='form-control sp-input'
					  id='confirmPassword'
					  placeholder='Confirm Password'
					/>
				  </div>
				  <div  className='d-flex justify-content-center flex-column'>
					<label for='confirmPassword' className='form-label'>
					  Web Design
					  {subscribed !=true ? <img
                    src={vector}
                    alt='socials'
                    className='img-fluid animated sp-img'
                    /> :''}
					</label>
					
					<input
					  type='email'
					  value={web_designS} 
					  className='form-control sp-input'
					  id='confirmPassword'
					  placeholder='Confirm Password'
					/>
				  </div>
				  <div className='mb-3 d-flex justify-content-center flex-column'>
					<label for='confirmPassword' className='form-label'>
					  Ad Idea 
					  {subscribed !=true ? <img
                    src={vector}
                    alt='socials'
                    className='img-fluid animated sp-img'
                    /> :''}
					</label>
					<input
					  type='email'
					  value={ad_ideaS}
					  className='form-control sp-input' 
					  id='confirmPassword'
					  placeholder='Confirm Password'
					/>
				  </div>
				  {/* <div className='mb-3'>
					<label for='confirmPassword' className='form-label'>
					  Scaling
					</label>
					<input
					  type='password'
					  value={scaling}
					  className='form-control'
					  id='confirmPassword'
					  placeholder='Confirm Password'
					/>
				  </div> */}
				</form>
				<div className='mt-3'>
				</div>
				<div className='mt-3'>
				To Unlock the FULL POWER of DropShip.AI buy the premium version now!  Click here {' '}
				  <NavLink to='/shop'> here</NavLink> 
				</div>
			  </div>
			</div>
	  </div>
	}
      
    </div>
  )
}

export default GenerateResults
