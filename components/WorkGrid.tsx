export default function WorkGrid() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-5xl md:text-7xl font-serif italic">Our Work</h2>
        {/* An animated arrow pointing down to the work */}
        <div className="text-5xl font-light animate-bounce">&darr;</div>
      </div>
      
      {/* Asymmetrical Grid Setup */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {/* Row 1 & 2 */}
        <div className="col-span-1 row-span-1 bg-gray-200 flex items-center justify-center text-xs text-gray-500">Image 1</div>
        <div className="col-span-1 row-span-1 bg-gray-300 flex items-center justify-center text-xs text-gray-500">Image 2</div>
        <div className="col-span-2 row-span-2 bg-[#111] flex items-center justify-center text-white font-serif text-2xl">Featured Project</div>
        
        {/* Row 2 (Remaining columns) */}
        <div className="col-span-1 row-span-1 bg-gray-300 flex items-center justify-center text-xs text-gray-500">Image 3</div>
        <div className="col-span-1 row-span-1 bg-gray-200 flex items-center justify-center text-xs text-gray-500">Image 4</div>

        {/* Row 3 */}
        <div className="col-span-1 row-span-2 bg-gray-200 flex items-center justify-center text-xs text-gray-500">Image 5</div>
        <div className="col-span-1 row-span-1 bg-[#111] flex items-center justify-center text-xs text-white">Image 6</div>
        <div className="col-span-1 row-span-1 bg-gray-300 flex items-center justify-center text-xs text-gray-500">Image 7</div>
        <div className="col-span-1 row-span-2 bg-gray-200 flex items-center justify-center text-xs text-gray-500">Image 8</div>
        
        {/* Row 4 (Filling the gaps) */}
        <div className="col-span-2 row-span-1 bg-gray-400 flex items-center justify-center text-xs text-white">Image 9 (Wide)</div>
      </div>
    </section>
  );
}