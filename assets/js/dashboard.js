
// FUNÇÃO PARA INICIAR OS MODAIS

function iniciaModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("mostrar");
}
// FUNÇÃO PARA PARAR O MODAL ESTOQUE
function modalEstoque(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("mostrar");
}

// MODAL DE CADASTRO DE FUNCIONARIO

const cad_fun = document.querySelector("#cad_fun");
cad_fun.addEventListener("click", () => {
  iniciaModal("modal-container-cad-fun");
});

// MODAL DE CADASTRO DE CLIENTES

const cad_cli = document.querySelector("#cad_cli");
cad_cli.addEventListener("click", () => {
  iniciaModal("modal-container-cad-cli");
});

// MODAL DE CADASTRO DE SERVIÇOS

const cad_ser = document.querySelector("#cad_ser");
cad_ser.addEventListener("click", () => {
  iniciaModal("modal-container-cad-ser");
});

// MODAL DE CADASTRO DE PETS

const cad_pet = document.querySelector("#cad_pet");
cad_pet.addEventListener("click", () => {
  iniciaModal("modal-container-cad-pet");
});
// MODAL DE FUNCIONARIO

const fun = document.querySelector("#fun");
fun.addEventListener("click", () => {
  iniciaModal("modal-container-fun");
});

// MODAL DE CADASTRO DE CLIENTES

const cli = document.querySelector("#cli");
cli.addEventListener("click", () => {
  iniciaModal("modal-container-cli");
});

// MODAL DE CADASTRO DE SERVIÇOS

const ser = document.querySelector("#ser");
ser.addEventListener("click", () => {
  iniciaModal("modal-container-ser");
});

// MODAL DE ESTOQUE

const estoque = document.querySelector("#estoque");
estoque.addEventListener("click", () => {
  iniciaModal("modal-container-estoque");
});

const removeestoque = document.querySelector("#modal-container-estoque");
removeestoque.addEventListener("click", () => {
  modalEstoque("modal-container-estoque");
});
// FUNÇÃO DE BUSCA

function buscarevent(){
  const busca= document.getElementsByClassName("modal-bnt-cad");
  busca.style.color='black';
}

const buscar = document.getElementsByClassName("modal-bnt-cad");
buscar.addEventListener("click",() =>{
  buscarevent();
});
