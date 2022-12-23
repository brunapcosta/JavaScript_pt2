
const desconto = (nameclient, valueTotal, firstBuy, payment) => {
    nameclient = ' '
    if (firstBuy && payment) {
        if (valueTotal > 1000) {
            const descont = valueTotal - (valueTotal * 0, 30)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont}, você recebeu um desconto de 30%`)
        }
        if (valueTotal < 1000 && valueTotal > 500) {
            const descont2 = valueTotal - (valueTotal * 0, 25)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont2}, você recebeu um desconto de 25%`)
        }
        if (valueTotal < 500) {
            const descont3 = valueTotal - (valueTotal * 0, 20)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont3}, você recebeu um desconto de 20%`)
        }
    }

    if (firstBuy && !payment) {
        if (valueTotal > 1000) {
            const descont4 = valueTotal - (valueTotal * 0, 20)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont4}, você recebeu um desconto de 20%`)
        }
        if (valueTotal < 1000 && valueTotal > 500) {
            const descont5 = valueTotal - (valueTotal * 0, 15)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont5}, você recebeu um desconto de 15%`)
        }
        if (valueTotal < 500) {
            const descont6 = valueTotal - (valueTotal * 0, 10)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont6}, você recebeu um desconto de 10%`)
        }
    }

    if (!firstBuy && payment) {
        if (valueTotal > 1000) {
            const descont7 = valueTotal - (valueTotal * 0, 20)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont7}, você recebeu um desconto de 20%`)
        }
        if (valueTotal < 1000 && valueTotal > 500) {
            const descont8 = valueTotal - (valueTotal * 0, 15)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont8}, você recebeu um desconto de 15%`)
        }
        if (valueTotal < 500) {
            const descont9 = valueTotal - (valueTotal * 0, 10)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont9}, você recebeu um desconto de 10%`)
        }
    }

    if (!firstBuy && !payment) {
        if (valueTotal > 1000) {
            const descont10 = valueTotal - (valueTotal * 0, 10)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont10}, você recebeu um desconto de 10%`)
        }
        if (valueTotal < 1000 && valueTotal > 500) {
            const descont11 = valueTotal - (valueTotal * 0, 05)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}, total a pagar ${descont11}, você recebeu um desconto de 5%`)
        }
        else if (valueTotal < 500) {
            cupom = Math.floor(Math.random() * (20 - 10) + 10)
            console.log(`Agradecemos por comprar com a gente. Valor total é de R$${valueTotal}. Voce ganhou um desconto de ${cupom}%`)
        }
    }
}

desconto('Bruna', 400, false, false)