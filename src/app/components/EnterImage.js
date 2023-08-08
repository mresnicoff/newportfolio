'use client'
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function EnterImage(props) {
    console.log(!props.src)
    var src
    var text
    var link
    if(!props.src){src="/heroImage.png"
text="Here I am!!!"}
    else{src=`/${props.src}.png`
text=props.text
link=props.link}
  return (
    <div className="mx-10">
    
      <AnimatePresence>
        <motion.div
          transition={{ type: "spring", stiffness: 100 }}
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
        >
      <Image
      src={src}
      width={400}
      height={400}
      className="rounded-xl"  
      object-fit="cover" 
      alt="Picture of the author"
    />
    <p className="my-5">{text}</p>
   {link&& <Link rel="noopener noreferrer" target="_blank" href= {link}>Open Github Repository</Link>}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}