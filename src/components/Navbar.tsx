import { useState } from 'react';
import { Button } from "./ui/button";

interface NavbarProps {
    aboutMe?: string;
    skills?: string;
    projects?: string;
    contact?: string;
    hero?:string;
    className?: string
};

const Navbar: React.FC<NavbarProps> = ({ aboutMe, skills, projects, contact, hero, className }) => {

    const [ activeButton, setActiveButton ] = useState<'' | 'aboutMe' | 'skills' | 'projects' | 'contact' | 'hero'>('')


    const handleClick = (button: 'aboutMe' | 'skills' | 'projects' | 'contact' | 'hero') => {
        setActiveButton((prev) => prev === button ? '' : button);
    };

    return (
        <>
            <nav className={`navbar flex items-center justify-evenly lg:justify-evenly w-full h-16 lg:px-20 fixed ${className}`}>
                <a href={hero}>
                    <Button onClick={() => handleClick('hero')} className={`${activeButton === 'hero' ? '-translate-y-0 border-b-0' : '-translate-y-0.5 border-b-3 border-slate-500'} hidden lg:block`} size='sm'>Welcome</Button>
                </a>
                <a href={aboutMe}>
                    <Button onClick={() => handleClick('aboutMe')} className={`${activeButton === 'aboutMe' ? '-translate-y-0 border-b-0' : '-translate-y-0.5 border-b-3 border-slate-500'}`} size='sm'>About Me</Button>
                </a>
                <a href={skills}>
                    <Button onClick={() => handleClick('skills')} className={`${activeButton === 'skills' ? '-translate-y-0' : '-translate-y-0.5 border-b-3 border-slate-500'}`} size='sm'>Skills</Button>
                </a>
                <a href={projects}>
                    <Button onClick={() => handleClick('projects')} className={`${activeButton === 'projects' ? '-translate-y-0' : '-translate-y-0.5 border-b-3 border-slate-500'}`} size='sm'>Projects</Button>
                </a>
                <a href={contact}>
                    <Button onClick={() => handleClick('contact')} className={`${activeButton === 'contact' ? '-translate-y-0' : '-translate-y-0.5 border-b-3 border-slate-500'}`} size='sm'>Contact</Button>
                </a>
            </nav>
        </>
    )
};

export default Navbar;