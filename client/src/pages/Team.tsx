import { motion } from "framer-motion";
import TeamGrid from "@/components/sections/TeamGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // Import Avatar component

export default function Team() {
  const advisors = [
    {
      id: "ABC",
      role: "Advisor",
      credentials: "Professor, Indian Institute of Science",
      expertise: "AI Research & Development"
    },
    {
      id: "GPK",
      role: "Advisor",
      credentials: "Professor, Indian Institute of Technology, Madras",
      expertise: "Machine Learning Systems"
    },
    {
      id: "RMN",
      role: "Advisor",
      credentials: "Professor, Indian Institute of Technology, Ropar",
      expertise: "Industrial AI Applications"
    },
    {
      id: "RPT",
      role: "Advisor",
      credentials: "M.B.B.S, M.S, Surgeon",
      expertise: "Medical AI Applications"
    }
  ];

  return (
    <div className="container py-24 mx-auto px-4 sm:px-6 lg:px-8">
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
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {advisor.id}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-primary font-medium">{advisor.role}</p>
                        <p className="text-muted-foreground">{advisor.credentials}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">{advisor.expertise}</p>
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