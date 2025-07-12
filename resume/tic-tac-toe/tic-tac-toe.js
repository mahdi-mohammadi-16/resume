
const lis = document.querySelectorAll('li'); 
let i = 0
let playerCross = document.getElementById("playerCross")
let playerCircle = document.getElementById("playerCircle")
let playerX = 0
let playerO = 0
let hasClicked = {};
let colorMap = {};
let threeClick = {};
const Refresh = document.getElementById('Refresh')


lis.forEach((li, index) => {
    const liId = `li${index + 1}`;
    hasClicked[liId] = true;
    threeClick = true;

    
    li.addEventListener('click', () => {
        if (!hasClicked[liId] || !threeClick) return;
    

        let color;
        if (i % 2 === 0) {
                li.classList.add('x')
                color = "red"
            } else {
                li.classList.add('o')
                color = "blue"
            }
            
            colorMap[liId] = color;
            hasClicked[liId] = false;
            i++;
            Refresh.addEventListener('click' , ()=> {
                hasClicked[liId] = true
                threeClick = true
                colorMap = {};
                i = 0
                console.log('')
                li.classList.remove('x')
                li.classList.remove('o')
                li.classList.remove("animate__animated","animate__rubberBand");
            })

            const winningLines = [
                ['li1', 'li2', 'li3'],
                ['li4', 'li5', 'li6'],
                ['li7', 'li8', 'li9'],
                ['li1', 'li4', 'li7'],
                ['li2', 'li5', 'li8'],
                ['li3', 'li6', 'li9'],
                ['li1', 'li5', 'li9'],
                ['li3', 'li5', 'li7'],
            ];
            
            for(var v = 0;v < winningLines.length; v++){
                const line = winningLines[v]; 
                if (colorMap[line[0]] == "red" &&
                    colorMap[line[1]] == "red" &&
                    colorMap[line[2]] == "red") {
                        playerX += 1
                        playerCross.innerHTML = (playerX)
                        threeClick = false
                        line.forEach(liId => {
                            document.getElementById(liId).classList.add("animate__animated","animate__rubberBand");
                        });
                        
                    }
                if (colorMap[line[0]] == "blue" &&
                    colorMap[line[1]] == "blue" &&
                    colorMap[line[2]] == "blue") {
                        playerO += 1
                        playerCircle .innerHTML = (playerO)
                        threeClick = false
                        line.forEach(liId => {
                            document.getElementById(liId).classList.add("animate__animated","animate__rubberBand");
                        });
                };
            }
        });
});
