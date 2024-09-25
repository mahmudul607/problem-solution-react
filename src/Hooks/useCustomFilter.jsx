import {  useMemo, useState } from "react";

const useCustomFilter = ( products ) => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [priceRange, setPriceRange] = useState([0, Infinity]);


    const updateWithCategory = (newCategory) => {
        setCategory(newCategory);

    }
    const updateWithName = (newName) => {
        setName(newName);

    }
    const updateWithPrice = (minPrice, maxPrice) => {
        setPriceRange([minPrice, maxPrice]);

    }

    

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {

           
            let matchCategory;
            let matchName;
            let matchPriceRange;
            if (category) {
                matchCategory = product.category === category;
            } 
            else{
                matchCategory = true;
            }


            if (name) {

                matchName = product.name === name;
            }
            else{
                matchName=true;

            }
            if (priceRange[0] >= 0) {
                matchPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
            }
            else{
                matchPriceRange =true;
            }

            return matchCategory && matchName && matchPriceRange;

        });
    }, [category, name, priceRange, products]);


    return { 
        filteredProducts,
        updateWithName, 
        updateWithCategory,
         updateWithPrice 
        };

};

export default useCustomFilter;