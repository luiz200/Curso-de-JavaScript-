var idade = 67;
console.log(`você têm ${idade}`)
if(idade < 16){
    console.log('não vota')
}else if(idade >= 16 && idade < 18 || idade > 60){
    console.log('voto opcional')
}else{
    console.log('voto obrigatório')
}