import { ArrowDown } from "lucide-react"

export const HeroSection = ()=>{
    return <section 
    id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hii, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}  Pooja</span>
                    <span className="text-primary ml-opacity-0 animate-fade-in-delay-2">  A R</span>
                </h1>
                <p className="text-lg  md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Prefinal-year CSE (Data Science) student and MERN Full-Stack Developer.
                   <div>Building scalable web applications while exploring Data Science & Machine Learning.</div>
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">View My Work</a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>

        </div>
    </section>
}