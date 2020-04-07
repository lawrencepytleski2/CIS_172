/**
 * HW 2
 *
 * @category    HW 2
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Lester Lipinsky
 * @date        2020.04.07
 * @grade       10 / 10
 */

const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    console.log('digit', target.value);
});



