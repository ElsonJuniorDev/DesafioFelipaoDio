

let heroisXp = [["Galaticos" , 10100],
                ["Thor" , 10000], 
                ["Feiticeira Escarlate" , 8100],
                ["Homem de Ferro" , 7100],
                ["Pantera Negra" , 6100],
                ["Capitão America" , 4000],
                ["Gavião Arqueiro" , 1100],
                ["Jubileu" , 999]
                ];

for(let i = 0; i < 8; i++){
    let xp;
    if(heroisXp[i][1] <= 1000){
         xp = "Ferro"
    }else if(heroisXp[i][1] >= 1001 && heroisXp[i][1] <= 2000 ){
        xp = "Bronze"
    }else if(heroisXp[i][1] >= 2001 && heroisXp[i][1] <= 5000 ){
        xp = "Prata"
    }else if(heroisXp[i][1] >= 5001 && heroisXp[i][1] <= 7000 ){
        xp = "Ouro"
    } else if(heroisXp[i][1] >= 7001 && heroisXp[i][1] <= 8000 ){
        xp = "Platina"
    } else if(heroisXp[i][1] >= 8001 && heroisXp[i][1] <= 9000 ){
        xp = "Ascendente"
    } else if(heroisXp[i][1] >= 9001 && heroisXp[i][1] <= 10000 ){
        xp = "Imortal"
    } else{
        xp = "Radiante"
    }                        
    console.log("O Heroi " + heroisXp[i][0] + " Esta no nivel " + xp);
}
