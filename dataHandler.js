/*

Handles data

*/

(() => {

    window.displayMe = [];

    const images = ['./images/Combini.jpg', './images/Refactor.jpg'];

    const generatePictureData = () => {
        for(let i = 0; i < images.length; i++) {
            const pic = {};
            const picSrc = images[i];
            pic.picSrc = picSrc;
            displayMe.push(pic);
        }
    }

    generatePictureData();

})();