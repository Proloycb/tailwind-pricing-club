import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOptions = ({option}) => {
    const {name, price, benefits} = option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className='bg-indigo-300 py-4 rounded text-xl font-bold'>{name}</h1>
            <p>
                <span className='text-4xl font-bold'>${price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-green-500 flex justify-center items-center w-full py-2 rounded mt-6 text-white hover:text-green-700'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOptions;