import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products]);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product detail page
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                        {
                            related.map((item, index) => (
                                <ProductItem 
                                    key={index} 
                                    id={item._id} 
                                    name={item.name} 
                                    price={item.price} 
                                    image={item.image} 
                                    onClick={() => handleProductClick(item._id)} // Pass click handler
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelatedProducts;