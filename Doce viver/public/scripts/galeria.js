$(document).ready(function() {
    console.log("TESTÃOOO")
});


// const items = Array.from(document.querySelectorAll('.item'));

// function aplicarFiltros() {
//     const categoriaFiltro = document.getElementById('categoriaFiltro').value;
//     const precoFiltro = document.getElementById('precoFiltro').value;

//     // Filtra os itens pela categoria selecionada
//     items.forEach(item => {
//         const itemCategoria = item.getAttribute('data-categoria');
//         if (categoriaFiltro === 'todos' || itemCategoria === categoriaFiltro) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });

//     // Ordena os itens pelo preço selecionado
//     const galeria = document.getElementById('galeria');
//     const itensFiltrados = items.filter(item => item.style.display === 'block');

//     itensFiltrados.sort((a, b) => {
//         const precoA = parseFloat(a.getAttribute('data-preco'));
//         const precoB = parseFloat(b.getAttribute('data-preco'));
//         return precoFiltro === 'crescente' ? precoA - precoB : precoB - precoA;
//     });

//     // Atualiza a ordem dos itens na galeria
//     galeria.innerHTML = '';
//     itensFiltrados.forEach(item => galeria.appendChild(item));
// }