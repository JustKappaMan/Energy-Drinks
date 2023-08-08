'use strict';

(() => {
    const tableBody = document.querySelector('tbody');

    const brandColumnHeader = document.querySelectorAll('th')[0];
    let isAlphabeticallySortedByBrand = false;

    brandColumnHeader.addEventListener('click', () => {
        const tableRows = [...tableBody.querySelectorAll('tr')];
        if (isAlphabeticallySortedByBrand) {
            /* Reverse alphabetical order */
            tableRows.sort((a, b) => b.children[0].innerText.localeCompare(a.children[0].innerText));
            isAlphabeticallySortedByBrand = false;
        } else {
            /* Alphabetical order */
            tableRows.sort((a, b) => a.children[0].innerText.localeCompare(b.children[0].innerText));
            isAlphabeticallySortedByBrand = true;
        }

        tableBody.replaceChildren(...tableRows);
    });
})();
