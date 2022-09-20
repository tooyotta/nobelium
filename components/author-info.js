import { useTranslate } from "/hooks/use-translate";
import Link from "next/link";
import LinkEx from "/components/link-ex"
import SocialSetMini from "/components/social-set-mini";

const AuthorInfo=() =>{
    const { t } = useTranslate()
    return(
        <div>
            <div className="p-2 bg-gradient-to-r from-sky-200 to-pink-200 rounded-2xl">
                <div className="p-2 bg-white rounded-2xl">
                    <span>Author info</span>
                    <div className="flex-none align-baseline  sm:flex">
                        <h3 className="m-1 text-lg font-semibold">{t.AUTHOR_NAME_EN}</h3>
                        <SocialSetMini />
                    </div>
                    <p className="m-0 my-1">
                        {t.AUTHOR_INFO}
                    </p>
                    {/* by me a coffee */}
                    <div className="flex gap-1">
                        <div className="my-1">
                            <LinkEx href='https://www.buymeacoffee.com/tooyotta'>
                                <div className="flex py-1 px-2 text-xs font-semibold text-black no-underline bg-yellow-300 rounded-2xl sm:text-base">
                                    <svg className="mx-1 w-4 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M13 24h-7c-2.564-3.483-5-9.782-5-16h17c0 6.167-2.5 12.625-5 16zm6.088-14c-.051.688-.115 1.356-.192 2h1.707c-.321 1.635-1.463 3.331-2.756 4.677-.358 1.283-.772 2.439-1.153 3.229 3.153-1.453 5.987-6.389 6.306-9.906h-3.912zm-8.49-3.001c1.52-.352 2.555-1.276 2.466-2.399-.117-1.485-3.134-2.718-2.32-4.6-4.735 3.817 1.764 3.902-.146 6.999zm-3.207.001c1.523-.29 1.832-1.067 1.832-1.533 0-1.045-2.279-2.002-1.528-3.795-3.648 3.094.995 3.088-.304 5.328z"/>
                                    </svg>
                                    {t.BUY_COFFEE}
                                </div>
                            </LinkEx>
                        </div>
                        <div className="my-1">
                            <LinkEx href='https://www.amazon.jp/hz/wishlist/ls/6M48GRNWJP6V?ref_=wl_share'>
                                <a className="flex py-1 px-2 mx-1 text-xs font-semibold text-black no-underline bg-orange-400 rounded-2xl sm:text-base">
                                    <svg className="mx-1 w-4 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66.704-3.716 4.06-4.838 7.066-4.838 1.537 0 3.547.41 4.758 1.574 1.538 1.436 1.392 3.352 1.392 5.438v4.923c0 1.481.616 2.13 1.192 2.929.204.287.247.63-.01.839-.647.541-1.794 1.537-2.423 2.099l-.008-.007zm3.559 1.988c-2.748 1.472-5.735 2.181-8.453 2.181-4.027 0-7.927-1.393-11.081-3.706-.277-.202-.481.154-.251.416 2.925 3.326 6.786 5.326 11.076 5.326 3.061 0 6.614-1.214 9.066-3.494.406-.377.058-.945-.357-.723zm.67 2.216c-.091.227.104.32.31.147 1.339-1.12 1.685-3.466 1.411-3.804-.272-.336-2.612-.626-4.04.377-.22.154-.182.367.062.337.805-.096 2.595-.312 2.913.098.319.41-.355 2.094-.656 2.845z" fillRule="evenodd" clipRule="evenodd"/>
                                    </svg>
                                    {t.WISHLIST}
                                </a>
                            </LinkEx>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorInfo;