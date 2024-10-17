import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { motion } from "framer-motion"

function HowerUserIcon({onClickCall}) {
  return (
    <div className = "z-[4] fixed bottom-0 right-0 p-10  flex items-end justify-end w-24 h-24 ">
    <motion.button onClick={onClickCall}  whileHover={{ scale: 1.05 }} className = "text-white shadow-xl shadow-zinc-900 flex items-center h-16 w-16 justify-center p-3 rounded-[30px] bg-zinc-700 z-50 absolute  ">
      <AiOutlineAppstoreAdd className="text-3xl"/>
  </motion.button>
  </div>
  )
}

export default HowerUserIcon