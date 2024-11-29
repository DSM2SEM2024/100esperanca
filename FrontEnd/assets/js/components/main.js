export const getOrCreateMainElement = () => {
    let main = document.getElementById('main');
    if (!main) {
        main = document.createElement('main');
        main.id = 'main';
        
        const header = document.getElementsByTagName('header')[0];
        if (header) {
            header.insertAdjacentElement('afterend', main);
        }
        
        const footer = document.getElementsByTagName('footer')[0];
        if (footer) {
            footer.insertAdjacentElement('beforebegin', main);
        } else {
            document.body.appendChild(main);
        }
    }
    return main;
};
