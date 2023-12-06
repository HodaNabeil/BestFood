import { MdOutlineEmail } from "react-icons/md";

function InputFooter() {
  const validatedForm = (e) => {
    e.preventDefault()
  }
  return (
    <div className="mt-[20px] flex flex-col  ">
    <h3 className="  font-medium  text-[#777] m-[10px]">SubScribe More info</h3>
      <form 
        onSubmit={validatedForm}
        className=' flex flex-col  relative'>
        <MdOutlineEmail className=" absolute top-[12px] left-[10px]  text-[#777]   " />
        <input type="text" 
        placeholder=" Enter your Email" 
        className=" text-[15px] h-[40px] border-none 
        focus:outline-none px-[30px]  rounded-[50px]" />
        <input type="submit" 
        className=" flex   items-center justify-center
        w-[100px]  ml-[10px] cursor-pointer my-[10px] 
        text-center bg-[#f97316] text-[#fff] rounded-[50px] 
        text-[14px] p-[4px]"
          />
      </form>
  </div>
  )
}

export default InputFooter
