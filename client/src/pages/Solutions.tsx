import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Eye, Database, Lock, Search, FileText } from "lucide-react";

export default function Solutions() {
  const nlpSolutions = [
    {
      icon: Brain,
      title: "Large Language Models",
      description: "State-of-the-art LLMs for advanced language understanding and generation"
    },
    {
      icon: Database,
      title: "Document Processing",
      description: "Automated digitization and processing of structured & unstructured data"
    },
    {
      icon: Search,
      title: "Information Retrieval",
      description: "Advanced RAG architecture for efficient information retrieval and insights"
    }
  ];

  const cvSolutions = [
    {
      icon: Eye,
      title: "Object Detection",
      description: "Real-time object detection using YOLO, SSD, and Faster R-CNN"
    },
    {
      icon: Lock,
      title: "Security & Surveillance",
      description: "Advanced facial recognition and anomaly detection systems"
    },
    {
      icon: FileText,
      title: "Quality Control",
      description: "Automated visual inspection and real-time quality monitoring"
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
        <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Cutting-edge AI solutions leveraging advanced NLP and Computer Vision technologies
        </p>
      </motion.div>

      <Tabs defaultValue="nlp" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="nlp">Natural Language Processing</TabsTrigger>
          <TabsTrigger value="cv">Computer Vision</TabsTrigger>
        </TabsList>

        <TabsContent value="nlp">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nlpSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <solution.icon className="h-10 w-10 text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Standalone models without external API dependencies</li>
              <li>• Secure and private data processing</li>
              <li>• Custom-tailored solutions for specific domains</li>
              <li>• Integration with existing systems</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="cv">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cvSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <solution.icon className="h-10 w-10 text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Applications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Manufacturing quality control</li>
              <li>• Security and surveillance systems</li>
              <li>• Automated visual inspection</li>
              <li>• Real-time monitoring and analytics</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}