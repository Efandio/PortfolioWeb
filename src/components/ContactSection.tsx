import { Badge } from "./ui/badge";

interface ContactSectionProps {
    className?: string;
    id: string;
};

const contactInformation = [
    {id: 1, icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path></svg>, contact: '/', email: 'efandio904@gmail.com'},
    {id: 2, title: 'GitHub', icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"></path></svg>, contact: 'https://github.com/Efandio'},
    {id: 3, title: 'LinkedIn', icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg>, contact: 'https://www.linkedin.com/in/efandio-attahya-nofianto-1644a432b/'}
];

const ContactSection: React.FC<ContactSectionProps> = ({ className, id }) => {
    return (
        <main id={id} className={`w-full px-10 h-fit py-10 flex flex-col space-y-8 ${className}`}>
            <div className="flex justify-center">
                <Badge className="text-sm px-4">Contact Me</Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-10">
                {contactInformation.map((contact) => (
                    <div key={contact.id} className="flex flex-col items-center justify-center">
                        <a className="lg:scale-200 lg:pb-5" href={contact.contact}>
                            {contact.icon}
                        </a>
                        <Badge className="px-6 lg:translate-y-1">{contact.email}</Badge>
                        <Badge className="px-6">{contact.title}</Badge>
                    </div>
                ))}
            </div>
        </main>
    )
};

export default ContactSection;