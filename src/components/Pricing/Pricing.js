import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, benefits: [
            'lifetime free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 2, name: 'Regular', price: 9.99, benefits: [
            'everything on free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 3, name: 'Premium', price: 19.99, benefits: [
            'everything on Regular',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]}
    ];
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl text-white font-mono'>Best deals of the town</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam consequatur libero recusandae, illum provident quisquam nulla aliquid totam veniam.</p>
            <div className='grid md:grid-cols-3 gap-7 mt-8'>
                {
                    pricingOptions.map(option => <PricingOptions
                        key={option.id}
                        option={option}
                    ></PricingOptions>)
                }
            </div>
        </div>
    );
};

export default Pricing;