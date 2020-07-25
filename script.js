var burguer = document.querySelector(".burguer");

document.querySelector(".burguer").addEventListener("click",() =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qnt").addEventListener("change", attprice)
document.querySelector("#js").addEventListener("change", attprice)
document.querySelector("#layout-yes").addEventListener("change", attprice)
document.querySelector("#layout-no").addEventListener("change", attprice)
document.querySelector("#deadline").addEventListener("change", deadline)

function attprice(){
    const qnt = document.querySelector("#qnt").value
    const needJS = document.querySelector("#js").checked
    const addlayout = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value

    let price = qnt * 200;
    if (needJS) price *= 1.2;
    if (addlayout) price += 500;
    let urgency = 1 - deadline * 0.1;
    price *= 1 + urgency
    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`
}

function deadline(){
    const changedeadline = document.querySelector("#deadline").value
    document.querySelector("label[for=deadline]").innerHTML = `Prazo: ${changedeadline} semanas`
    attprice()
}