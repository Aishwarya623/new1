import { motion } from "framer-motion";
import TeamGrid from "@/components/sections/TeamGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Team() {
  const advisors = [
    {
      name: "Prof. Abhik Choudhary",
      role: "Advisor",
      institution: "Indian Institute of Science"
    },
    {
      name: "Prof. Gandham Phanikumar",
      role: "Advisor",
      institution: "Indian Institute of Technology, Madras"
    },
    {
      name: "Prof. Rajendra Munian",
      role: "Advisor",
      institution: "Indian Institute of Technology, Ropar"
    },
    {
      name: "Dr. Rashmi Patel",
      role: "Advisor",
      institution: "M.B.B.S, M.S, Surgeon"
    }
  ];

  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A team of researchers and engineers from India's premier institutions, dedicated to advancing AI technology
        </p>
      </motion.div>

      <Tabs defaultValue="core" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="core">Core Team</TabsTrigger>
          <TabsTrigger value="software">Software Team</TabsTrigger>
          <TabsTrigger value="advisors">Advisors</TabsTrigger>
        </TabsList>

        <TabsContent value="core">
          <TeamGrid teamType="core" />
        </TabsContent>

        <TabsContent value="software">
          <TeamGrid teamType="software" />
        </TabsContent>

        <TabsContent value="advisors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{advisor.name}</h3>
                    <p className="text-primary font-medium">{advisor.role}</p>
                    <p className="text-muted-foreground">{advisor.institution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
