import LinkEx from "/components/link-ex"

const TimeLineShort=() =>{
    return(
        <div>
            <ol className="relative border-l border-gray-800">
                <li className="mb-4 ml-4">
                    <div className="absolute -left-1.5 w-3 h-3 bg-gray-800 rounded-full border border-gray-800"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">2021-Present</time>
                    <h3 className="text-lg font-semibold text-gray-800">Product management Intern</h3>
                    <LinkEx href={'https://linecorp.com/en/'}>
                        <a className="mb-4 text-base font-normal text-gray-800">LINE corporation, Japan</a>
                    </LinkEx>
                </li>
                <li className="mb-4 ml-4">
                    <div className="absolute -left-1.5 w-3 h-3 bg-gray-800 rounded-full border border-gray-800"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">2021-Present</time>
                    <h3 className="text-lg font-semibold text-gray-800">Master&apos;s program in informatics</h3>
                    <LinkEx href={'https://informatics.tsukuba.ac.jp/?lang=en'}>
                        <a className="mb-4 text-base font-normal text-gray-800">University of Tsukuba, Japan</a>
                    </LinkEx>
                </li>
            </ol>
        </div>
    );
};

export default TimeLineShort;