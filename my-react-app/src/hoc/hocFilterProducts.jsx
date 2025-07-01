import {  useState } from 'react';
import useProducts from '../hooks/useProducts';

const hocFilterProducts = (Components) => {

    return function () {
        const [query, setQuery] = useState("");
        const { products, loading, error } = useProducts();
        
        const changeImput = (event) => { 
            setQuery( event.target.valueto.toLowerCase() );

        };

        const serch = (productsList) => {
            return filterProducts = productsList.filter((product) => {
                return product.name.toLowerCase().includes(query);
            });

            return filterProducts;
        };
    

        return (

            <>

            <div>
                <imput
                    type="text"
                    placeholder="Buscar productos..."
                    onChange={changeImput}
                />
            </div>
            <Components
                products={search(products)}
            />
            </>
        );

    }

}
export default hocFilterProducts;