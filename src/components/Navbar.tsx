import { useState } from 'react';
import { Button } from "./ui/button";

interface NavbarProps {
    aboutMe?: string;
    skills?: string;
    portfolio?: string;
    contact?: string;
};

const Navbar: React.FC<NavbarProps> = ({ aboutMe, skills, portfolio, contact }) => {

    const [ activeButton, setActiveButton ] = useState<'' | 'aboutMe' | 'skills' | 'portfolio' | 'contact'>('')

    const handleClick = (button: 'aboutMe' | 'skills' | 'portfolio' | 'contact') => {
        setActiveButton((prev) => prev === button ? '' : button);
    }

    return (
        <>
            <nav className={`navbar bg-gray-200 flex items-center lg:justify-evenly w-full h-16 lg:px-20 fixed`}>
                <a href={aboutMe}>
                    <Button onClick={() => handleClick('aboutMe')} className={`${activeButton === 'aboutMe' ? '-translate-y-0 border-b-0' : '-translate-y-0.5 border-b-3 border-slate-500'}`} size='sm'>About Me</Button>
                </a>
                <a href={skills}>
                    <Button onClick={() => handleClick('skills')} className={`${activeButton === 'skills' ? '-translate-y-0' : '-translate-y-0.5 border-b-3 border-slate-500'}`} size='sm'>Skills</Button>
                </a>
                <a href={portfolio}>
                    <Button onClick={() => handleClick('portfolio')} className={`${activeButton === 'portfolio' ? '-translate-y-0' : '-translate-y-0.5 border-b-3 border-slate-500'}`} size='sm'>Portfolio</Button>
                </a>
                <a href={contact}>
                    <Button onClick={() => handleClick('contact')} className={`${activeButton === 'contact' ? '-translate-y-0' : '-translate-y-0.5 border-b-3 border-slate-500'}`} size='sm'>Contact</Button>
                </a>
            </nav>
        </>
    )
};

export default Navbar;