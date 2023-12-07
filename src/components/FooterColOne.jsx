

function FooterColOne() {
  return (
    <div className=" p-2">
    <div>
      <h2 className=" font_2 font-medium text-[#777] md:text-[22px] ">Best Eats</h2>
      <span className=" text-[15px]  text-[#777]">your Taggline here</span>
    </div>
    <div className="my-[15px]">
      <h3 className="   text-[#f97316]  font-medium md:text-[20px]">About Us</h3>
      <p 
      className=" text-[#777] text-[15px] max-w-[270px] leading-[1.4]">
        orem ipsum  consectetur adipisicing elit.
      </p>
    </div>
    <div>
      <h4 className="  text-[#f97316] font-medium text-[17px] mb-[10px]">Contact  Us</h4>
      <a href="/" 
        className="flex gap-x-2  text-[#f97316] items-center cursor-pointer ">
        <ion-icon name="call-outline"  size="small"></ion-icon>
        <span className="text-[#777] text-[14px] ">
        +026567454
        </span> 
      </a>
      <a href="/" 
        className="flex gap-x-2 text-[#f97316] 
        items-center  cursor-pointer ">
        <ion-icon name="mail-outline" size="small"></ion-icon>
        <span className="text-[#777] text-[14px]">
        yourestorem.come 
        </span>
      </a>
    </div>
</div>
  )
}

export default FooterColOne
