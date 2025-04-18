import { Button } from "./ui/button";

interface HeroSectionProps {
    className?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
    return (
        <main className={`flex flex-col gap-8 lg:gap-14 items-center w-full h-full justify-center py-10 ${className}`}>
        {/* Nama & Job Title */}
            <section className="flex flex-col w-full justify-center items-center">
                <span className="-translate-x-32 font-bold italic lg:hidden">Hello,</span>
                <h1 className="font-bold text-xl font-serif pb-2 flex lg:text-4xl"><span className="hidden lg:flex pr-1">Hello,</span>I'm Efandio Attahya Nofianto</h1>
                <h2 className="text-white/90 lg:text-xl">I'm a Frontend Developer</h2>
            </section>
        {/* View CV */}
            <section className="flex gap-5 lg:gap-18">
                <a href="portfolio">
                    <Button>View My Work</Button>
                </a>

                <a href="resume">
                    <Button>Download Resume</Button>
                </a>
            </section>
        </main>
    )
};

export default HeroSection;