


 let user = [
    {nome : prompt ("digite seu nome:"),
    nota1:  Number(prompt("digite a nota 1")),
    nota2:  Number(prompt  ("digite a nota 2:"))},

    {nome : prompt ("digite seu nome:"),
    nota1:  Number(prompt("digite a nota 1")),
    nota2:  Number(prompt  ("digite a nota 2:"))},

    {nome : prompt ("digite seu nome:"),
    nota1:  Number(prompt("digite a nota 1")),
    nota2:  Number(prompt  ("digite a nota 2:"))},
 
 ]

 let nomes = []

 let notas1 = []

 let notas2 = []

 for (let users of user){
    nomes.push(users.nome)
    notas1.push(users.nota1)
    notas2.push(users.nota2)
 }

 for (let index = 0; index<user.length; index++){
    let media = ((notas1[index] + notas2[index])/2)
    if (media > 7){
        alert (`O aluno ${nomes[index]} tem a media: ${media}. APROVADOOO!!! `)
    } else{
        alert (`O aluno ${nomes[index]} tem a media: ${media}. REPROVADO. `)
    }
  
}
   





















