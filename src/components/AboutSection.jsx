export const AboutSection = ()  =>{
    return (
        <section id="about" className="py-24 px-4 relative">{""}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    About<span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Aspiring Software Developer & Problem Solver</h3>
                        <p className="text-muted-foreground">
                           I'm a 3rd year passinate Computer Science Engineering(Data Science)  Student with a CGPA Of 9.28.
                        </p>
                        <p  className="text-muted-foreground">
                             {/* I’ve built predictive models to estimate house prices and assess loan repayment risks, and created interactive web applications
                             using the MERN stack.  */}
                             With hands-on experience developing full-stack web applications using the MERN stack.
                              Alongside web development, I work on data science and machine learning concepts and regularly practice data structures and algorithms in Java to improve problem-solving and code efficiency.
                           

                        </p>
                        <p> I’m someone who finds joy in bringing ideas to life — from building predictive models to crafting interactive
                             web experiences.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">{" "}Get in Touch</a>
                             <a href="https://drive.google.com/file/d/1eJ3rD4-fHB_F_Vt2dRZqNSGt_qJCjITe/view?usp=sharing"
                              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {" "}Download Resume
                                </a>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover"></div>
                         <div className="gradient-border p-6 card-hover"></div>
                
                    </div> */}
                    <div>
                        <img src="/projects/poo-pic.jpg" className="gradient-border ml-50 h-65 w-60 p-5 card-hover"></img>
                    </div>
                </div>

            </div>
        </section>
    )
    
}