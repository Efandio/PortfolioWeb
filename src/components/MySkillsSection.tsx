import { PanelsTopLeft } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const mySkills = [
    {
      id: 1,
      name: 'Frontend Development',
      description: 'Creating responsive and intuitive user interfaces with modern frameworks and libraries.',
      skills: [
        'HTML/CSS',
        'JavaScript / TypeScript',
        'React',
        'Vue',
        'Tailwind CSS',
        'Redux Toolkit',
        'Pinia',
      ],
    },
    {
      id: 2,
      name: 'Soft Skills',
      description: 'Communication, teamwork, and problem-solving abilities.',
      skills: [
        'Teamwork',
        'Problem Solving',
        'Time Management',
        'Adaptability',
        'Critical Thinking',
        'Curiosity',
      ],
    },
  ];
  

interface MySkills {
    id: string;
    className?: string;
};

const MySkillsSection: React.FC<MySkills> = ({ id, className }) => {
    return (
        <main id={id} className={`container w-full h-fit flex flex-col gap-8 ${className}`}>
            <span className="w-full h-fit flex justify-center">
                <Badge className="justify-center px-5 text-base">Skills</Badge>
            </span>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 justify-items-center ">
                {mySkills.map((skill) => (
                <Card className="w-[70vw] lg:w-[25vw]">
                    <CardContent className="flex flex-col gap-2">
                    <div className="bg-gray-200 h-fit w-fit p-2 rounded-full">
                        <PanelsTopLeft size={28} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-xl lg:text-2xl">{skill.name}</h3>
                        <p className="leading-4 text-xs lg:text-sm text-black/50">{skill.description}</p>
                        <div className="grid grid-cols-2 gap-2 w-40 lg:w-70 mt-1 lg:mt-3">
                            {skill.skills.map((i) => (
                                <Badge className="text-[8px] lg:text-[12px] w-fit">{i}</Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
                </Card>
                ))}
            </section>
        </main>
    )
};

export default MySkillsSection;