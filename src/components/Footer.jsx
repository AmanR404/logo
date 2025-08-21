
const Footer = () => {
  return (
    <footer className="bg-black text-white h-1/2 px-10 sm:px-20 pt-16">
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-36 justify-between border-b-1 border-gray-100 pb-4">
            <div className="flex flex-col gap-3">
                <span className="font-bold">BE THE FIRST TO KNOW</span>
                <p className="text-xs mb-5">Sign up for updates from metta muse.</p>
                <div className="flex gap-3">
                    <input className="bg-white sm:w-[300px]" type="text" name="" id="" />
                    <button className="border border-gray-100 px-4 sm:px-8 py-1 text-gray-100 opacity-45">SUBSCRIBE</button>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="font-bold">CONTACT US</span>
                <span className="text-xs">+44 221 133 5360</span>
                <span className="text-xs">customercare@mettamuse.com</span>
                <span className="font-bold">CURRENCY</span>
                <div className="flex items-center">
                    <img className="w-4 h-4 rounded-2xl" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/960px-Flag_of_the_United_States.svg.png" alt="" />
                    <span className="font-semibold text-xs"> . USD</span>
                </div>
                <span className="text-xs">Transactions will be completed in Euros and a currency reference is available on hover.</span>
            </div>
        </section>
        <section className="flex pt-10 gap-28 lg:gap-48">
            <div className="flex gap-10 md:gap-0 flex-col md:flex-row justify-between w-full">
                <div>
                <ul className="flex flex-col gap-3">
                    <li className="font-bold">metta muse</li>
                    <li className="text-xs">About Us</li>
                    <li className="text-xs">Stories</li>
                    <li className="text-xs">Artisans</li>
                    <li className="text-xs">Boutiques</li>
                    <li className="text-xs">Contact Us</li>
                    <li className="text-xs">Eu Compliances Docs</li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col gap-3">
                    <li className="font-bold">QUICK LINKS</li>
                    <li className="text-xs">Orders & Shipping</li>
                    <li className="text-xs">Join/Login as a Seller</li>
                    <li className="text-xs">Payment & Pricing</li>
                    <li className="text-xs">Return & Refunds</li>
                    <li className="text-xs">FAQs</li>
                    <li className="text-xs">Privacy Policy</li>
                    <li className="text-xs">Terms & Conditions</li>
                </ul>
            </div>
            </div>
            <div className="flex flex-col w-full">
                <span className="font-bold mb-3">FOLLOW US</span>
                <div className="flex gap-2">
                    <img className="invert" src="insta.svg" alt="" />
                    <img className="invert" src="linkedin.svg" alt="" />
                </div>
                <span className="font-bold mt-8 mb-2">metta muse ACCEPTS</span>
                <div className="flex gap-2">
                    <img className="w-6 h-6 invert" src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="" />
                    <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="" />
                </div>
            </div>
        </section>
        <p className="text-center text-xs py-8">Copyright &copy; mettamuse. All rights reserved.</p>
    </footer>
  )
}

export default Footer