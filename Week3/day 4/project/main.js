console.log("Running")

// remove Donate button upon clicking
var DonatBTN = document.getElementById("disappear")

// console.log(DonatBTN)

function disappearDonateBtn() {
    DonatBTN.style.display = 'none'
}


//alert when you choose pets
function chooseAlert() {
    var choosePet = document.getElementById('animalDropdown');
    var selectedValue = choosePet.value;
    if (selectedValue += "") {
        alert(`You have selected ${selectedValue}`)
        choosePet.value = selectedValue;
    }
}

// increase number
function increaseNumber(num) {
    let petIncrease = document.getElementById(`petIncrease${num}`);

    let petted = petIncrease.innerText;
    petted++;
    petIncrease.innerText = petted;
}