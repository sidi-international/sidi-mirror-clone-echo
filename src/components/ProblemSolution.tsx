import { Card, CardContent } from "./ui/card";
const features = [{
  title: "Accessibility",
  description: "No space experience required. Our guided journey takes you step by step into the most promising market of the future.",
  image: "/lovable-uploads/3db0b114-873d-436e-8032-096850270dfe.png"
}, {
  title: "Strategic Transformation",
  description: "We convert your existing skills into strategic assets for the space market, creating dual-use business models with both terrestrial and space value.",
  image: "/lovable-uploads/d7de8284-5310-455f-aed0-dca8d81c6094.png"
}, {
  title: "Efficiency",
  description: "Concrete results thanks to HAL 2001's artificial intelligence, which optimizes every phase of the journey, reducing time and costs.",
  image: "/lovable-uploads/3a4ec2ee-d5c1-4083-8c0f-818d15c4c608.png"
}];
const ProblemSolution = () => {
  return <section id="problem-solution" className="section bg-white">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="text-secondary">The Future is in Space</h2>
          <p className="text-xl">The space market is worth trillions, but traditional companies don't know how to access it. Discovery One is the bridge between your company and the infinite opportunities of space.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => <Card key={index} className="feature-card border-0 overflow-hidden hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6">
                  <img src={feature.image} alt={feature.title} className="w-20 h-20 mx-auto object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ProblemSolution;