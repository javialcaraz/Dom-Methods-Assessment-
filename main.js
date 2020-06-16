const bodyElement = document.querySelector('body')

//adding BUTTON & MAIN elements
const buttonElement = document.createElement('button')
bodyElement.append(buttonElement)

const mainElement = document.createElement('main')
bodyElement.append(mainElement)



//adding IMG & A link elements
const imgElement = document.createElement('img')
mainElement.append(imgElement)
imgElement.className = ('image')
imgElement.src = 'https://wallpapercave.com/wp/ivbjio8.jpg'


const a = document.createElement('a')
const linkContent = document.createTextNode('link to GIPHY')
a.append(linkContent)
a.className = 'Link'
a.href = 'https://giphy.com/'
mainElement.append(a)



// add click event listener to remove MAIN
const buttonName = document.createTextNode('REMOVE')
buttonElement.append(buttonName)
buttonElement.addEventListener('click', function () {
    mainElement.remove()
})













