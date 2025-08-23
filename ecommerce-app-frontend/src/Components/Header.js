import {BsSearch} from 'react-icons/bs';
import React from 'react';
import {NavLink,Link} from "react-router-dom";

const Header = () => {
	return (
		<>
        <header className='header-top-strip'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <p className='text-white mb-0'>Welcome to our store</p>
                    </div>
                    <div className='col-6'>
                        <p className='text-end  text-white  mb-0'>Hotline:  <a className="text-white" href='tel:+123456789'>+123456789</a> </p>
                    </div>
                </div>
            </div>
            
        </header>
        <header className='header-upper py-3'> 
            <div className='container-xxl'>
                <div className='row align-items-center'>
                    <div className='col-2'>
                        <h1>
                            <Link className='text-white'>
                                E-Com
                            </Link>
                        </h1>
                    </div>
                    <div className='col-5'>
                        <div className="input-group">
                        <input type="text" className="form-control py-2" 
                        placeholder="Search Product Here" 
                        aria-label="Search Product Here" 
                        aria-describedby="basic-addon2" />
                        <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='header-upper-links d-flex align-items-center justify-content-between'>
                            <div>
                                <Link className='d-flex align-items-center text-white gap-10'>
                                <img src='images/compare.svg' alt='compare' />
                                    <p className='mb-0'>Compre <br /> Product </p>
                                </Link>
                            </div>
                            <div>
                               <Link className='d-flex align-items-center text-white gap-10'>
                                <img src='images/wishlist.svg' alt='wishlist' />
                                    <p className='mb-0'>Favourite <br /> wishlist </p>
                                </Link>
                            </div>
                            <div>
                                <Link className='d-flex align-items-center text-white gap-10'>
                                <img src='images/user.svg' alt='user' />
                                    <p className='mb-0'>Login <br /> My Account </p>
                                </Link>
                            </div>
                            <div>
                                <Link className='d-flex align-items-center text-white gap-10'>
                                <img src='images/cart.svg' alt='cart' />
                                    <div className='d-flex flex-column gap-10'>
                                        <span className='badge bg-white text-dark'>0</span>
                                        <p className='mb-0'>500.0$</p>

                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        <header className='header-bottom py-3'>
            <div className='container-xxl'>
                <div className='row'>
                   <div className='col-12'>
                    <div className='menu-bottom d-flex align-items-center gap-30'>

                        <div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle gap-15  d-flex align-item-center bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src='images/menu.svg' alt='' /><span className='me-5 d-inline-block'>shop Categories</span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                    <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='menu-links'>
                            <div className='d-flex align-items-center gap-15'>
                                <NavLink className='text-white' to="/" >Home</NavLink>
                                <NavLink className='text-white' to="/" >Our Store</NavLink>
                                <NavLink className='text-white' to="/" >Blogs</NavLink>
                                <NavLink className='text-white' to="/" >Contact</NavLink>
                            </div>
                        </div>

                    </div>
                   </div>
                </div>
            </div>
        </header>

        </>
	);
};

export default Header;
