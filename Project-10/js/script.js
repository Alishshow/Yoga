//Ждем загрузку DOM структуры
window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // назначаем переменные для табов
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
// прописываем функцию, чтобы убрать 1 класс и добавить новый класс
    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);
// запускаем функцию
    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };
// Назначаем делегирование обработчика событий
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    //TIMER
    let deadline = '2018-11-25';
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    function setClock(id, endtime) {
        let timer = document.getElementById(id), 
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock() {
            function add0 (x) {
                return ((x < 10) ? '0' : '') + x
            }
            let t = getTimeRemaining(endtime);
                hours.textContent = [add0 (t.hours)];
                minutes.textContent = [add0 (t.minutes)];
                seconds.textContent = [add0 (t.seconds)];

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
            if (t.total <= -1) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }
    setClock('timer', deadline);

    //Modal
    class Modal {
        constructor(modalOpenBtn, modalCloseBtn, modalWrp) {
            this.modalOpenBtn = modalOpenBtn;
            this.modalCloseBtn = modalCloseBtn;
            this.modalWrp = modalWrp;
        }
        open() {
            for (let i = 0; i < modalOpenBtn.length; i++) {
                modalWrp.style.cssText = 'display: block';
                modalWrp.classList.add('.more-splash');
                document.body.style.overflow = 'hidden';
            }
        }
        close() {
            modalWrp.style.cssText = 'display:none';
            modalWrp.classList.remove('.more-splash');
            document.body.style.overflow = '';
        }
    }

    let modalOpenBtn = 'description-btn',
        modalWrp = document.querySelector('.overlay'),
        modalCloseBtn = document.querySelector('.popup-close');
    let newModal = new Modal(modalOpenBtn, modalCloseBtn, modalWrp);

    document.querySelector('body').addEventListener('click', function () {
        let target = event.target;
        if (target && target.classList.contains(modalOpenBtn)) {
            newModal.open();
        } else if (target == modalCloseBtn) {
            newModal.close();
        }
    });

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close   = document.querySelector('.popup-close');
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('.more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('.more-splash');
        document.body.style.overflow = '';
    });
});