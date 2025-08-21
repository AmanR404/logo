import Sidebar from "./Sidebar"
import {useState, useEffect} from 'react'

const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [sidebar, setSidebar] = useState('visible')

    // Toggling SideBar
    const toggleSideNav = ()=>{
        if(sidebar == "invisible"){
            setSidebar('visible')
        }
        else{
            setSidebar("invisible")
        }
    }

    // Fetching Products
    const fetcher = async()=> {
        let res = await fetch("https://fakestoreapi.com/products")
        let response = await res.json()
        setProducts(response)
    }

    useEffect(()=>{
        fetcher()
    },[])

    // Handling Prices by asc/dsc
    const handleSortByPrice = (direction)=>{
        const sortedProducts = [...products].sort((a,b)=>{
            if(direction == "asc"){
                return a.price - b.price
            }
            else{
                return b.price - a.price
            }
        })
        setProducts(sortedProducts)
    }
  return (
    <>
    <section className="py-8 w-[86%] mx-auto border-b-1 border-gray-200">
        <div className="flex flex-col gap-2 w-[90%] sm:w-[60%] mx-auto">
            <span className="font-semibold text-3xl text-center mb-2">DISCOVER OUR PRODUCTS</span>
            <p className="text-center text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam in exercitationem, asperiores dolore accusantium deserunt nam!</p>
        </div>
    </section>
    <div className="flex justify-between w-[86%] mx-auto text-xs py-2 border-b-1 border-gray-200">
        <div className="flex gap-10">
            <span className="font-bold">{products.length} items</span>
            <button className="text-gray-500 cursor-pointer" onClick={()=>toggleSideNav()}>&#8592; SHOW/ HIDE FILTER</button>
        </div>
        <div className="font-bold pr-4">
            Sort by Prices &#8595; <button className="cursor-pointer" onClick={()=>{handleSortByPrice("asc")}}>asc</button><button className="cursor-pointer" onClick={()=>{handleSortByPrice("dsc")}}>&nbsp;dsc</button>
        </div>
    </div>
    <section className="flex gap-2 w-[86%] mx-auto">
        <div className={sidebar}><Sidebar/></div>
        <div className="flex flex-wrap justify-center w-[900px] sm:pl-4">
            {/* Products */}
            {products.map((product)=>{
                return(
                    <div key={product.id} className="md:w-1/3 mb-6 pt-3">
                        <div className="w-[170px] h-[200px]">
                             <img className="object-contain w-[170px] h-[200px]" src={product.image} alt="product_img" />
                        </div>
                        <span className="font-semibold">{product.title.split(" ").slice(0,3).join(' ')}</span>
                        <p className="text-xs">{product.description.split(" ").slice(0,4).join(" ")}</p>
                    </div>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default Dashboard
