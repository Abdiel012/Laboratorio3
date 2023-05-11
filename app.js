(() => {
    const App = {
        HTMLElement: {},
        init() {
            var t =0;
            App.methods.palindromo("submit");
            App.methods.contar("submit");
            App.methods.bisiesto("submit");
           App.methods.suma("submit");
        },
        handlers: {},
        methods: {
                    //  Problema 1
                palindromo(){
                     t = prompt("Ingrese un numero para saber si es palindromo:","Solo numeros");
                     t = t.toLowerCase().replace(/\s/g,"");
                     let et = t.split("").reverse().join("");
            
                     function palindromo (t){
                        if (t == et){
                            alert('Es palindromo');
                        }
                        else{
                            alert('No es palindromo');
                        }
                     }
                     
            
             
                    },
            
                                  // Problema 2
                     contar(){
                        let arreglo = t.split('').sort();
                        let u = [];
                        let n = [];
                        let c =1;
                        let r = "";
                        for(var i = 0; i<t.length; i++ ){
                            if(arreglo[i+1]===arreglo[i]){
                                    c++;
            
                            }
                            else{
                                u.push(arreglo[i]);
                                n.push(c);
                                c =1;
                            }
                    }
                    for(i = 0; i <u.length; i++ ){
              
                        r = r + "El valor: " + u[i] + " se repite " + n[i] + " veces,\n";
                    }
                    alert(r);
                    },
            
                                 // Problema 3
                                 bisiesto(){
                     var a = prompt("Ingrese un año para saber si es bisiesto:","año:");;
                     if (a % 4 == 0 ){
                        alert("Este año es bisiesto");
                     }
                     else{
                        alert("Este año no es bisiesto");
                    }
                     },
                                // Problema 4
                                suma(){
                var num = prompt("Ingrese un numero mayor que 0 y menor que 1000000 para hacer su sumatoria:","Solo numeros");
                            var v = [];
                var primos = [];
                var resp;
                var primero;
                var ultimo;
                                    if (num < 0 || num > 1000000 ){
                                alert("El numero no cumple con los parametros asignados.")
                            }
            else{
            
            
                for (let k = 2; k <=num; ++k){
                    if (!v[k]){
                        primos.push(k);
                        
                        for (let l = k << 1 ; l <= num; l += k ){
                            v[l] = true;
                        }
                       resp=primos.reduce((primero, ultimo) => {
                       return primero + ultimo;
                    }
                    );
                }
            
            }
        }
                        alert(resp);
                        }
          
        },
    };
    App.init();
 })();        