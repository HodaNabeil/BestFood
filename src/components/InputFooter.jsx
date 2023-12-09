

function InputFooter() {
  const validatedForm = (e) => {
    e.preventDefault()
  }
  return (
    <div className=" input_footer mt-[20px] flex flex-col  relative ">
    <h3 className="  font-medium  text-[#777] m-[10px]">SubScribe More info</h3>
      <form 
        onSubmit={validatedForm}
        className=' flex flex-col  relative'>
        <ion-icon name="mail-outline" size="small"></ion-icon>
        <input type="text" 
        placeholder=" Enter your Email" 
        className=" text-[15px] h-[40px] border-none 
        focus:outline-none px-[30px]  rounded-[50px]" />
        <input type="submit" 
        className=" flex   items-center justify-center
          max-w-[100px]  ml-[10px] cursor-pointer my-[10px] 
        text-center bg-[#f97316] text-[#fff] rounded-[50px] 
        text-[14px] p-[4px]"
          />
      </form>
  </div>
  )
}

export default InputFooter
