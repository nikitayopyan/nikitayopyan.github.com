import {closeModal, modalOpen} from './modal';
import {postData} from '../services/services';

function formSender(modalTimer){
    const forms = document.querySelectorAll('form');
    
    const clientMassege = {
        success: 'Спасибо! До новых встреч',
        fail: 'Что-то пошло не так :(',
        loading: 'img/form/spinner.svg'
    };

    forms.forEach(item => {
        sendData(item);
    });

    function sendData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            const spinnerLoading = document.createElement('img');
            spinnerLoading.src = clientMassege.loading;
            spinnerLoading.style.cssText = 'display: block; margin: 0 auto';
            form.insertAdjacentElement('afterend', spinnerLoading);

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                changeModal(clientMassege.success);
                spinnerLoading.remove();
            }).catch(() => {
                changeModal(clientMassege.fail);
            }).finally(() => {
                form.reset();
            });
        });
    }
    function changeModal(message) {
        const prevModal = document.querySelector('.modal__dialog');
        prevModal.classList.add('hide');
        modalOpen('.modal', modalTimer);
        const responseModal = document.createElement('div');
        responseModal.classList.add('modal__dialog');
        responseModal.innerHTML = `
            <div class="modal__content">
                <div data-closed class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(responseModal);
        setTimeout(() => {
            responseModal.remove();
            prevModal.classList.remove('hide');
            prevModal.classList.add('show');
            closeModal('.modal',);
        }, 2000);
    }
}

export default formSender;