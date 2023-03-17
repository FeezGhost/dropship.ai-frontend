import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './GenerateResults.css';
import axios from 'axios';
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
		<div className='row'>
		  {/* {showToast ? <Toast color={color} content={content} /> : ''} */}
		  <div className='col-10 mx-auto'>
			<div className='row'>
			  <div className='col-md-7 ml-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column '>
				<h1>
				  <span className='dropship-ai'> DropShip.Ai</span><br />
				  <span className=''> Results</span> 
				</h1>
				<form className='mt-2'>
				  <div >
					<label for='userName' className='form-label'>
					  Product
					</label>
					<input
					  type='email'
					  className='form-control'
					  id='userName'
					  aria-describedby='emailHelp'
					  value={prodS}
					/>
				  </div>
				  <div >
					<label for='email' className='form-label'>
					  Store Name
					</label>
					<input
					  type='email'
					  className='form-control'
					  id='email'
					  aria-describedby='emailHelp'
					  value={storNameS}
					  placeholder='Name'
					/>
				  </div>
				  <div >
					<label for='password' className='form-label'>
					  Platform
					</label>
					<input
					  type='email'
					  className='form-control'
					  id='password'
					  value={platformS}
					  placeholder='Enter Password'
					/>
				  </div>
				  <div >
					<label for='confirmPassword' className='form-label'>
					  Social Media Username
					</label>
					<input
					  type='email'
					  value={usernames}
					  className='form-control'
					  id='confirmPassword'
					  placeholder='Confirm Password'
					/>
				  </div>
				  <div >
					<label for='confirmPassword' className='form-label'>
					  Bio
					</label>
					<input
					  type='email'
					  value={bioS}
					  className='form-control'
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
				  <div >
					<label for='confirmPassword' className='form-label'>
					  Marketing Campaign
					</label>
					<input
					  type='email'
					  value={marketing_campaignS}
					  className='form-control'
					  id='confirmPassword'
					  placeholder='Confirm Password'
					/>
				  </div>
				  <div >
					<label for='confirmPassword' className='form-label'>
					  Web Design
					</label>
					<input
					  type='email'
					  value={web_designS} 
					  className='form-control'
					  id='confirmPassword'
					  placeholder='Confirm Password'
					/>
				  </div>
				  <div className='mb-3'>
					<label for='confirmPassword' className='form-label'>
					  Ad Idea
					</label>
					<input
					  type='email'
					  value={ad_ideaS}
					  className='form-control'
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
				  if you already have an account click{' '}
				  <NavLink to='/login'> here</NavLink> to login
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	}
      
    </div>
  )
}

export default GenerateResults
