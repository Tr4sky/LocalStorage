document.getElementById('btnLogin').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('hidden');
  });
  
  document.getElementById('btnFechar').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
  });
  
  document.getElementById('formCadastro').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const usuario = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      cpf: document.getElementById('cpf').value,
      senha: document.getElementById('senha').value
    };
  
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Seu cadastro foi realizado!');
    window.location.href = 'profile.html';
  });

  
  function mascara_cpf()
        { var cpf_formatado = document.getElementById("cpf").value
            if (cpf_formatado[3]!=".")
            {
                if (cpf_formatado[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
                }
            }
        
            if (cpf_formatado[7]!=".")
            {
                if(cpf_formatado[7]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
                }
            }

            if (cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
                }
            }
        }

        function mascara_telefone ()
        {
           
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) 
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }