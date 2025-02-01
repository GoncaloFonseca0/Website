window.onload = function () {
    carrega();

    const tv = document.getElementById("tv");
    const frm = document.getElementById("frm");
    const btinsert = document.getElementById("btinsert");

    /*btinsert.onclick = function (evt) {
        formdata = new FormData(frm);
        formdata.append("xpto", 13);
        for (const [k, v] of formdata.entries()) {
            console.log(`${k}->${v}`);
        }
        ('./Connection/getproducts.php');
        fetch("./Connection/insertClients.php", {
            method: 'post',
            body: formdata
        }).then(
            response => response.json()
        ).then(json => {
            tv.innerHTML = json.msg;
            if (json.msg == true) carrega();
            frm.reset();
        }).catch(erro => { tv.innerHTML = erro });
    };*/



    
 
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
        })
        .catch(error => {
            document.getElementById("tv").innerHTML = "Erro ao carregar os dados.";
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

function del(id) {
    formdata = new FormData();
    formdata.append("id_client", id);
    if (!confirm("Quer mesmo apagar o registo?")) return;

    fetch("./Connection/deleteClients.php", {
        method: 'post',
        body: formdata
    }).then(response => response.json())
        .then(json => {
            document.getElementById("tv").innerHTML = json.msg;
            if (json.msg) {
                carrega();
            }
        }).catch(error => {
            document.getElementById("tv").innerHTML = "Erro ao apagar o cliente.";
        });
}
