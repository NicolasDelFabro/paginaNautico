// 'use client'

// import { useEffect, useState } from "react";
// import { Button } from "@/components/Button";

// export default function Background() {

//     const [Background, setBackGroung] = useState("");

//     useEffect(() => {
//         setBackGroung("url('/fotoRemo.jpeg')")
//     }, []);
  
//     return (
//     <div
//       className="flex items-center justify-center h-screen w-screen bg-cover bg-center opacity-50 relative"
//       style={{ backgroundImage: Background}}
//     >
//         <div className="opacity-90">
//             <Button />
//         </div>
//     </div>
//   );
// }


// landing
'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

export default function Background() {

    const [Background, setBackGroung] = useState("");

    useEffect(() => {
        setBackGroung("url('/fotoRemo.jpeg')")
    }, []);
  
    return (
    <div className="relative h-screen w-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
          style={{ backgroundImage: Background }}
        ></div>
      
        <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Button />
        </div>
    </div>
  );
}
