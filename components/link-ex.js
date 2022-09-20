import Link from "next/link";

const LinkEx=(props) =>{
    return(
        <>
            <Link href={props.href}>
                <a target="_blank" rel="noopener noreferrer">
                    {props.children}
                </a>
            </Link>
        </>
    )
}

export default LinkEx;