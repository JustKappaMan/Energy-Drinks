import { DB } from "./db.js";

(() => {
  const state = {
    data: [...DB],
    sortConfig: { key: null, direction: "asc" },
  };

  const getSortIcon = (columnKey) => {
    const isActive = state.sortConfig.key === columnKey;
    const opacityClass = isActive ? "" : "inactive";

    return `<img src="static/images/sort.svg" width="16" height="16" class="sort-icon ${opacityClass}" alt="Сортировка">`;
  };

  const getAriaSort = (columnKey) => {
    if (state.sortConfig.key !== columnKey) return "none";
    return state.sortConfig.direction === "asc" ? "ascending" : "descending";
  };

  const renderTable = () => {
    const tableRoot = document.getElementById("table-root");

    const html = `
      <div class="table-responsive shadow-sm">
        <table class="table table-striped table-bordered align-middle mb-0">
          <thead class="text-center text-nowrap">
            <tr>
              <th data-sort="brand" class="sortable-col" role="button" tabindex="0" aria-sort="${getAriaSort("brand")}" title="Сортировать по бренду">
                Бренд ${getSortIcon("brand")}
              </th>
              <th>Вкус</th>
              <th data-sort="rating" class="sortable-col" role="button" tabindex="0" aria-sort="${getAriaSort("rating")}" title="Сортировать по оценке" style="min-width: 120px;">
                Оценка ${getSortIcon("rating")}
              </th>
              <th style="min-width: 250px;">Описание</th>
            </tr>
          </thead>
          <tbody>
            ${state.data
              .map(
                (item) => `
            <tr>
              <td class="text-nowrap">${item.brand}</td>
              <td>${item.flavor}</td>
              <td class="text-center text-nowrap">
                 <span role="img" aria-label="Оценка: ${item.rating} из 5">${"⭐".repeat(item.rating)}</span>
              </td>
              <td>${item.description}</td>
            </tr>
          `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    tableRoot.innerHTML = html;
  };

  const handleSort = (key) => {
    let direction = "asc";

    if (state.sortConfig.key === key && state.sortConfig.direction === "asc") {
      direction = "desc";
    }

    state.sortConfig = { key, direction };

    state.data.sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === "string" && typeof valB === "string") {
        return direction === "asc"
          ? valA.localeCompare(valB, "ru", { numeric: true })
          : valB.localeCompare(valA, "ru", { numeric: true });
      }

      if (valA < valB) return direction === "asc" ? -1 : 1;
      if (valA > valB) return direction === "asc" ? 1 : -1;
      return 0;
    });

    renderTable();
  };

  const initEvents = () => {
    const tableRoot = document.getElementById("table-root");

    tableRoot.addEventListener("click", (e) => {
      const header = e.target.closest("th.sortable-col");
      if (header) {
        handleSort(header.dataset.sort);
      }
    });

    tableRoot.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const header = e.target.closest("th.sortable-col");
        if (header) {
          e.preventDefault();
          handleSort(header.dataset.sort);
        }
      }
    });
  };

  initEvents();
  renderTable();
})();
