const intersection1 = document.getElementById("intersection1");
const intersection2 = document.getElementById("intersection2");
const intersection3 = document.getElementById("intersection3");
const intersection4 = document.getElementById("intersection4");
const intersection5 = document.getElementById("intersection5");
const intersection6 = document.getElementById("intersection6");
const intersection7 = document.getElementById("intersection7");
const intersection8 = document.getElementById("intersection8");
const intersection9 = document.getElementById("intersection9");
const intersection10 = document.getElementById("intersection10");
const intersection11 = document.getElementById("intersection11");
const intersection12 = document.getElementById("intersection12");
const intersection13 = document.getElementById("intersection13");
const intersection14 = document.getElementById("intersection14");
const intersection15 = document.getElementById("intersection15");




const cargarIntersection = entradas=>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.remove("estilo-intersection");
            entrada.target.classList.add("visible");
        }
    }
    )
}


const observador = new IntersectionObserver(cargarIntersection,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
}
);




observador.observe(intersection1);
observador.observe(intersection2);
observador.observe(intersection3);
observador.observe(intersection4);
observador.observe(intersection5);
observador.observe(intersection6);
observador.observe(intersection7);
observador.observe(intersection8);
observador.observe(intersection9);
observador.observe(intersection10);
observador.observe(intersection11);
observador.observe(intersection12);
observador.observe(intersection13);
observador.observe(intersection14);
observador.observe(intersection15);