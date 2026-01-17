import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Wanderhost",
    description: "Airbnb inspired MERN Full Stack project",
    image: "/projects/wanderhost.png",   
    tags: ["Mongo DB","Express JS","EJS","Node JS"],
    demoUrl: "https://wanderhost-majorproject.onrender.com",
    githubUrl: "https://github.com/arpooja-githhub/MajorProject",
  },
  {
    id: 2,
    title: "SmartGPT",
    description: "Open AI integrated MERN Full Stack project",
    image: "/projects/smartgpt.jpeg",   
    tags: ["React JS","Mongo DB","Express JS","Node JS"],
    demoUrl: "https://mysmartgpt.onrender.com",
    githubUrl: "https://github.com/arpooja-githhub/MySmartGPT",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Personal website",
    image: "/projects/image.png",   
    tags: ["React JS", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 4,
    title: "Enhancing Real Estate Investment Decisions using Predictive Modeling",
    description: "Machine learning model",
    image: "/projects/real.png",   
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/arpooja-githhub/Enhancing-Real-Estate-Investment-Decisions-using-Predictive-Modeling",
  },
    {
    id: 5,
    title: "Predicting Loan Repayment Probabilities",
    description: " Machine learning model",
    image: "/projects/lloan.png",   
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/arpooja-githhub/Predicting-Loan-Repayment-Probabilities-for-Mobile-Microcredit",
  },
    {
    id: 6,
    title: "Census Income Prediction",
    description: " Machine learning model",
    image: "/projects/cc.png",   
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/arpooja-githhub/Census-Income-Prediction",
  },
];


export const ProjectsSection = () =>{
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{" "}
                    My <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects with were created as a part of learning
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>{
                        return(
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"></img>
                            </div>
                           <div className="p-6">
                             <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) =>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                          
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <GithubIcon size={20}/>
                                    </a>
                                </div>
                                 </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href="https://github.com/arpooja-githhub" target="_blank">Check My Github <ArrowRight/></a>
                </div>
            </div>
        </section>
    )
};