import React from 'react'

const page = ({front,back}) => {
  return (
  // <div className="group [perspective:1000px]">
  //     <div className="relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
  //       {/* Front Side */}
  //       <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-white text-slate-800 p-4 shadow-lg [backface-visibility:hidden]">
  //         <h3 className="text-xl font-semibold">{front}</h3>
  //       </div>

  //       {/* Back Side */}
  //       <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-slate-800 text-white p-4 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
  //         <p className="text-md">{back}</p>
  //       </div>
  //     </div>
  //   </div>
   <div className="group [perspective:1000px]">
      <div className="relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-white text-slate-800 p-4 shadow-lg [backface-visibility:hidden]">
          <h3 className="text-2xl font-bold">{front}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-slate-800 text-white p-6 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-md text-center leading-relaxed">{back}</p>
        </div>
      </div>
    </div>
  )
}

export default page
