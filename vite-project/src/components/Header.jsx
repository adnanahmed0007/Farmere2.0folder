import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [Showfarmers, setShowfarmers] = useState(false);
  const [Showbuyers, setShowbuyers] = useState(false);

  const linkClasses =
    "px-5 py-2 text-sm md:text-base bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition";

  return (
    <div className="bg-gray-800 p-4 shadow-md">
      {(Showfarmers || Showbuyers) && (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-9 rounded-3xl shadow-lg bg-[#0F3850] ">
          <h1 className="text-green-700 text-2xl font-bold mb-4 md:mb-0">
            {Showfarmers ? "Farmer Portal" : "Buyer Portal"}
          </h1>
          <nav className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
            <Link to="/" className={linkClasses}>
              Home
            </Link>

            {Showfarmers && (
              <>
                <Link to="/login" className={linkClasses}>
                  Login
                </Link>
                <Link to="/sign" className={linkClasses}>
                  Sign Up
                </Link>
                <Link to="/addcrops" className={linkClasses}>
                  Add Crop
                </Link>
                <Link to="/sellingcrops" className={linkClasses}>
                  Your Selling Crops
                </Link>
                <Link to="/getcropdetails" className={linkClasses}>
                  Crop Details
                </Link>
                <Link to="/getalldata" className={linkClasses}>
                  All Crop Data
                </Link>
                <Link to="/userInfo" className={linkClasses}>
                  User Info
                </Link>
                <Link to="/upadtecrop" className={linkClasses}>
                  Update Crop
                </Link>
                <Link to="/farmersbuyerdata" className={linkClasses}>
                  All Buyers Data
                </Link>
                <Link to="/buyercropnamebid" className={linkClasses}>
                  CropBid
                </Link>
                <Link to="/buyercropnamelocation" className={linkClasses}>
                  Check Buyer Crop loctaion
                </Link>
                <Link to="/buyercropnamequantity" className={linkClasses}>
                  Check Buyer Crop quantity
                </Link>
                <Link to="/buyercropnamequantityplace" className={linkClasses}>
                  Check Buyer Crop quantity place
                </Link>
                <Link to="/logout" className={linkClasses}>
                  Logout
                </Link>
                
                 
              </>
            )}

            {Showbuyers && (
              <>
                <Link to="/loginbuyers" className={linkClasses}>
                  Login
                </Link>
                <Link to="/signupbuyers" className={linkClasses}>
                  Sign Up
                </Link>
                <Link to="/buycroponly" className={linkClasses}>
                  Buy Crop
                </Link>
                <Link to="/buycropnamelocation" className={linkClasses}>
                  Buy by Location
                </Link>
                <Link to="/buycropnamequantity" className={linkClasses}>
                  Buy by Quantity
                </Link>
                <Link to="/buylocationquantity" className={linkClasses}>
                  Location & Quantity
                </Link>
                <Link to="/buyerinfo" className={linkClasses}>
                  Buyer Info
                </Link>
                <Link to="/buyerbid" className={linkClasses}>
                  Buyer Bid
                </Link>
                <Link to="/buyerallbisds" className={linkClasses}>
                  Your Bids
                </Link>
                <Link to="/allthebuyersBids" className={linkClasses}>
                   All the buyers Bid
                </Link>
                <Link to="/buyerbidscropwise" className={linkClasses}>
                   Buyerbids cropwise
                </Link>
                <Link to="/buyerlogout" className={linkClasses}>
                  Logout
                </Link>
                
               
                 
              </>
            )}
          </nav>
        </div>
      )}

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => {
            setShowfarmers(true);
            setShowbuyers(false);
          }}
          className="px-6 py-2 bg-yellow-500   font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-white transition duration-300"
        >
          Farmer Account
        </button>
        <button
          onClick={() => {
            setShowbuyers(true);
            setShowfarmers(false);
          }}
          className="px-6 py-2 bg-blue-500  font-semibold rounded-lg shadow-md hover:bg-grays-600 hover:text-white transition duration-300"
        >
          Buyer Account
        </button>
      </div>
    </div>
  );
};

export default Header;
