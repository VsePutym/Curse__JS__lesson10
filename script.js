'use strict';
let book1 = document.querySelectorAll('.book')[1],
    book2 = document.querySelectorAll('.book')[0],
    book3 = document.querySelectorAll('.book')[4],
    book4 = document.querySelectorAll('.book')[3],
    book5 = document.querySelectorAll('.book')[5],
    book6 = document.querySelectorAll('.book')[2],
    targetBook3 = book3.querySelector('a'),
    body = document.querySelector('body'),
    banner = body.querySelector('.adv'),
    chapterBook2 = book2.querySelectorAll('li'),
    chapterBook5 = book5.querySelectorAll('li'),
    ulBook6 = book6.querySelector('ul');

book2.before(book1);
book2.after(book3);
book3.after(book4);
book5.after(book6);
body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
targetBook3.textContent = 'Книга 3. this и Прототипы Объектов';
banner.remove();

chapterBook2[10].before(chapterBook2[2]);
chapterBook2[3].after(chapterBook2[6]);
chapterBook2[6].after(chapterBook2[8]);

chapterBook5[1].after(chapterBook5[9]);
chapterBook5[4].after(chapterBook5[2]);
chapterBook5[7].after(chapterBook5[5]);

ulBook6.insertAdjacentHTML('beforeend', '<li>Глава8</li>');
let chapterBook6 = book6.querySelectorAll('li');
chapterBook6[9].before(chapterBook6[10]);

