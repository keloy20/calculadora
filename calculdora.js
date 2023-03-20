function criaCalculadora(){
    return{
        display:document.querySelector(".display"),
        btnclear: document.querySelector(".btn-clear"),

        clearDisplay(){
        this.display.value ="";
        },

        apagaultimo(){
            this.display.value = this.display.value.slice(0, -1)
        },

        resultado(){
            let conta = this.display.value
            try{
                 conta =eval(conta)
                if(!conta){
                    alert("Conta invalida")
                    return
                }
                    
                    this.display.value = conta
            } catch(e){
alert("conta invalida")
            }
        },

        inicia(){
          this.cliqueBotoes();
          this.clicaEnter();
        },

        clicaEnter(){
            this.display.addEventListener("keyup", (e)=>{
                if(e.keyCode===13){
                    this.resultado()
                   
                }
                //botao enter com problema esta repetindo o ultimo numero.
            })

        },

        cliqueBotoes(){
            //this => calculadora
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains("btn-clear")){
                    this.clearDisplay();
                }

                if(el.classList.contains("btn-del")){
                    this.apagaultimo()
                }

                if(el.classList.contains('btn-eq')){
                    this.resultado()

                }

                this.display.focus();

            }.bind(this))

        },
        btnParaDisplay(valor){
            this.display.value += valor;

        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()