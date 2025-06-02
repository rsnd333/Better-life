
$(document).ready(function(){
    $("#carrossel-imagens").slick({
        autoplay:true
    });
    $(".menu-hamburguer").click(function(){
        $("nav").slideToggle();
    })
    $("#telefone").mask("(00)00000-0000", {
        placeholder:"(00)00000-0000"                
    })                                              
    $("form").validate({                            
    rules:{                                         
        nome:{
            required:true
        },
        email:{
            required:true,
            email:true                              
        },
        telefone:{
            required:true
        },
        mensagem:{
            required:true
        },
        itemInteresse:{
            required:true
        }
    },
    messages:{
        nome:"Este campo é obrigatório"               
},
submitHandler: function(form){                         
    console.log(form)
},
invalidHandler: function(evento, validador){                            
    let camposIncorretos = validador.numberOfInvalids();                                            
    console.log(camposIncorretos);  
    if(camposIncorretos){                                       
        alert(`Existem ${camposIncorretos} campos incorretos`)
    }
},
})                            
$(".lista-oleos button").click(function(){                   
    const destino = $("#contato");                               
    const nomeOleo = $(this).parent().find("h3").text();        
    $("#oleo").val(nomeOleo)                    
    $("html").animate({                                         
        scrollTop: destino.offset().top                     
    },1000);
})
})

const ano = document.querySelector("#ano-atual");
ano.innerHTML = new Date().getFullYear();
