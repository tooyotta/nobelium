import LinkEx from "/components/link-ex"

const SocialMail=() =>{
    return(
        <div className="">
            <div className="flex flex-wrap gap-3 py-1 px-3">
                <LinkEx href={'mailto:naoyatoyota@gmail.com?subject=from toyota.im webpage'}>
                    <div className="inline-flex gap-1 items-center no-underline">
                        <svg className="w-5 fill-gray-800" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                        </svg>
                        <span className='font-bold'>naoyatoyota</span>
                        <svg className='w-4' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
                                <circle cx="12" cy="12" r="4"/>
                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                            </g>
                        </svg>
                        <span className='font-bold'>gmail.com</span>
                  </div>
                </LinkEx>
            </div>
        </div>
    );
};

export default SocialMail;