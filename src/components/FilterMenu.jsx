import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux"

import {BsCartPlus} from 'react-icons/bs'
import { addOrder } from "../rtk/FoodSlices/OrderFood";
import { fetchProducts } from "../rtk/FoodSlices/ProductsFoodSlice";




function FilterMenu() {
  const menu = useSelector((state) => state.allProducts.products);
  const { status, error } = useSelector((state) => state.allProducts.products);


  

  const dispatch = useDispatch();

  console.log(menu)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [filteredMenu, setFilteredMenu] = useState(menu);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState(null);

  const productType = ["burger", "pizza", "salad", 'chicken' ,"All"];
  const priceRange = [2, 3, 4, 5];



  useEffect(() => {
    setFilteredMenu(menu);
  }, [menu]);

  const filterType = (category) => {
    const filtered = category === "All" ? menu : menu.filter(item => item.category === category);
    setSelectedType(category);
    setSelectedPrice(null);
    setFilteredMenu(filtered);
  };

  const filterPrice = (price) => {
    const filtered = menu.filter(item => item.price === price);
    setSelectedType("All");
    setSelectedPrice(price);
    setFilteredMenu(filtered);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  return (
        <div className="  max-w-[1640px] m-auto p-6">
          
          <h2 className=' flex justify-center  mb-4 items-center m-auto text-[#f97316] 
            text-[25px] md:[35px] font-bold font_2'>Top Rated Menu Items</h2>
            <div className="flex  flex-col lg:flex-row  justify-between items-center ">
                <div className="flex flex-col ">
                    <h3 className='  text-center  text-[19px] font-medium  text-gray-600 p-3'>Filter Type</h3>
                  <div className="   flex justify-start items-center   flex-wrap  ">
                    {
                      productType.map((protype) => (
                      <div key={protype}> 
                      <button  
                        onClick={()=> {filterType(protype)}}
                        className='   mr-[12px] border-[#f97316] hover:bg-[#f97316] 
                        transition duration-300  hover:text-white  mb-2'>
                        {protype}
                      </button>
                      </div> 
                      ))
                    }
                  </div>
                </div>
              
                <div>
                    <h3 className='   text-center  text-[19px]  font-medium  text-gray-600 p-3'> 
                        Filter Price
                    </h3>
                    <div className=" flex justify-start items-center   flex-wrap ">
                        {
                          priceRange.map((price)=> (
                            <button key={price}  onClick={()=> { filterPrice(price)}}
                            className=' mr-[12px] border-[#f97316] hover:bg-[#f97316]
                            transition duration-300  hover:text-white  mb-2'>{price}$ </button>
                          ))
                        }
                    </div>
                </div>
          </div>
        
        {/* Filter Menu */}
                {/* Fliter Menu */}
                <div className=' grid  sm:grid-cols-2 
                gap-4  md:gap-4  w-full  md:grid-cols-3 
                lg:grid-cols-4 my-4  '>
          {
            filteredMenu.map((foot)=> {
              return (
                <div key={foot.id} 
                    className=' shadow-lg  rounded-lg rounded-t-lg  relative '>
                    <BsCartPlus size={25} 
                    className=" absolute top-0 right-0 bg-orange-600 
                    w-[30px] h-[30px]  rounded-l-lg  
                    p-1 cursor-pointer  text-white" />
                    <img  src={foot.image} 
                    className=' object-cover max-w-full h-[300px] w-full rounded-sm '
                    alt={foot.name} />
                    <div className='flex font-bold m-1  justify-between items-center  p-2 mb-1'>
                      <p>{foot.name}</p>
                      <p>
                        <span 
                          className="bg-orange-600 text-sm rounded-[50px] text-white p-1 ">
                          {foot.price}$
                        </span>
                      </p>
                    </div>
                    <button 
                    onClick={()=> {dispatch(addOrder(foot))}}
                    className="  text-[#f97316] m-[10px] border-[#f97316]  
                    hover:text-[#fff] hover:bg-[#f97316]  
                    transition duration-300">
                        Add Order
                    </button>
                </div>
              )
            })
          }
        </div>
          
      </div>
    );

}

export default FilterMenu
