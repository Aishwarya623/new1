import Hero from "@/components/sections/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Building2, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Solutions",
      description: "State-of-the-art NLP and Computer Vision technologies tailored for your needs."
    },
    {
      icon: Code,
      title: "Indigenous Development",
      description: "Fully in-house developed solutions ensuring data privacy and security."
    },
    {
      icon: Building2,
      title: "Industry Expertise",
      description: "Deep experience across manufacturing, healthcare, BFSI, and smart cities."
    },
    {
      icon: LineChart,
      title: "Research Background",
      description: "Team from IISc and IITs with strong research and industry expertise."
    }
  ];

  return (
    <div className="w-full">
      <Hero />

      <section className="py-24 bg-gray-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose NovaAutomata</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine academic excellence with industry expertise to deliver cutting-edge AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}