
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

        const titleContainers = {
            21: document.getElementById('title21'),
            22: document.getElementById('title22'),
            23: document.getElementById('title23'),
            24: document.getElementById('title24')
        };
        
        const priceContainers = {
            21: document.getElementById('price21'),
            22: document.getElementById('price22'),
            23: document.getElementById('price23'),
            24: document.getElementById('price24')
        };

 
        for (let i = 21; i <= 23; i++) {
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
        for (let i = 21; i <= 24; i++) {
            if (document.getElementById(`title${i}`)) {
                document.getElementById(`title${i}`).innerHTML = '<p>Erro ao carregar o produto.</p>';
                document.getElementById(`price${i}`).innerHTML = '<p>Erro ao carregar o preço.</p>';
            }
        }
    }
}

// Chamar a função
fetchProducts();
