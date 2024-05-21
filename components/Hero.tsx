import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCogs from './BackgroundCircles';

type IntroFacts = {
    name: string;
    role: string;
}

const Hero: React.FC<IntroFacts> = ({ name, role }) => {
    const [introText, count] = useTypewriter({ 
        words: [
           "Hello I'm "+ name ,
           "I'm an awesome "+ role,
        ], loop: true, delaySpeed: 2000});
    
    return (
        <div>
            <BackgroundCogs/>
            <h1>
                <span>{introText}</span>
                <Cursor cursorColor="orange" cursorStyle="_"/>

            </h1>
        </div>
    );
};


export default Hero;
export type { IntroFacts };
