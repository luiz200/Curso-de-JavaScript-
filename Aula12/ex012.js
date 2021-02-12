var hora = 1;
if(hora>= 5 && hora < 12){
    console.log(`São ${hora}hrs, Bom Dia! `)
}else if(hora >= 12 && hora <= 18){
    console.log(`São ${hora}hrs, Boa Tarde!`)
}else if(hora >= 0 && hora < 5){
    console.log(`São ${hora}hrs, Boa Madrugada!`)
}
else{
    console.log(`São ${hora}hrs, Boa Noite!`)
}