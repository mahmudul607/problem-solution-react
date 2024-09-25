import { useMemo, useState } from "react";

const useCategoryFilter = ({ products }) => {
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
            let mathPriceRange;
            if (category) {
                matchCategory = product.category === category;
            } 


            if (name !== '') {

                matchName = product.name === name;
            }
            if (priceRange[0] >= 0 && priceRange[1] <= 1) {
                mathPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
            }

            return matchCategory && matchName && mathPriceRange;

        });
    }, [category, name, priceRange, products]);


    return { 
        filteredProducts,
        updateWithName, 
        updateWithCategory,
         updateWithPrice 
        };

};

export default useCategoryFilter;