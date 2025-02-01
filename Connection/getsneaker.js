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

      // Seleciona os containers pelo título e preço para IDs 1, 2, 3, e 4
      const titleContainers = {
        1: document.getElementById('title1'),
        2: document.getElementById('title2'),
        3: document.getElementById('title3'),
        4: document.getElementById('title4')
    };
    
    const priceContainers = {
        1: document.getElementById('price1'),
        2: document.getElementById('price2'),
        3: document.getElementById('price3'),
        4: document.getElementById('price4')
    };

    // Certifica-se de que os elementos existem
    for (let i = 1; i <= 4; i++) {
        if (!titleContainers[i] || !priceContainers[i]) {
            console.error(`Erro: Elementos não encontrados para ID ${i} no HTML.`);
            return;
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
    }
}

// Call the function
fetchProducts();
