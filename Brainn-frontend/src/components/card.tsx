import { DelteIcon, ShareIcon, Youtube,Link,Tweet, LinkIcon} from "../assets/Icons"
import type { CardInterface } from "./config"

export const Card=(props:CardInterface)=>{
    return (
        <div className=" rounded-md border-2 border-gray-200 bg-white w-72  overflow-y-auto h-78">
            <div className="flex justify-between p-4 sticky top-0 z-10 bg-white items-center">
               <div className="flex items-center gap-4">
                <div className="h-5 text-gray-600 pt-0.5 w-5">
                {props.type==='Tweet'?(<Tweet/>):props.type==='Link'?(<div className="pt-0.5"><Link/></div>):<Youtube/>}
                </div>
                <p>{props.title}</p>
                </div> 
                <div className="flex gap-4 h-5  text-gray-600 ">
                <div className="hover:text-black cursor-pointer">
                 <a href={props.link} target="_blank"><Link/></a>
                </div>  
                <div className="hover:text-black cursor-pointer">
                  <DelteIcon/>
                </div>  
                </div>
            </div>
            <div className="m-4 flex justify-center items-center">
  {props.type === 'Tweet' ? (
    <blockquote className="twitter-tweet">
      <p lang="und" dir="ltr"></p>
      <a href={(props.link).replace('x.com','twitter.com')}></a>
    </blockquote>
  ) : props.type === 'Link' ? (
    <a href={props.link} className="text-gray-700">
      <LinkIcon />
    </a>
  ) : (
    <iframe  src={(props.link).replace('youtu.be','www.youtube.com/embed')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )}
</div>

        </div>
    )
}

