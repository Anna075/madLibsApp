"use strict";

window.onload = () => {

    let numberOfQuestions = 7;
    let userInputs = [];
    let originalStory = '$<function>{userInputs[0]} suffers from a ${userInputs[1]}. ${userInputs[0]} kept blowing and wiping his ${userInputs[2]}. The nose turned ${userInputs[3]} and his ${userInputs[2]} swelled with ${userInputs[4]}. His/her friend ${userInputs[5]} on him a vessel filled with ${userInputs[6]} and put some hot ${userInputs[7]} into it. As ${userInputs[0]} inhaled the steam, the ${userInputs[1]} subsided slowly. ${userInputs[0]} was relieved.';

    let questionCounter = 0;
    let questionArray = [
        `Enter your name`,
        `Enter a disease`,
        `Enter a part of your body`,
        `Enter a color`,
        `Enter a liquid`,
        `Enter a verb (past tense)`,
        `Enter your favorite beverage`,
        `Enter the ingredient you hate the most`
    ];
    for (let i = numberOfQuestions; i >= 0; i--) {
        console.log(
            questionArray[questionCounter] + `... (${numberOfQuestions} questions left)`
        );
        userInputs.push(
            prompt(
                questionArray[questionCounter] + `... (${numberOfQuestions} questions left)`
            )
        );
        console.log(userInputs);
        questionCounter++;

        numberOfQuestions--;
    }

    
};

/* Tenali Raman suffers from a bad cold. He kept blowing and wiping his nose. The nose turned red and his eyes swelled with tears. His wife brought to him a vessel filled with hot water. She put some herbs into it. As Raman inhaled the steam, the cold subsided slowly. Raman was relieved.';
that is a true story.
*/