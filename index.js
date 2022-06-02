
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let headerT = document.createElement ('h3');
headerT.textContent = 'Description:'
dogDetails.append(headerT)

let paragraphU = document.createElement ('p')
paragraphU.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append(paragraphU)


let headerX = document.createElement ('h3')
headerX.textContent = 'Feeding Times:'
dogDetails.append(headerX)



let listA = document.createElement ('li')
listA.textContent = '9:00 am'
dogDetails.append(listA)

let listB = document.createElement ('li')
listB.textContent = '12:00 pm'
dogDetails.append(listB)

let listC = document.createElement ('li')
listC.textContent = '5:00 pm'
dogDetails.append(listC)
