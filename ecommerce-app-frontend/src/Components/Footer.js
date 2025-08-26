
import React from 'react';
import {Link} from "react-router-dom";
import { FaLinkedin,FaGithub,FaYoutube,FaFacebook } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<footer className='py-3'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-5'>
							<div className='footer-top-data d-flex gap-30 align-item-center'>

								<img src='images/newsletter.png' alt='newsletter' />
								<h2 className='mb-0 text-white'>Sing Up for Newsletter</h2>

							</div>
						</div>
						<div className='col-7'>
								<div className="input-group">
									<input type="text" className="form-control py-2" 
									placeholder="You Email Adders" 
									aria-label="You Email Adders" 
									aria-describedby="basic-addon2" />
									<span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
									</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className='py-4'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-4'>
							<h4 className="text-white mb-4">Contact Us</h4>
							<div className='footer-links d-flex flex-column'>
								<address className='text-white fx-6'>
									No:180 Dolakndha Dehiaththakandiya <br/> 
									Postal Code:3365 
								</address>
								<a href='tel:+94781927370' className='mt-2 d-block mb-1 text-white'>+94781927370</a>
								<a href='mailto:kalharp84@gmail.com' className='mt-2 d-block mb-0 text-white'>kalharp84@gmail.com</a>
								<div className='social-icons d-flex align-items-center gap-30 mb-4'>
									<a className='text-white' href='#' ><FaLinkedin className='fs-4'/></a>
									<a className='text-white' href='#' ><FaGithub className='fs-4'/></a>
									<a className='text-white' href='#' ><FaYoutube className='fs-4'/></a>
									<a className='text-white' href='#' ><FaFacebook className='fs-4'/></a>
								</div>
							</div>
						</div>
						<div className='col-3'>
							<h4 className="text-white mb-4">Information</h4>
							<div className='footer-links d-flex flex-column'>
								<Link className="text-white py-2 mb-1">Privacy Policy</Link>
								<Link className="text-white py-2 mb-1">Refund Policy</Link>
								<Link className="text-white py-2 mb-1">Shipping Policy</Link>
								<Link className="text-white py-2 mb-1">Terms of Service</Link>
								<Link className="text-white py-2 mb-1">Blogs</Link>
							</div>
						</div>
						<div className='col-3'>
							<h4 className="text-white mb-4"> Account</h4>
							<div className='footer-links d-flex flex-column'>
								<Link className="text-white py-2 mb-1">Search</Link>
								<Link className="text-white py-2 mb-1">About</Link>
								<Link className="text-white py-2 mb-1">Faq</Link>
								<Link className="text-white py-2 mb-1">Contact</Link>
								<Link className="text-white py-2 mb-1">Size Chart</Link>
								
							</div>
						</div>
						<div className='col-2'>
							<h4 className="text-white mb-4">Links</h4>
							<div className='footer-links d-flex flex-column'>
								<Link className="text-white py-2 mb-1">Laptop</Link>
								<Link className="text-white py-2 mb-1">Headphones</Link>
								<Link className="text-white py-2 mb-1">Smartphones</Link>
								<Link className="text-white py-2 mb-1">Tablets</Link>
								<Link className="text-white py-2 mb-1">Watch</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className='py-4'>
				<div className='container-xxl'>'
					<div className='row'>
						<div className='col-12'>
							<p className='text-center md-0 text-white'>&copy;{new Date().getFullYear()};Powered by Developer's Corner
							</p>
						</div>
					</div>
				</div>
			</footer>
			
		</>
	);
};

export default Footer;
