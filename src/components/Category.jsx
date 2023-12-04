
import {categories} from './dataCategores'

function Category() {
  return (
    <div className=" max-w-[1640px] m-auto p-6">
      <h2 className=" font_2 text-[#f97316]  my-[20px]  flex   text-[25px] md:text[30px]  font-bold justify-center items-center  tracking-[10px] "> Category </h2>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 " >
        {
          categories.map((cate)=> {
            return (
              <div key={cate.id} className='bg-gray-200   rounded-lg  flex justify-center items-center  p-2 cursor-pointer'  >
                <img className=" max-w-full w-[100px]" src={cate.image} alt={cate.name} />
                <p className="max-w-full ">{cate.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Category
