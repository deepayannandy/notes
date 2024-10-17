import { useRef, useEffect } from "react"
import NoteCard from "./NoteCard"
import Toast from "./Toast";
import { toast} from 'react-toastify';

function Foreground() {
    useEffect(() => {
        toast("Let's Learn React!");
     });
    const ref= useRef(null);
    const data=[
        {
            note:"Lets build an awesome React Project to learn React Basics",
            priority:1,
            dateOfCreation:"18/10 10:00 AM"
        },
        {
            note:"Will publish this app as an OpenSource Project and host it on My Home Lab Server",
            priority:3,
            dateOfCreation:"20/10 06:22 PM"
        },
        {
            note:"Will add user authentication and backend apis to persist the notes across different devices ",
            priority:2,
            dateOfCreation:"24/10 11:15 PM"
        }
    ]
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full bg-zinc-900/20 flex gap-5 flex-wrap p-5">
        <Toast/>
        {
            data.map((item, index)=>(
               <NoteCard key={index} data={item} reference={ref}/>
            ))
        }
    </div>
  )
}

export default Foreground