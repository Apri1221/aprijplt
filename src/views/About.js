import React from 'react'


function About() {
    return(
        <div className="flex flex-col items-center content-center justify-center">
            <div>
                <img src="https://source.unsplash.com/400x400/?woman,face" alt="" className="w-64 h-64 m-5 rounded-full" />
            </div>

            <div className="content-center w-full h-auto m-5 text-center ">
                <p className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"> Hello! I am <span className="text-indigo-600">Apri</span></p>
                <p className="text-5xl font-thin text-indigo-400">Junior Developer</p>
            </div>

            <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 w-1/4">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Apri1221">
                        <img height="32" width="32" src="//s.svgbox.net/social.svg?fill=4a5568&ic=github" alt="Github Profile" className="ml-auto mr-auto"/>
                        <p className="leading-relaxed">Github</p>
                    </a>
                </div>
                <div className="p-4 w-1/4">
                    <a target="_blank" rel="noopener noreferrer" href="https://apriyantotobing.medium.com/">
                        <img height="32" width="32" src="//s.svgbox.net/social.svg?fill=4a5568&ic=medium" alt="Medium Profile" className="ml-auto mr-auto"/>
                        <p className="leading-relaxed">Medium</p>
                    </a>
                </div>
                <div className="p-4 w-1/4">
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/aprijplt">
                        <img height="32" width="32" src="//s.svgbox.net/social.svg?fill=4a5568&ic=linkedin" alt="LinkedIn Profile" className="ml-auto mr-auto"/>
                        <p className="leading-relaxed">LinkedIn</p>
                    </a>
                </div>
                <div className="p-4 w-1/4">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/apri0498">
                        <img height="32" width="32" src="//s.svgbox.net/social.svg?fill=4a5568&ic=twitter" alt="Twitter Profile" className="ml-auto mr-auto"/>
                        <p className="leading-relaxed">Twitter</p>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default About