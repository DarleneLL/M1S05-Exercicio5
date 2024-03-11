function consultarPreco(){
    let produto = document.getElementById('produto').value;
    produto = produto.toLowerCase();
    switch (produto){
        case 'arroz':
            (document.getElementById('preco').value) = 5.5;
            break;
        case 'feijão':
            document.getElementById('preco').value = 10.0;
            break;
        case 'macarrão':
            document.getElementById('preco').value = 2.5;
            break;
        default:
            alert('Produto não cadastrado')
    }
}

let carrinho = [];
let somaPreco = 0;
function comprarProduto(){
    let nomeProduto = document.getElementById('produto').value;
    let precoProduto = parseFloat(document.getElementById('preco').value);
    if (nomeProduto !== '' && precoProduto !== ''){
        let produto = {nome: nomeProduto, preco: precoProduto}
        carrinho.push(produto);
        let tbody = document.querySelector('#tabela-carrinho tbody');
        tbody.innerHTML = '';
        carrinho.forEach(produto =>{
            let tr = document.createElement('tr');
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let nomeProduto = document.createTextNode(produto.nome);
            let precoProduto = document.createTextNode('R$' + produto.preco);
            td1.appendChild(nomeProduto);
            td2.appendChild(precoProduto)
            tr.appendChild(td1);
            tr.appendChild(td2);
            document.getElementById("tabela-carrinho").getElementsByTagName("tbody")[0].appendChild(tr);
         })
         somaPreco = somaPreco + produto.preco;
         let p = document.createElement('p');
         let total = document.createTextNode('Total   R$'+somaPreco);
         p.appendChild(total);
         document.getElementById("tabela-carrinho").getElementsByTagName("tbody")[0].appendChild(p);
         document.getElementById('produto').value = '';
    }else{
        alert('Favor informar um produto');
    }   
}