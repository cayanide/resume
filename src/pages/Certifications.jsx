export default function Certifications() {
  const certifications = [
    "Microsoft Certified: Azure Security Engineer Associate – Apr 2025",
    "Application Development using Microservices & Serverless (IBM) – Jul 2024",
    "Data Structures & Algorithms (GFG) – Jul 2024",
    "Cloud Virtualization, Containers & APIs (Duke University) – Jul 2024",
    "Spring Cloud Overview (LearnQuest) – Jul 2024",
    "Deploy Microservices using Spring Cloud Framework (Coursera) – Jun 2024",
    "Docker, Kubernetes & OpenShift (IBM) – Jun 2024",
    "Theory of Computation (Udemy) – Nov 2023",
    "Machine Learning (IIT Bombay) – Mar 2023",
    "Foundations: Data, Data, Everywhere (Coursera) – Oct 2021",
    "Core Java (Internshala) – Aug 2021",
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        🏆 Certifications
      </h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="p-4 rounded-lg bg-gray-800/70 border border-white/10 hover:border-blue-400 transition"
          >
            <p className="text-gray-200">{cert}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
