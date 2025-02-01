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

        // Seleciona os containers pelo título e preço para IDs 9,10,11
        const titleContainers = {
            9: document.getElementById('title9'),
            10: document.getElementById('title10'),
            11: document.getElementById('title11'),
            12: document.getElementById('title12'),
        };
        
        const priceContainers = {
            9: document.getElementById('price9'),
            10: document.getElementById('price10'),
            11: document.getElementById('price11'),
            12: document.getElementById('price12'),
        
        };

        
        for (let i = 9; i <= 12; i++) {
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
        for (let i = 9; i <= 12; i++) {
            if (document.getElementById(`title${i}`)) {
                document.getElementById(`title${i}`).innerHTML = '<p>Erro ao carregar o produto.</p>';
                document.getElementById(`price${i}`).innerHTML = '<p>Erro ao carregar o preço.</p>';
            }
        }
    }
}

// Chamar a função
fetchProducts();
