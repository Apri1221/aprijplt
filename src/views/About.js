import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../components/Loader';


function About() {
    const accountIg = sessionStorage.getItem('accountIg');
    const url = `https://www.instagram.com/${accountIg}/?__a=1`;

    const [profile, setProfile] = useState({
        imageSrc: '', 
    });
 
    useEffect(() => {
        axios.get(url).then(response => {
            var photoURL = response["data"]["graphql"]["user"]["profile_pic_url_hd"];
            setProfile({
                imageSrc: photoURL
            })
        }).catch(() => {
            setProfile({
                imageSrc: "https://source.unsplash.com/400x400/?man,face"
            })
        });
    }, [url]);

    if (profile.imageSrc === '') {
        return (
            <Loader></Loader>
        )
    };

    return(
        <div className="flex flex-col items-center content-center justify-center">
            <div>
                <img src={profile.imageSrc} alt="" className="w-64 h-64 m-5 rounded-full" />
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L120,165.3C240,171,480,181,720,176C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>
    )
}


export default About