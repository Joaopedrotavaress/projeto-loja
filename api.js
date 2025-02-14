function calcularDistancia() {
    console.log("Função calcularDistancia foi chamada!");

    const cep = document.getElementById("cep").value;
    const valorCompra = parseFloat(document.getElementById("valor").value);

    if (!cep || isNaN(valorCompra)) {
        alert("Por favor, preencha o CEP e o valor da compra corretamente.");
        return;
    }
    
    if (valorCompra < 50) {
        alert("O valor mínimo de compra para entrega é R$50,00.");
        return;
    }

    const destinos = [
        "Avenida Serrana 173, Belo Horizonte, Minas Gerais",
        "Rua João Gualberto dos Anjos 104, Belo Horizonte, Minas Gerais",
        "Rua Augusto dos Anjos 600, Belo Horizonte, Minas Gerais",
        "Avenida Brasília 400, Santa Luzia, Minas Gerais"
    ];

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: destinos,
        destinations: [cep],
        travelMode: 'DRIVING'
    }, function (response, status) {
        console.log("Resposta da API:", response, "Status:", status);

        if (status !== 'OK') {
            alert('Erro ao calcular distância: ' + status);
            return;
        }

        let menorTempo = Infinity;
        let melhorEndereco = "";
        let melhorFrete = 0;
        let menorDistancia = Infinity;

        response.rows.forEach((row, index) => {
            const element = row.elements[0];
            console.log(`Destino ${index + 1}:`, element);

            if (element.status === "OK") {
                const tempo = element.duration.value;
                const distancia = element.distance.value / 1000;
                
                if (tempo < menorTempo) {
                    menorTempo = tempo;
                    melhorEndereco = destinos[index];
                    menorDistancia = distancia;
                }
            }
        });

        if (menorDistancia === Infinity) {
            alert("Não foi possível calcular a distância.");
            return;
        }

        // Aplicação das regras de frete
        if (menorDistancia > 10) {
            if (valorCompra >= 150) {
                melhorFrete = 0; // Entrega grátis
            } else {
                melhorFrete = 10; // Entrega de R$10,00
            }
        } else {
            if (valorCompra >= 100) {
                melhorFrete = 0; // Entrega grátis
            } else {
                melhorFrete = 5; // Entrega de R$5,00
            }
        }

        console.log(`Melhor endereço: ${melhorEndereco}`);
        console.log(`Frete estimado: R$${melhorFrete.toFixed(2)}`);

        document.getElementById("resultado").innerHTML =
            `<p>Endereço mais rápido: <strong>${melhorEndereco}</strong></p>
             <p>Distância: <strong>${menorDistancia.toFixed(2)} km</strong></p>
             <p>Frete estimado: <strong>R$${melhorFrete.toFixed(2)}</strong></p>`;
    });
}
