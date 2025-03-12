import { motion } from "framer-motion";
import TeamGrid from "@/components/sections/TeamGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Team() {
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
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="core">Core Team</TabsTrigger>
          <TabsTrigger value="software">Software Team</TabsTrigger>
        </TabsList>

        <TabsContent value="core">
          <TeamGrid teamType="core" />
        </TabsContent>

        <TabsContent value="software">
          <TeamGrid teamType="software" />
        </TabsContent>
      </Tabs>
    </div>
  );
}