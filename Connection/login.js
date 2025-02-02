window.onload = function () {
    carrega();

    const frm = document.getElementById("frm");
    const btinsert = document.getElementById("btinsert");
    const tv = document.getElementById("tv");
    const signupMessage = document.getElementById("signup-message"); // Elemento para mostrar a mensagem

    btinsert.onclick = function (evt) {
        evt.preventDefault(); // Previne comportamento padrão do botão

        formdata = new FormData(frm);
        formdata.append("xpto", 13);
        for (const [k, v] of formdata.entries()) {
            console.log(`${k}->${v}`);
        }

        fetch("./Connection/insertClients.php", {
            method: 'post',
            body: formdata
        }).then(
            response => response.json()
        ).then(json => {
            tv.innerHTML = json.msg;
            
            if (json.msg == true) {
                carrega();
                frm.reset();
                
                // Exibe a mensagem de sucesso
                signupMessage.innerHTML = `<div class="alert alert-success">Sign-up completed successfully!</div>`;
                
                // Remove a mensagem após 3 segundos
                setTimeout(() => {
                    signupMessage.innerHTML = "";
                }, 3000);
            }
        }).catch(erro => { 
            tv.innerHTML = erro;
        });
    };
};

function carrega() {
    fetch("./Connection/getclients.php")
        .then(response => response.json())
        .then(json => {
            const dados = json.map(v => {
                return `
                    <tr>
                        <td>${v.id_client}</td>
                        <td>${v.full_name}</td>
                        <td>${v.email}</td>
                        <td>${v.phone}</td>
                        <td>${v.address}</td>
                        <td>${v.password}</td>
                        <td>${btdel(v.id_client)}</td>
                        <td>${btupdate(v.id_client)}</td>
                    </tr>`;
            });

            document.getElementById("tb").innerHTML = dados.join("");
        }).catch(error => {
            document.getElementById("tv").innerHTML = "";
        });
}

function btupdate(id) {
    return `
<a href="editClient.html?id_client=${id}" class="btn btn-primary btn-sm">
    Update
</a>
`;
}

function btdel(id) {
    return `
        <button class="btn btn-danger btn-sm" type="button" onclick="del(${id})">
            Delete
        </button>
    `;
}
