function closeModal(modalWindow){
    const modal = document.querySelector(modalWindow);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
function modalOpen(modalWindow, modalTimer){
    const modal = document.querySelector(modalWindow);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';


    if (modalWindow){
        clearInterval(modalTimer);  
        console.log(modalTimer);
    }
}
export {closeModal, modalOpen};

function modal(modalWindow, triggerModal, modalTimer){
    const modalTrigger = document.querySelectorAll(triggerModal),
          modal = document.querySelector(modalWindow);


    modalTrigger.forEach(i => {
        i.addEventListener('click', () => modalOpen(modalWindow, modalTimer));
    });

    modal.addEventListener('click', (e) => {          
        if (e.target === modal || e.target.getAttribute('data-closed') == ''){
            closeModal(modalWindow);
        }
    });

    document.addEventListener('keydown', event =>{    
        if (event.code == 'Escape'){
            closeModal(modalWindow);
        }
    });

    function showModalByScroll(){
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            modalOpen(modalWindow, modalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}
export default modal;