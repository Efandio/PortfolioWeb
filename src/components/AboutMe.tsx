
interface HeroSectionProps {
    id: string;
    className?: string;
};

const AboutMe: React.FC<HeroSectionProps> = ({ id, className }) => {
    return (
        <main id={id} className={`w-full h-fit py-5 space-y-5 ${className}`}>
            <h1 className="text-center lg:text-xl font-semibold underline underline-offset-3">About Me</h1>

            <p className="text-sm text-balance w-full text-center items-center px-4 leading-6">Hey! I'm a self-taught web developer who started learning out of pure curiosity — and ended up loving the process of building things on the web.I specialize in creating responsive, clean, and user-friendly interfaces using React, Vue, Tailwind CSS, JavaScript, and TypeScript. Whether it's building a UI from scratch or solving tricky frontend logic, I enjoy turning ideas into functional and polished websites.I'm constantly learning and improving, and I'm currently open to full-time roles as well as freelance opportunities. I value clean code, good communication, and delivering work that not only works well — but also looks great.Let's build something awesome together.</p>
        </main>
    )
};

export default AboutMe;