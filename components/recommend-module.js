import { useTranslate } from "/hooks/use-translate";
import Link from "next/link";
import SocialSetMini from "/components/social-set-mini";

const RecommendModule=(props) =>{
    return(
        <div>
            <div className='col-span-2'>
                <div className='text-4xl font-bold'>{props.title}</div>
                <div className='h-auto pb-10 -mt-6 bg-gradient-to-r from-sky-200 to-pink-200 rounded-2xl'>
                <div className='pl-5 pr-2 pt-8'>
                    {props.children}
                </div>
            </div>
        </div>
        </div>
    );
}

export default RecommendModule;