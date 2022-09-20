const HeadingLine=(props) =>{
    return(
        <div className='ml-2 w-48 sm:w-full'>
            <div className='w-fit mb-4 text-3xl font-bold'>
                {props.children}
                <div className="h-6 -mt-5 -ml-2 -mr-8 bg-gradient-to-r from-sky-200 to-pink-200 rounded-3xl" />
            </div>
        </div>
    );
};

export default HeadingLine;