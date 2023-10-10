//Раскрываем список
function myFunction(){
    document.getElementsByClassName('dropdown__list').classList.toggle('dropdown__list_active');
}

//Закрыватие
window.onclick = function(event) {
    if (!event.target.matches('.dropdown__value')) {
        const drop = document.getElementsByClassName('dropdown__list');
        let i;
        for (let i = 0; i < drop.length; i++) {
            const openDrop = drop[i];
            if (openDrop.classList.contains('dropdown__list_active')) {
                openDrop.classList.remove('dropdown__list_active');
            }
        }
    }
}