export const scrollToSection =  (goTo) =>{
    document.querySelector("#" + goTo).scrollIntoView({behaivour:"smooth"});
    console.log(goTo)
};