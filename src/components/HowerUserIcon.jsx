import { PiUserCircleCheckDuotone } from "react-icons/pi";
import { motion } from "framer-motion"

function HowerButton({onClickCall}) {
  return (
    <div className = "z-[4] fixed top-10 right-0 p-10  flex items-end justify-end w-24 h-24 ">
    <motion.button onClick={onClickCall}  whileHover={{ scale: 1.05 }} className = "text-white  shadow-zinc-900 flex items-center h-16 w-16 justify-center p-3 rounded-[10px] bg-zinc-700 z-50 absolute  ">
      <PiUserCircleCheckDuotone className="text-3xl "/>
  </motion.button>
  </div>
  )
}

export default HowerButton