// import { Button } from "./ui/button";

import { Badge } from "./ui/badge";

interface HeroSectionProps {
    className?: string;
    id: string;
};

const contactInformation = [
    {id: 1, title: 'GitHub', icon: <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="#fff" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"></path></svg>, contact: 'https://github.com/Efandio'},
    {id: 2, title: 'LinkedIn', icon: <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="#fff" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg>, contact: 'https://www.linkedin.com/in/efandio-attahya-nofianto-1644a432b/'},
    {id: 3, title: 'Contact', icon: <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"></path></svg>, contact: 'https://wa.me/62895399784730'}
];

const HeroSection: React.FC<HeroSectionProps> = ({ className, id }) => {
    return (
        <main id={id} className={`flex flex-col gap-8 lg:gap-14 items-center w-full h-full justify-center py-10 ${className}`}>
        {/* Nama & Job Title */}
            <section className="flex flex-col w-full justify-center items-center">
                <span className="-translate-x-32 font-bold italic lg:hidden">Hello,</span>
                <h1 className="font-bold text-xl font-serif pb-2 flex lg:text-4xl"><span className="hidden lg:flex pr-1">Hello,</span>I'm Efandio Attahya Nofianto</h1>
                <h2 className="text-white/90 lg:text-xl">I'm a Frontend Developer</h2>
            </section>
        {/* View CV */}
            {/* <section className="flex gap-5 lg:gap-18">
                <a href="portfolio">
                    <Button>View My Work</Button>
                </a>

                <a href="resume">
                    <Button>Download Resume</Button>
                </a>
            </section> */}

            <section className="">
            <div className="grid grid-cols-3 gap-6 lg:pt-10">
                {contactInformation.map((contact) => (
                    <div key={contact.id} className="flex flex-col items-center justify-center">
                        <a className="lg:scale-200 pb-2 lg:pb-5" href={contact.contact}>
                            {contact.icon}
                        </a>
                        <Badge className="px-6">{contact.title}</Badge>
                    </div>
                ))}
            </div>
            </section>
        </main>
    )
};

export default HeroSection;