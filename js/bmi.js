_male = document.getElementsByClassName('male')[0]
_female = document.getElementsByClassName('female')[0]
_plusAge = document.getElementsByClassName('plusAge')[0]
_minusAge = document.getElementsByClassName('minusAge')[0]
_plusWeight = document.getElementsByClassName('plusWeight')[0]
_minusWeight = document.getElementsByClassName('minusWeight')[0]
_calc = document.getElementsByClassName('calculator')[0]

let heightVal
let age = 25
let weight = 50
let page = 1

_male.addEventListener('click', function () {
    _male.classList.add('genderClick')
    _female.classList.remove('genderClick')
})
_female.addEventListener('click', function () {
    _female.classList.add('genderClick')
    _male.classList.remove('genderClick')
})

_plusAge.addEventListener('click', function () {
    age++
    _plusAge.parentElement.previousElementSibling.innerText = age
})
_minusAge.addEventListener('click', function () {
    age--
    _minusAge.parentElement.previousElementSibling.innerText = age
})
_plusWeight.addEventListener('click', function () {
    weight++
    _plusWeight.parentElement.previousElementSibling.innerText = weight
})
_minusWeight.addEventListener('click', function () {
    weight--
    _plusWeight.parentElement.previousElementSibling.innerText = weight
})


_calc.addEventListener('click', function () {
    heightVal = document.getElementById('height').value
    if (heightVal == '' || heightVal == null) {
        alert('Please enter your height')
        document.getElementsByClassName('back')[0].style.transform = 'translate(-50%,-55%)'
    }

    else {
        heightVal = document.getElementById('height').value

        document.getElementsByClassName('back')[0].style.transform = 'translate(50%,-55%)'
        BMI = weight / ((heightVal / 100) * (heightVal / 100));
        BMI = Math.round(BMI * 10) / 10;

        if (BMI < 18.5) {
            document.getElementById('status').innerHTML = 'Underweight';
            document.getElementById('statusNum').innerHTML = 'BMI : ' + BMI + '';
            document.getElementById('status').style.color = 'orange'
            document.getElementById('description').innerHTML = "The WHO regards a BMI of less than 18.5 as underweight and may indicate malnutrition, an eating disorder, or other health problems😪!"
        }
        else if (BMI > 25) {
            document.getElementById('status').innerHTML = 'overweight';
            document.getElementById('statusNum').innerHTML = 'BMI : ' + BMI + '';
            document.getElementById('status').style.color = 'red'
            document.getElementById('description').innerHTML = "People who fall into this category are at risk of developing obesity and they must be careful🤕！"
        }
        else {
            document.getElementById('status').innerHTML = 'normal';
            document.getElementById('statusNum').innerHTML = 'BMI : ' + BMI + '';
            document.getElementById('status').style.color = 'green'
            document.getElementById('description').innerHTML = "A BMI between 18.5 and 25 is considered normal and healthy.good job😀！"
            
        }
        // page =2
    }
})

document.getElementById('close').addEventListener('click', function(){
    document.getElementById('close').parentElement.style.transform = 'translate(-50%,-55%)'
})

