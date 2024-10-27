export const getOrCreateMainElement = () => {
    let main = document.getElementById('main');
    if (!main) {
        main = document.createElement('main');
        main.id = 'main';
       
        const header = document.getElementsByTagName('header')[0];
        if (header) {
            header.insertAdjacentElement('afterend', main);
        }
    }
    return main;
};