// console.log("Hello World");

var story = {
    currentScene: "attack",
    attack: {
        title: "Chapter 1",
        story: "Once upon a time, the village of cute Puppistan lived in peace. Until one day, it was attacked by Avarice the Angry Aardvark. The Premier of Cute Pappistan, said thre's only one person who can save us  is ",
        choices: [
            {
                choice: "Yes, I'm ready to accept!"
            },
            {
                choice: "Meh! let them Die..."
            }
        ]
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('#start-btn')
    let input = document.querySelector('#name-input')
    let content = document.querySelector('.content')
    button.addEventListener('click', () => {
        // console.log(input.value);
        content.innerHTML = `
            <h1>${story[story.currentScene].title}</h1>
            <p>${story[story.currentScene].story} ${input.value}</p>
            ${getInputs()}
        `;
        
    })
})


function getInputs() {
    let input = "";
    for(let i = 0; i < story[story.currentScene].choices.length; i++) {
        // console.log(story[currentScene].choices[i].choice);
        input += `
            <div>
                <input id="radio${i}" type="radio" name="choices">
                <label for="radio${i}">${story[story.currentScene].choices[i].choice}</label> <br>
            </div>
        `
    }
    return input;
}