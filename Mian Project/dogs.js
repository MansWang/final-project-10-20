function myFunction1In() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction1Out(e) {
    if (!!e && !!e.target && !e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown1");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
function myFunctionIn2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myfunctionout2(x) {
    if (!!x && !!x.target && !x.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown2");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

const apiResult = [
    { img: './Bella.jpg', Name: 'Bella', Age: '6 Months', Breed: 'Mixed',Gender:"Male" },
    { img: './Luna.jpg', Name: 'Luna', Age: '2 Years', Breed: 'Pit Bull' ,Gender:"Male"},
    { img: './Jake.jpg', Name: 'Jake', Age: '10 Month', Breed: 'Chihuahua',Gender:"Male" },
    { img: './Henry.jpg', Name: 'Henry', Age: 'Around 1 Year', Breed: 'Mixed',Gender:"Female" },
    { img: './Scout.jpg', Name: 'Scout', Age: '6 Months', Breed: 'Mixed' ,Gender:"Female"},
    { img: './Oreo.jpg', Name: 'Oreo', Age: '5 Months', Breed: 'Mixed',Gender:"Female" },
    { img: './Milo.jpg', Name: 'Milo', Age: '3 Years', Breed: 'Mixed',Gender:"Male" }
];
const container = document.getElementById('accordion');

apiResult.forEach((result, idx) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';

    // Construct card content
    const content = `
    <div class="card-row">
        <div class="card-column" >
            <div class="card">
            <img src="${result.img}" height=200px/>
                <div class="container">
                    <p>Name:  <b>${result.Name}</b></p>
                    <p>Age:   <b>${result.Age}</b></p>
                    <p>Breed: <b>${result.Breed}</b></p>
                    <p>Gender: <b>${result.Gender}</b></p>
                    <p>Geneder: <b>${result.Gender}</b></p>
                </div>
                <a href="./application.html">
                <button class="btn btn-link" onclick=saveElements(${idx}) >Adopt Me</button>
                </a>
        </div>
    </div>
  `;

    // Append newyly created card element to the container
    container.innerHTML += content;
})

function saveElements(x){
localStorage.setItem("Name",apiResult[x].Name);
localStorage.setItem("img",apiResult[x].img);
localStorage.setItem("Age",apiResult[x].Age);
localStorage.setItem("Breed",apiResult[x].Breed);
localStorage.setItem("Gender",apiResult[x].Gender);
}