
    let cartCount = 0;
    let cartItems = [];

//functions for sneakers


function addShoesToCart1() {
    cartCount++;
    cartItems.push({
        name: "OFF-WHITE Low",
        price: 166
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addShoesToCart2() {
    cartCount++;
    cartItems.push({
        name: "New Balance,New Balance 550",
        price: 95
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addShoesToCart3() {
    cartCount++;
    cartItems.push({
        name: "Converse, Chuck Tayloer",
        price: 94
    },
    );
    updateCartCount();
    updateCartModal();
}
function addShoesToCart4() {
    cartCount++;
    cartItems.push({
        name: "Nike Dunk Low Industrial Blue",
        price: 166
    },
    );
    updateCartCount();
    updateCartModal();
}
   // Functions for jackets
    function addJacketsToCart1() {
        cartCount++;
        cartItems.push({
            name: "North Face, Mountain Light",
            price: 95
           
        },
        );
        updateCartCount();
        updateCartModal();
    }

    function addJacketsToCart2() {
        cartCount++;
        cartItems.push({
            name: "North Face, Gore-Tex",
            price: 87
           
        },
        );
        updateCartCount();
        updateCartModal();
    }

    function addJacketsToCart3() {
        cartCount++;
        cartItems.push({
            name: "North Face, Gore-Yellow",
            price: 166
        },
        );
        updateCartCount();
        updateCartModal();
    }
    function addJacketsToCart4() {
        cartCount++;
        cartItems.push({
            name: "North Face, Parka Artik",
            price: 137
        },
        );
        updateCartCount();
        updateCartModal();
    }
    
        
// //Functions for t-shirts
function addShirtsToCar1() {
    cartCount++;
    cartItems.push({
        name: "OVO Nike Collaboration Blue",
        price: 87
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addShirtsToCar2() {
    cartCount++;
    cartItems.push({
        name: "OVO T-SHIRT Black",
        price: 137
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addShirtsToCar3() {
    cartCount++;
    cartItems.push({
        name: "OVO Nike Collaboration Orange",
        price: 358
    },
    );
    updateCartCount();
    updateCartModal();
}
function addShirtsToCar4() {
    cartCount++;
    cartItems.push({
        name: "OVO T-SHIRT Light grey",
        price: 94
    },
    );
    updateCartCount();
    updateCartModal();
}
//Functions for jeans
function addJeansToCart1() {
    cartCount++;
    cartItems.push({
        name: "Levis 501 Blue",
        price: 95
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addJeansToCart2() {
    cartCount++;
    cartItems.push({
        name: "Levis 501 Light Grey",
        price: 87
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addJeansToCart3() {
    cartCount++;
    cartItems.push({
        name: "Levis 501 Black",
        price: 166
    },
    );
    updateCartCount();
    updateCartModal();
}
function addJeansToCart4() {
    cartCount++;
    cartItems.push({
        name: "Levis 501 Blue",
        price: 137
    },
    );
    updateCartCount();
    updateCartModal();
}
// //Functions for collectibles
function addCollecteblesToCart1() {
    cartCount++;
    cartItems.push({
        name: "Cyber Truck Hot Wheels",
        price: 81
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addCollecteblesToCart2() {
    cartCount++;
    cartItems.push({
        name: "Jordan AJ11 Basketball",
        price: 108
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addCollecteblesToCart3() {
    cartCount++;
    cartItems.push({
        name: "BearBick x Clor Panda",
        price: 159
    },
    );
    updateCartCount();
    updateCartModal();
}

//Function para o Merchandise

function addMerchandiseToCart1() {
    cartCount++;
    cartItems.push({
        name: "North Face,Mountain Light",
        price: 95
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addMerchandiseToCart2() {
    cartCount++;
    cartItems.push({
        name: "North Face, Gore-Tex",
        price: 87
       
    },
    );
    updateCartCount();
    updateCartModal();
}

function addMerchandiseToCart3() {
    cartCount++;
    cartItems.push({
        name: "North Face, Gore-Yellow",
        price: 166
    },
    );
    updateCartCount();
    updateCartModal();
}


//
function addMerchandiseToCart4() {
    cartCount++;
    cartItems.push({
        name: "North Face, Parka Artik",
        price: 137
    },
    );
    updateCartCount();
    updateCartModal();
}

    function updateCartCount() {
        const cartCountBadge = document.getElementById('cartCount');
        if (cartCountBadge) {
            cartCountBadge.innerText = cartCount;
        }
    }

    function updateCartModal() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotalElement = document.getElementById('cartTotal');
        if (cartItemsContainer && cartTotalElement) {
            cartItemsContainer.innerHTML = ''; // Clear existing content

            let totalAmount = 0;

            if (cartItems.length === 0) {
                cartItemsContainer.innerHTML = '<p>No items in the cart</p>';
            } else {
                cartItems.forEach((item, index) => {
                    cartItemsContainer.innerHTML += `
                        <div>${item.name} - $${item.price.toFixed(2)} <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button></div>
                    `;
                    totalAmount += item.price;
                });
            }

            cartTotalElement.innerText = totalAmount.toFixed(2);
        }
    }

    function removeFromCart(index) {
        cartItems.splice(index, 1);
        updateCartModal();
    }

    

// Alerta para o aboutUs - Quando carregamos no submeter avisar que foi submetido.
function contactUs()
{
alert("O ticket foi submetido com sucesso!, obrigado!");
}
   