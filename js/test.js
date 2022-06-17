const buttonTree = document.querySelector('#tree')
const buttonCloud = document.querySelector('#cloud')
const buttonStand = document.querySelector('#stand')
const buttonFire = document.querySelector('#fire')

function test(tree, cloud, stand, fire) {
    console.log('ok')
    const elements = [tree, cloud, stand, fire]
    for (let element of elements) {
        if (element.classList.contains('active') == true) {
            console.log('congrats, sir')
        }
    }
}


test(buttonTree, buttonCloud, buttonFire, buttonStand)