class Cliente{
    constructor(nome, idade, estado){
        this.nome = nome;
        this.idade = idade;
        this.estado = estado;
    }

  info(){
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Estado: ${this.estado}`);
    console.log("---------------")
  }

  setNome(nome){
    this.nome=nome;
  }

  setIdade(idade){
    this.idade= idade;
  }

  setEstado(estado){
    this.estado=estado;
  }
 }

 const listaClientes = [];

 function cadastrar(){
    
  const nome = document.getElementById("txtnome");
  const idade = document.getElementById("txtidade");
  const estado = document.getElementById("txtestado");
  if(nome.value == 0 || idade.value == 0 || estado.value == 0){
    alert("complete todos os campos para concluir seu cadastro")
  }else{
    const c = new Cliente(nome.value, idade.value, estado.value);
    listaClientes.push(c);
    console.log(listaClientes);
    alert("Cadastro realizado com sucesso");
  
    nome.value = "";
    idade.value ="";
    estado.value = "";
    nome.focus();
  }
}



 

 

 
