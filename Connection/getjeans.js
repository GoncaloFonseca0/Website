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
            13: document.getElementById('title13'),
            14: document.getElementById('title14'),
            15: document.getElementById('title15'),
            16: document.getElementById('title16')
        };
        
        const priceContainers = {
            13: document.getElementById('price13'),
            14: document.getElementById('price14'),
            15: document.getElementById('price15'),
            16: document.getElementById('price16')
        };

 
        for (let i = 13; i <= 16; i++) {
            if (!titleContainers[i] || !priceContainers[i]) {
                console.error(`Erro: Elementos não encontrados para ID ${i} no HTML.`);
                continue;
            }

            
            titleContainers[i].innerHTML = '';
            priceContainers[i].innerHTML = '';

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
        for (let i = 13; i <= 16; i++) {
            if (document.getElementById(`title${i}`)) {
                document.getElementById(`title${i}`).innerHTML = '<p>Erro ao carregar o produto.</p>';
                document.getElementById(`price${i}`).innerHTML = '<p>Erro ao carregar o preço.</p>';
            }
        }
    }
}

// Chamar a função
fetchProducts();
