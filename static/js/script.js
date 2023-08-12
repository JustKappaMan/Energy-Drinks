'use strict';

(() => {
    const tableBody = document.querySelector('tbody'),
          tableHeaders = document.querySelectorAll('th'),
          tableRows = [...tableBody.querySelectorAll('tr')];

    let isSortedByBrandAlphabetically = true,
        isSortedByRatingInDescendingOrder = false;

    tableHeaders[0].addEventListener('click', () => {
        if (isSortedByBrandAlphabetically) {
            /* Reverse alphabetical order */
            tableRows.reverse();
            isSortedByBrandAlphabetically = false;
            isSortedByRatingInDescendingOrder = false;
        } else {
            /* Alphabetical order */
            tableRows.sort((a, b) => a.children[0].innerText.localeCompare(b.children[0].innerText));
            isSortedByBrandAlphabetically = true;
            isSortedByRatingInDescendingOrder = false;
        }

        tableBody.replaceChildren(...tableRows);
    });


    tableHeaders[2].addEventListener('click', () => {
        if (isSortedByRatingInDescendingOrder) {
            /* Ascending order */
            tableRows.reverse();
            isSortedByRatingInDescendingOrder = false;
            isSortedByBrandAlphabetically = false;
        } else {
            /* Descending order */
            tableRows.sort((a, b) => b.children[2].dataset.rating - a.children[2].dataset.rating);
            isSortedByRatingInDescendingOrder = true;
            isSortedByBrandAlphabetically = false;
        }

        tableBody.replaceChildren(...tableRows);
    });
})();
