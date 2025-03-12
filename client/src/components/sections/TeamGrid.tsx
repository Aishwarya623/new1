import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  credentials: string;
}

interface TeamGridProps {
  teamType: "core" | "software";
}

export default function TeamGrid({ teamType }: TeamGridProps) {
  const coreTeam: TeamMember[] = [
    {
      name: "Dr. Rajasekhar Bangaru",
      role: "AI Research Lead",
      credentials: "PhD, Indian Institute of Science"
    },
    {
      name: "Dr. Bibin Francis",
      role: "AI Research Lead",
      credentials: "PhD, Indian Institute of Science"
    },
    {
      name: "Prateek Singh",
      role: "AI Engineer",
      credentials: "BS, IISc; Masters, AI, IIT KGP"
    },
    {
      name: "Kaushik Kukadiya",
      role: "AI Engineer",
      credentials: "MTech, AI, Indian Institute of Science"
    },
    {
      name: "Karmanya Beniwal",
      role: "AI Engineer",
      credentials: "Masters, Smart Manufacturing, IISc"
    },
    {
      name: "Harshit Dubey",
      role: "AI Engineer",
      credentials: "BS, Indian Institute of Science"
    }
  ];

  const softwareTeam: TeamMember[] = [
    {
      name: "Rohit Katariya",
      role: "Senior Software Engineer",
      credentials: "BTech, Computer Science"
    },
    {
      name: "Manjunath",
      role: "Senior Software Engineer",
      credentials: "BTech, Computer Science"
    },
    {
      name: "Tejaswini N",
      role: "Full Stack Developer",
      credentials: "MCA"
    },
    {
      name: "Navneetha N",
      role: "Front End Developer",
      credentials: "MCA"
    },
    {
      name: "Kiran",
      role: "Designer",
      credentials: "BCA"
    }
  ];

  const team = teamType === "core" ? coreTeam : softwareTeam;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {team.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{member.credentials}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}