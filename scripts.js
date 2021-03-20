
function increment(quantity, price, somme){
    let qt = document.getElementById(quantity);
    let valeur = parseInt(qt.value);
    valeur++;
    qt.value = valeur;
    //Somme Produit
    let prix = document.getElementById(price);
    let sum = document.getElementById(somme);
    sum.innerHTML = parseInt(prix.innerHTML) * qt.value;
    //Somme Total
    var total = document.getElementById('total-price');
    let sumTot = parseInt(total.innerHTML) + parseInt(prix.innerHTML);
    total.innerHTML = `${sumTot} Dinars`;

} 

function decrement(quantity, price, somme){
    let qt = document.getElementById(quantity)
    let valeur = parseInt(qt.value);
    
    qt.value = valeur;
    if( valeur > 0){
        valeur --; 
    }else valeur;
    qt.value = valeur;

    // Somme Prodduit
    let prix = document.getElementById(price);
    let sum = document.getElementById(somme);
    sum.innerHTML = parseInt(prix.innerHTML) * qt.value;
    
    //Somme total
    var total = document.getElementById('total-price');
    let sumTot = parseInt(total.innerHTML) - parseInt(prix.innerHTML);    
    total.innerHTML = `${sumTot} Dinars`;
}

function sumTotal(somme){
    let sum = doument.getElementById(somme);
    let sumTot = parseInt(total.innerHTML) - parseInt(sum.innerHTML);
    total.innerHTML = `${sumTot} Dinars`;
    //console.log(total.innerHTML)
}


    
function deleteItem(product ,somme){
    let sum = document.getElementById(somme);
    let x = parseInt(sum.innerHTML);
    
    let dlt = document.getElementById(product);
    dlt.remove();

    var total = document.getElementById('total-price');
    let sumTot = parseInt(total.innerHTML) - x;
    total.innerHTML = `${sumTot} Dinars`;
}


function changeColor(heart){
    let wishlist =  document.getElementById(heart);
    wishlist.classList.toggle('fa-hart');
    wishlist.classList.toggle('fas');
}