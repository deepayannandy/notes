import { LuFileSignature } from "react-icons/lu";
import { CgGoogleTasks } from "react-icons/cg";
import { motion } from "framer-motion"

const NoteCard = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.02}} whileHover={{ scale: 1.05 }} dragElastic={.4}  className=" flex-shrink-0 relative w-60 h-80 bg-zinc-900/60 rounded-[30px] text-zinc-300 overflow-hidden px-5 py-10">
        <LuFileSignature className="text-zinc-300 " />
        <p className=" text-sm leading-tight  mt-4 font-semibold">{data.note}</p>
        <div className="absolute bottom-10 w-full h-5 right-1/2 translate-x-[110%] leading-tight text-xs text-zinc-400">{data.dateOfCreation}</div>
        <div className={`footer absolute bottom-0 ${data.priority==1?'bg-green-700':data.priority==2?'bg-orange-700':'bg-red-700'}  w-full h-10 left-0 px-3 py-2`}>
            <div className="flex items-center text-zinc-100">
            <CgGoogleTasks className="mr-2" />
            {data.priority==1?'Normal':data.priority==2?'Intermediate':'High'}
            </div>
        </div>
    </motion.div>
  )
}

export default NoteCard