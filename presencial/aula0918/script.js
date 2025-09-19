addEventListener('load', () => {
    let verifica = document.getElementById("verifica");
    let nome = document.getElementById("nome");
    let teste = document.getElementById("teste");
    let bd1 = document.getElementById("bd1");
    let lista = document.getElementById("lista");
    let lista2 = document.getElementById("lista2");
    let google = document.getElementById("google");
    
        
    verifica.addEventListener('click', () => console.log(nome.value));
    teste.addEventListener('click', () =>  console.log("click no div"));
    bd1.addEventListener('click', () => console.log("click body"));
    lista.addEventListener('click', (e) => e.target.classList.toggle('riscado'));
    lista2.addEventListener('click', (e) => e.target.classList.toggle('active'));
    google.addEventListener('click', (e) => !confirm("Deseja realmente sair") ? e.preventDefault(): null);
    
});
