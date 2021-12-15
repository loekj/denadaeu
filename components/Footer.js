
export default function Footer() {
    return ( 
        <div>
            <div className="max-w-5xl mx-auto py-3 px-5">
                <div className="w-4/5 border-t border-dotted border-green-dark mx-auto py-4"></div>
                <div className="flex flex-col items-center space-y-2">
                    <a href="#" className="flex items-center space-x-3">
                        <img className='h-44' src="/assets/images/Logos/DeNadaEu_Transparent.png" alt="" />
                    </a>
                    <div className="flex items-center justify-center space-x-3">
                        <a href="https://www.instagram.com/DeNadaEu_PT" className="green-dark-hover-gold">   
                            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.912 41.92">
                                <g transform="translate(-1278.334 -5035.065)">
                                    <path d="M1320.14,5047.39a15.314,15.314,0,0,0-.975-5.086,10.74,10.74,0,0,0-6.134-6.133,15.367,15.367,0,0,0-5.085-.975c-2.244-.106-2.956-.131-8.648-.131s-6.4.025-8.639.123a15.3,15.3,0,0,0-5.085.975,10.732,10.732,0,0,0-6.134,6.133,15.379,15.379,0,0,0-.975,5.086c-.106,2.244-.131,2.956-.131,8.648s.025,6.4.123,8.639a15.3,15.3,0,0,0,.975,5.085,10.732,10.732,0,0,0,6.133,6.134,15.359,15.359,0,0,0,5.086.974c2.235.1,2.948.123,8.639.123s6.4-.024,8.64-.123a15.314,15.314,0,0,0,5.085-.974,10.722,10.722,0,0,0,6.134-6.134,15.35,15.35,0,0,0,.974-5.085c.1-2.236.123-2.948.123-8.639s-.008-6.4-.106-8.64Zm-3.775,17.115a11.518,11.518,0,0,1-.721,3.89,6.953,6.953,0,0,1-3.98,3.98,11.533,11.533,0,0,1-3.89.72c-2.211.1-2.874.123-8.467.123s-6.265-.024-8.468-.123a11.487,11.487,0,0,1-3.89-.72,6.448,6.448,0,0,1-2.407-1.564,6.523,6.523,0,0,1-1.565-2.408,11.545,11.545,0,0,1-.72-3.889c-.1-2.212-.123-2.875-.123-8.468s.025-6.265.123-8.468a11.5,11.5,0,0,1,.72-3.889,6.375,6.375,0,0,1,1.573-2.408,6.516,6.516,0,0,1,2.407-1.564,11.529,11.529,0,0,1,3.89-.721c2.211-.1,2.875-.123,8.468-.123s6.264.025,8.467.123a11.478,11.478,0,0,1,3.89.721,6.907,6.907,0,0,1,3.972,3.972,11.565,11.565,0,0,1,.721,3.889c.1,2.211.122,2.874.122,8.468s-.024,6.248-.122,8.459Zm0,0" fill=""/>
                                    <path d="M1299.3,5045.261a10.768,10.768,0,1,0,10.769,10.769,10.771,10.771,0,0,0-10.769-10.769Zm0,17.754a6.986,6.986,0,1,1,6.986-6.985,6.987,6.987,0,0,1-6.986,6.985Zm0,0" fill=""/><path d="M1313.007,5044.835a2.514,2.514,0,1,1-2.514-2.514,2.515,2.515,0,0,1,2.514,2.514Zm0,0" fill=""/>
                                </g>
                            </svg>
                        </a>
                        <a href="mailto:loek@denadaeu.com" className="green-dark-hover-gold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>    
                        </a>
                    </div>
                    <a href='https://goo.gl/maps/NSe9L9MCBiVguEL39' target="_blank">
                        <p className="text-sm flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-green-dark hover:text-blue-600 hover:underline">Rt. 995, km 2.2, Vieques, 00765, Puerto Rico</span>
                        </p>
                    </a>
                </div>
            </div>
            <div className="bg-green-dark">
                <p className="text-xs text-white text-center py-3">
                    DE NADA EU Travel Gear © 2021 - All rights reserved.
                </p>
            </div>
        </div>
    )
}
