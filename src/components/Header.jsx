
const Header = () => {
  return (
    <header className="border-b-1 border-gray-200 pb-4">
            <div className="flex justify-around bg-black text-[#eb4c6b] py-1 text-xs">
                <span>Free shipping over 499/-</span>
                <span>Flat 5% Discount on products</span>
                <span className="hidden sm:inline-block">Limited Time Sale</span>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex justify-between items-center w-[95%] sm:w-[87%] mx-auto pt-10">
                    <img className="w-7" src="circle.svg" alt="" />
                    <h2 className="font-bold text-2xl sm:relative sm:left-10">LOGO</h2>
                    <ul className="flex gap-3">
                        <li><img className="w-5" src="search.svg" alt="" /></li>
                        <li><img className="w-5" src="favourite.svg" alt="" /></li>
                        <li><img className="w-5" src="bag.svg" alt="" /></li>
                        <li><img className="w-5" src="user.svg" alt="" /></li>
                        <li className="font-semibold text-xs"><select name="" id=""><option className="text-xs" value="ENG">ENG</option></select></li>
                    </ul>
                </div>
                <div>
                  <ul className="flex justify-center gap-6 sm:gap-12 font-semibold w-full sm:w-[500px] mx-auto">
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                  </ul>
                </div>
            </div>
    </header>
  )
}

export default Header