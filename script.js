//soal
function handleGetFormData() {
    var formData = {
        name: document.getElementById("name").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
        zipCode: document.getElementById("zip-code").value,
        status: document.getElementById("status").checked
    };

    return formData;
}


function isNumber(str) {
    for (var i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
            return false;
        }
    }
    return true;
}

function checkboxIsChecked() {
    var formData = handleGetFormData();
    return formData.status;
}


function validateFormData(data) {
    return data !== null &&
        !isNaN(data.zipCode) &&
        document.getElementById('status').checked;
}

function submit() {
    const formData = handleGetFormData();
    const isValid = validateFormData(formData);
    const warning = document.getElementById("warning");

    if (!isValid) {
        warning.textContent = "Periksa form anda sekali lagi";
    } else {
        warning.textContent = "";

    }
}

const form = document.getElementById('myForm');
if (form) {
    form.addEventListener('submit', submit);
}


//first page
const mulaiMembaca = document.getElementById("cta");

mulaiMembaca.addEventListener('click', function () {
    window.scroll({
        top : 800,
        left: 0,
        behavior : 'smooth'
    })
})

//second page

console.log()

function changeSentences() {
const sentence = document.getElementById("sentences");
const sentences = new Array("Buku dapat membawamu berkeliling dunia saat kamu duduk dan membacanya di sofa.", "Membaca adalah cara yang bagus untuk menemukan diri sendiri.", "Jika hidup adalah lautan gelap tempatmu mengarungi perahumu, maka buku-buku akan menjadi mercusuar yang menunjukkan jalan bahkan melalui perairan yang gelap.", "Buku dapat membuatmu percaya pada keajaiban dan cinta, memberimu harapan dan menyembuhkan luka hatimu bahkan sebelum kamu menyadarinya secara sadar.")
const random = Math.floor(Math.random() * sentences.length);

sentence.innerHTML = sentences[random]
}
//fifth page 
const textGame = "nilai setitik rusak susu sebelangga";
const words = textGame.split(" ");
const random = Math.floor(Math.random() * words.length);
const kataHilang = words[random]
words[random] = '_____'
document.getElementById("text-game").innerText = words.join(' ');
    
function cekJawaban() {
    const jawabanUser = document.getElementById("jawaban").value.trim().toLowerCase();
    const benar = document.getElementById("true")
    if (jawabanUser === kataHilang) {
        benar.style.display = 'block'
        document.getElementById('jawaban').setAttribute('disabled', 'true').style.opacity = '0.8'
    } else {
        alert("Salah!");
    }
}

function restart() {
    location.reload();
}
function hilang() {
    const hilang = document.getElementById("hilang")
    const benar = document.getElementById("true")    
    
    hilang.addEventListener('click', function() {
        benar.style.display = 'none'
    })
}

let animationStarted = false;

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to animate numbers
function animateNumbers() {
    if (!animationStarted) {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            const number = item.querySelector('.number');
            if (isInViewport(item)) {
                animationStarted = true;
                const targetNumber = parseInt(number.innerText);
                let currentNumber = 0;
                const increment = Math.ceil(targetNumber / 100); // Divide the target number by 100 for smooth animation

                const interval = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        currentNumber = targetNumber;
                        clearInterval(interval);
                    }
                    number.innerText = currentNumber;
                }, 10);
            }
        });
    }
}

// Call animateNumbers when the page is scrolled
window.addEventListener('scroll', animateNumbers);