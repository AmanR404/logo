
const Sidebar = () => {
  return (
    <aside className="w-[115px] sm:w-[200px]">
        <div className="border-y-1 border-gray-300 text-xs py-2 flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="font-bold">IDEAL FOR</span><span><img className="w-4" src="arrow.svg" alt="" /></span>
            </div>
            <span>All</span>
        </div>
        <div className="border-y-1 border-gray-300 text-xs py-2 flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="font-bold">OCCASION</span><span><img className="w-4" src="arrow.svg" alt="" /></span>
            </div>
            <span>All</span>
        </div>
        <div className="border-y-1 border-gray-300 text-xs py-2 flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="font-bold">WORK</span><span><img className="w-4" src="arrow.svg" alt="" /></span>
            </div>
            <span>All</span>
        </div>
        <div className="border-y-1 border-gray-300 text-xs py-2 flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="font-bold">FABRIC</span><span><img className="w-4" src="arrow.svg" alt="" /></span>
            </div>
            <span>All</span>
        </div>
        <div className="border-y-1 border-gray-300 text-xs py-2 flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="font-bold">SEGMENT</span><span><img className="w-4" src="arrow.svg" alt="" /></span>
            </div>
            <span>All</span>
        </div>
        <div className="border-y-1 border-gray-300 text-xs py-2 flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="font-bold">SUITABLE FOR</span><span><img className="w-4" src="arrow.svg" alt="" /></span>
            </div>
            <span>All</span>
        </div>
        <div className="border-y-1 border-gray-300 text-xs py-2 flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="font-bold">RAW MATERIALS</span><span><img className="w-4" src="arrow.svg" alt="" /></span>
            </div>
            <span>All</span>
        </div>
        <div className="border-y-1 border-gray-300 text-xs py-2 flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="font-bold">PATTERN</span><span><img className="w-4" src="arrow.svg" alt="" /></span>
            </div>
            <span>All</span>
        </div>
    </aside>
  )
}

export default Sidebar
