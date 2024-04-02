try{
    const resultado = converte(123);

    console.log(resultado);

}catch(error){
    if(error instanceof TypeError)
        console.log("TypeError: Tipo de dado incorreto")
    else 
        console.log("Erro: " + error)
}finally{
    console.log("Bye Bye!")
}
// }catch(error){
//     console.log(Object.getPrototypeOf(error)) //tipo do erro
// }

export function converte(conteudo: any){
    conteudo.toUpperCase();
}