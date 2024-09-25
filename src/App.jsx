
import './App.css'
import useCustomFilter from './Hooks/useCustomFilter';


function App() {

  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, name: 'Shoes', category: 'Fashion', price: 100 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 200 },
    { id: 4, name: 'Ball', category: 'Game', price: 80 },
    { id: 5, name: 'Foot Ball', category: 'Game', price: 800 },
    { id: 6, name: 'Shirt', category: 'Fashion', price: 300 },
    { id: 7, name: 'Shirt', category: 'Fashion', price: 30 }
  ];

  const { filteredProducts, updateWithName, updateWithCategory, updateWithPrice } = useCustomFilter(products);

  const handleCategory = (e) => {
    updateWithCategory(e.target.value);
  };
  const handleName = () => {
    const nameText = document.getElementById('name').value;
    console.log(nameText);
    updateWithName(nameText);
  };
  const handlePrice = (e) => {
    const [min, max] = e.target.value.split('-').map(Number)
    updateWithPrice(min, max);
    console.log(min, max)
  };


  return (
    <div className='text-center'>
      <div className="navbar bg-slate-500 text-black">
        <div className='md:flex gap-6 '>
          <div className='mx-4'>
            <label >Category: </label>
            <select  onChange={handleCategory}>
              <option value=''>All</option>
              <option value='Electronics'>Electronics</option>
              <option value='Fashion'>Fashion</option>
              <option value='Game'>Game</option>
            </select>
            <span className='ml-4'>
              <input className='px-2 rounded-lg' type="text" id="name" name="name" placeholder="name" />
              <button className='mx-4' onClick={handleName}>Find</button>
            </span>
          </div>
          <br />
          <div>
            <label>Price Range: </label>
            <select onChange={handlePrice}>
              <option value='0-10000'>All Prices</option>
              <option value='0-100'>0 - 100</option>
              <option value='100-500'>100 - 500</option>
              <option value='500-1000'>500 - 1000</option>
              <option value='1000-2000'>1000 - 2000</option>
            </select>
          </div>
        </div>

      </div>


      <div>
        <ul className='text-center py-6 grid grid-cols-1 sm-[767.99px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-4'>
          {filteredProducts.map((product) => (
            <div key={product.id} className="card bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>Category:{product.category}</p>
                <p>Price:${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </ul>

      </div>


    </div>
  )
}

export default App
