import React from 'react'
import Toggle from '../../toggle/Toggle';
import Searchbar from '../../components/searchbar/Searchbar';

const Home = () => {
  return (
    <div>
        <div className='bg-green-500 pt-5'>
          <div className='text-white p-5'>
            <h2 className='text-5xl font-bold'>Find your next stay</h2>
            <p className='text-lg mt-2'>Search low prices on hotels, homes and much more...</p>
          </div>
        <Searchbar/>
        </div>
    </div>
  )
}

export default Home;