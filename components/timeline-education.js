import LinkEx from "/components/link-ex"

const TimeLineEducation=() =>{
    return(
        <div>
            <ol className="relative border-l border-gray-800">
                <li className="mb-4 ml-4">
                    <div className="absolute -left-1.5 w-3 h-3 bg-gray-800 rounded-full border border-gray-800"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">2021-Present</time>
                    <h3 className="text-lg font-semibold text-gray-800">Master&apos;s program in informatics</h3>
                    <LinkEx href={'https://informatics.tsukuba.ac.jp/?lang=en'}>
                        <a className="mb-4 text-base font-normal text-gray-800">University of Tsukuba, Japan</a>
                    </LinkEx>
                </li>
                <li className="mb-4 ml-4">
                    <div className="absolute -left-1.5 w-3 h-3 bg-gray-800 rounded-full border border-gray-800"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">2017-2021</time>
                    <h3 className="text-lg font-semibold text-gray-800">BS, Faculty of Environmental Studies</h3>
                    <LinkEx href={'https://www.tcu.ac.jp/english/'}>
                        <a className="mb-4 text-base font-normal text-gray-800">Tokyo City University, Japan</a>
                    </LinkEx>
                </li>
                <li className="mb-4 ml-4">
                    <div className="absolute -left-1.5 w-3 h-3 bg-gray-800 rounded-full border border-gray-800"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">2012-2015</time>
                    <h3 className="text-lg font-semibold text-gray-800">General course student</h3>
                    <LinkEx href={'https://kenryo.ed.jp/school-information/'}>
                        <a className="mb-4 text-base font-normal text-gray-800">Matsumoto-agatagaoka High School, Japan</a>
                    </LinkEx>
                </li>
                <li className="mb-4 ml-4">
                    <div className="absolute -left-1.5 w-3 h-3 bg-gray-800 rounded-full border border-gray-800"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">2009-2012</time>
                    <h3 className="text-lg font-semibold text-gray-800">Student</h3>
                    <LinkEx href={'https://www.shinshu-u.ac.jp/faculty/education/matsu-chu/'}>
                        <a className="mb-4 text-base font-normal text-gray-800">Matsumoto Junior High School, Attached to the Faculty of Education of Shinshu University, Japan</a>
                    </LinkEx>
                </li>
            </ol>
        </div>
    );
};

export default TimeLineEducation;