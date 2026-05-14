// export default function Hero() {
//   return (
//     <section className="px-8 pt-16 md:pt-10 pb-16 max-w-7xl mx-auto w-full text-center relative">
      
//       {/* Typography Block */}
//       <h1 className="font-serif mb-16 leading-[1.0] tracking-tight text-black flex flex-col items-center">
        
//         {/* Inner container left-aligns the two rows while keeping the whole block centered */}
//         <div className="flex flex-col items-start">
          
//           {/* Row 1: "Design" + Long Arrow */}
//           <div className="flex items-center gap-6 md:gap-12 text-6xl md:text-8xl lg:text-[8rem]">
//             <span>Design</span>
            
//             {/* Custom Long SVG Arrow */}
//             <svg 
//               className="w-20 md:w-32 lg:w-48 h-auto stroke-black" 
//               viewBox="0 0 100 24" 
//               fill="none" 
//               strokeWidth="1.5" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//             >
//                <line x1="0" y1="12" x2="96" y2="12"></line>
//                <polyline points="84,4 96,12 84,20"></polyline>
//             </svg>
//           </div>
          
//           {/* Row 2: "the future" */}
//           <div className="text-6xl md:text-8xl lg:text-[8.5rem] mt-2 md:mt-0">
//             the <span className="italic">future</span>
//           </div>
//         </div>
//       </h1>
      
//       {/* 4-Column Grid for Hero Images */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//         <img src="/Assets/images/image1.png" alt="Work 1" className="aspect-[3/4] object-cover w-full rounded-sm bg-gray-200" />
//         <img src="/Assets/images/image2.png" alt="Work 2" className="aspect-[3/4] object-cover w-full rounded-sm bg-gray-200" />
//         <img src="/Assets/images/image3.png" alt="Work 3" className="aspect-[3/4] object-cover w-full rounded-sm bg-gray-200" />
//         <img src="/Assets/images/image4.png" alt="Work 4" className="aspect-[3/4] object-cover w-full rounded-sm bg-gray-200" />
//       </div>
//     </section>
//   );
// }


export default function Hero() {
  return (
    // Changed mobile top padding from pt-16 to pt-40 to clear the header. 
    // Desktop remains md:pt-10
    <section className="px-8 pt-40 md:pt-10 pb-16 max-w-7xl mx-auto w-full text-center relative">
      
      {/* Typography Block */}
      <h1 className="font-serif mb-16 leading-[1.0] tracking-tight text-black flex flex-col items-center">
        
        {/* Inner container left-aligns the two rows while keeping the whole block centered */}
        <div className="flex flex-col items-start">
          
          {/* Row 1: "Design" + Long Arrow */}
          <div className="flex items-center gap-6 md:gap-12 text-6xl md:text-8xl lg:text-[8rem]">
            <span>Design</span>
            
            {/* Custom Long SVG Arrow (Added 'hidden md:block' to hide on mobile) */}
            <svg 
              className="hidden md:block w-20 md:w-32 lg:w-48 h-auto stroke-black" 
              viewBox="0 0 100 24" 
              fill="none" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
               <line x1="0" y1="12" x2="96" y2="12"></line>
               <polyline points="84,4 96,12 84,20"></polyline>
            </svg>
          </div>
          
          {/* Row 2: "the future" */}
          <div className="text-6xl md:text-8xl lg:text-[8.5rem] mt-2 md:mt-0">
            the <span className="italic">future</span>
          </div>
        </div>
      </h1>
      
      {/* 4-Column Grid for Hero Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <img src="/Assets/images/image1.png" alt="Work 1" className="aspect-[3/4] object-cover w-full rounded-sm bg-gray-200" />
        <img src="/Assets/images/image2.png" alt="Work 2" className="aspect-[3/4] object-cover w-full rounded-sm bg-gray-200" />
        <img src="/Assets/images/image3.png" alt="Work 3" className="aspect-[3/4] object-cover w-full rounded-sm bg-gray-200" />
        <img src="/Assets/images/image4.png" alt="Work 4" className="aspect-[3/4] object-cover w-full rounded-sm bg-gray-200" />
      </div>
    </section>
  );
}