import { useState } from 'react';
import { Button } from "./ui/button";

interface NavbarProps {
    aboutMe?: string;
    skills?: string;
    projects?: string;
    contact?: string;
    className?: string
};

const Navbar: React.FC<NavbarProps> = ({ aboutMe, skills, projects, contact, className }) => {

    const [ activeButton, setActiveButton ] = useState<'' | 'aboutMe' | 'skills' | 'projects' | 'contact'>('')


    const handleClick = (button: 'aboutMe' | 'skills' | 'projects' | 'contact') => {
        setActiveButton((prev) => prev === button ? '' : button);
    };

    return (
        <>
            <nav className={`navbar flex items-center justify-evenly lg:justify-evenly w-full h-16 lg:px-20 fixed ${className}`}>
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