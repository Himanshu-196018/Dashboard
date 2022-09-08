import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='mt-24'>
      <p className='dark:text-gray-200 text-gray-700 text-center m-20'>&copy; {year} All rights reserved by Industry.com</p>
    </div>
  )
}

export default Footer