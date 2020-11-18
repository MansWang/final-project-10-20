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



const container = document.getElementById('block');

    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';

    // Construct card content
    const content = `
    <div class="card-row">
        <div class="card-column" >
            <div class="card">
            <img src="${localStorage.img}" width=300px/>
                <div class="container">
                    <p>Name:  <b>${localStorage.Name}</b></p>
                    <p>Age:   <b>${localStorage.Age}</b></p>
                    <p>Breed: <b>${localStorage.Breed}</b></p>
                    <p>Geneder: <b>${localStorage.Gender}</b></p>
                </div>
        </div>
    </div>
  `;
    container.innerHTML += content;

    function successsubmit(){
        if (window.confirm('You are ready to submit your application?'))
        {
            window.location.href= "google.com";
        }
        else
        {
            // They clicked no
        }
  
    }

    