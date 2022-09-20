import Head from "next/head";

const Favicon =() =>{
    return(
        <>
            <Head>
                <link rel="shortcut icon" type="image/png" href="/favicon.ico" /> 
            </Head>
        </>
    );
};

export default Favicon;