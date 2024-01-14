import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux"

import { addOrder } from "../rtk/FoodSlices/OrderFood";
import { fetchProducts } from "../rtk/FoodSlices/ProductsFoodSlice";
import CardFood from "./CardFood";

function FilterMenu() {
  const menu = useSelector((state) => state.allProducts.products);
  const { status, error } = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [filteredMenu, setFilteredMenu] = useState(menu);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [activeLikeType,setactiveLinkeType] =useState('All');
  const [activeLinkePrice, setActiveLinkPrice] =useState(null)



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

  const handleLinketype = (type) =>{
    filterType(type)
    setactiveLinkeType(type)
    setActiveLinkPrice(null)
  }

  const handleLinkePrice =(price) => {
    filterPrice(price)
    setActiveLinkPrice(price)
    setactiveLinkeType(null)
  }


  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  return (
        <div className=" filetermenu  max-w-[1640px] m-auto p-6">
          
          <h2 className=' flex justify-center  mb-4 items-center m-auto text-[#f97316] 
            text-[25px] md:[35px] font-bold font_2'>Top Rated Menu Items</h2>
            <div className="flex  flex-col lg:flex-row  justify-between items-center ">
                <div className="flex flex-col ">
                    <h3 
                      className='  text-center  text-[19px] font-medium  text-gray-600 p-3'>
                      Filter Type
                    </h3>
                  <div className="   flex justify-start items-center   flex-wrap  ">
                    {
                      productType.map((protype) => (
                      <div key={protype}> 
                      <button  
                        onClick={()=> {
                          handleLinketype(protype)
                        }}
                        className={`  mr-[12px] border-[#f97316] 
                        transition duration-300   mb-2 
                        ${activeLikeType === protype  ? " text-[#fff] bg-[#f97316]  " : ' '}`}>
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
                            <button key={price} 
                              onClick={()=> {
                                handleLinkePrice(price)
                                }}
                            className={` mr-[12px] border-[#f97316] 
                            transition duration-300   mb-2 
                            ${activeLinkePrice === price ? "bg-[#f97316] text-white" : ' '}`}>{price}$ </button>
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
            filteredMenu.map((food)=> {
              return (
                <CardFood   food={food} key={food.id}
                />
              )
            })
          }
        </div>
          
      </div>
    );

}

export default FilterMenu
