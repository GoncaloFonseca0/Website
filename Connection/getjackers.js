async function fetchProducts() {
    try {
        // Fetch the products
        const response = await fetch('./Connection/getproducts.php');
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        // Convert response to JSON
        const products = await response.json();
        console.log("Fetched Products:", products); // Debugging

        // Seleciona os containers pelo título e preço para IDs 5,6,7,8
        const titleContainers = {
            5: document.getElementById('title5'),
            6: document.getElementById('title6'),
            7: document.getElementById('title7'),
            8: document.getElementById('title8')
        };
        
        const priceContainers = {
            5: document.getElementById('price5'),
            6: document.getElementById('price6'),
            7: document.getElementById('price7'),
            8: document.getElementById('price8')
        };

        // Loop through IDs 5 to 8
        for (let i = 5; i <= 8; i++) {
            if (!titleContainers[i] || !priceContainers[i]) {
                console.error(`Erro: Elementos não encontrados para ID ${i} no HTML.`);
                continue;
            }

            // Inicializa os containers
            titleContainers[i].innerHTML = '';
            priceContainers[i].innerHTML = '';

            // Filtra e exibe apenas o produto com ID correspondente
            const product = products.find(p => Number(p.id) === i);
            if (product) {
                titleContainers[i].innerHTML = `<h3>${product.name}</h3>`;
                priceContainers[i].innerHTML = `<p>${product.price}€</p>`;
            } else {
                titleContainers[i].innerHTML = '<p>Produto não encontrado.</p>';
                priceContainers[i].innerHTML = '<p>Preço não disponível.</p>';
            }
        }

    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        for (let i = 5; i <= 8; i++) {
            if (document.getElementById(`title${i}`)) {
                document.getElementById(`title${i}`).innerHTML = '<p>Erro ao carregar o produto.</p>';
                document.getElementById(`price${i}`).innerHTML = '<p>Erro ao carregar o preço.</p>';
            }
        }
    }
}

// Chamar a função
fetchProducts();
