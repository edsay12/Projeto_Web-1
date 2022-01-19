function nav_bar_response() {

    const buttonLinks = window.document.getElementById('openLinks')
    function nav_response() {
        window.document.getElementById("logo").classList.toggle('logo_open')
        window.document.getElementById('links').classList.toggle('link_open')
        window.document.getElementById('header').classList.toggle('header_open')
        window.document.querySelector('body').classList.toggle('display')
        window.document.addEventListener('scroll', nav_responseWindow)

    }

    function nav_responseWindow() {
        window.document.getElementById("logo").classList.remove('logo_open')
        window.document.getElementById('links').classList.remove('link_open')
        window.document.getElementById('header').classList.remove('header_open')
        window.document.querySelector('body').classList.remove('display')
    }


    buttonLinks.addEventListener('click', nav_response)


}

nav_bar_response()
        
        const plan = window.document.querySelectorAll(".planos_form form .right_side .section1 .plans .plan")
        plan[1].classList.add("selected")
        for (var item of plan) {
            item.addEventListener('click', () => {
                plan[0].classList.toggle('selected')
                plan[1].classList.toggle('selected')
            })
        }

        // mascaras
        const cpf = window.document.querySelector("#cadastro_cpf")
        cpf.addEventListener("keyup", (event) => {
            cpf.value = cpf.value.replace(/\D/, "") // vali remover tudo que nao for numero
            cpf.value = cpf.value.replace(/([\d]{3})/, "$1.")
            cpf.value = cpf.value.replace(/^([\d]{3})\.([\d]{3})$/, "$1.$2.")
            cpf.value = cpf.value.replace(/^([\d]{3})\.([\d]{3})\.([\d]{3})$/, '$1.$2.$3-')

        })
        const phone = window.document.querySelector("#cadastro_fone")
        phone.addEventListener("keyup", (event) => {
            phone.value = phone.value.replace(/\D/g, "")
            phone.value = phone.value.replace(/^(\d\d)(\d)/," ($1) $2")
            phone.value = phone.value.replace(/\((\d\d)\).(\d{5})/,"($1) $2-")
            // phone.value = phone.value.replace(/\(([\d]{2})\)([\d]{4})/, "($1)$2-")

        })
        const formData = {}
       

        const inputs = window.document.querySelectorAll('input')
        let erros =[]
        const submitButton = window.document.querySelector('.section2 button')
        let clientes = []

        submitButton.addEventListener('click',()=>{
            erros =[]
            validaForm()
        })

        const formulario = window.document.querySelector('form')
            formulario.addEventListener("submit",(e)=>{
                e.preventDefault()
            })
        
        function validaForm(){
            
            for(var b of inputs){
                const name = b.name
                formData[name] = b.value
                // formData['ref'] = 2
             }

            verificaSeVazio()
            validaEmail()
            validaNome()
            validaTelefone()
            validaCpf()

            if(erros.length > 0){
                let itens =''
                for(var c of erros){
                    itens += `- ${c}\n`
                }
                alert(itens)
            }else{
                clientes = []
                if(localStorage.getItem('Clientes')){
                    for(var c of JSON.parse(localStorage.getItem('Clientes'))){
                        clientes.push(c)
                    }
                    

                }

                clientes.push(formData)
                localStorage.setItem('Clientes', JSON.stringify(clientes))
                formulario.submit()
            }

                       

        }
        function verificaSeVazio(){
            for(var s in formData){
                if(formData[s] == ""){
                    let element = window.document.querySelector(`input[name=${s}]`)
                    element.style.border = '1px solid red'
                }else{
                    let element = window.document.querySelector(`input[name=${s}]`)
                    element.style.border = '1px solid #2176FF'
                }
            }
        }
        function validaNome(){
            for(var c in formData){
                if(formData[c] == ""){
                    erros.push('Alguns Campos Estão Vazios')
                    return false
                }
            }
        }

        function validaEmail(){
            const element = window.document.querySelector('input[name=email]')
            if(formData.email.match(/.+\@.+\..+/g)){
                return true
            }else{
                erros.push('Digite Um email Valido')
                element.style.border ='1px solid red'
            }
        }
        function validaTelefone(){
            const element = window.document.querySelector('input[name=tel]')
            
            if(formData.tel.match(/\((\d){2}\)(\s)(\d){5}\-(\d){4}/g)){
                return true
            }else{
                erros.push('Telefone Invalido')
                element.style.border = '1px solid red'

            }
            
            
        }
        function validaCpf(){
            const element = window.document.querySelector('input[name=cpf]')
            if(formData.cpf.match(/(\d){3}\.(\d){3}\.(\d){3}\-(\d){2}/)){
                return true

            }else{
                erros.push('Cpf invalido')
                element.style.border ='1px solid red'
                
            }
            

        }

