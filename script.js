function resultado () { 
    var inicio = document.getElementById ('ini')
    var fim = document.getElementById ('fim')
    var passo = document.getElementById ('pas')
    var resultado = document.getElementById ('res')
        if (inicio.value.length ==0 || fim.value.length ==0 || passo.value.length ==0) {window.alert ('Erro - Faltam dados')} else {resultado.innerHTML = `Contando ->`
            var ini1 = Number(inicio.value)
            var fim1 = Number(fim.value)
            var pas1 = Number(passo.value)
            if (pas1<=0){window.alert ('Por Favor, insira um passo válido.') }
            if (ini1<fim1){
                //contagem crescente
                for(var c = ini1 ; c <= fim1 ; c += pas1) {
                resultado.innerHTML += ` ${c} \u{1F638}`}
            } else 
            //contagem regrescente
            { for (var c=ini1; c>=fim1; c-= pas1){
                resultado.innerHTML += `${c} \u{1F63E} `
            }
                
            }
            resultado.innerHTML += `\u{1F3C1}`
            }

            
    
    }

    

        
    


    
