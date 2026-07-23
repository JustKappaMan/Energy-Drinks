import { DB } from "./db.js";

const state = {
  data: [...DB],
  sortConfig: { key: null, direction: "asc" },
};

const escapeHTML = (str) => {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const initTable = () => {
  const tableRoot = document.getElementById("table-root");
  tableRoot.innerHTML = `
    <div class="table-responsive shadow-sm">
      <table class="table table-striped table-bordered align-middle mb-0">
        <thead class="text-center text-nowrap" id="table-head">
          <tr>
            <th data-sort="brand" class="sortable-col" role="button" tabindex="0" title="Сортировать по бренду">
              Бренд <img src="static/images/sort.svg" width="16" height="16" class="sort-icon inactive" alt="Сортировка">
            </th>
            <th>Вкус</th>
            <th data-sort="rating" class="sortable-col" role="button" tabindex="0" title="Сортировать по оценке" style="min-width: 120px;">
              Оценка <img src="static/images/sort.svg" width="16" height="16" class="sort-icon inactive" alt="Сортировка">
            </th>
            <th style="min-width: 250px;">Описание</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    </div>
  `;
};

const updateHeadersUI = () => {
  const headers = document.querySelectorAll("#table-head th.sortable-col");
  headers.forEach((th) => {
    const key = th.dataset.sort;
    const icon = th.querySelector(".sort-icon");
    const isActive = state.sortConfig.key === key;

    if (isActive) {
      th.setAttribute("aria-sort", state.sortConfig.direction === "asc" ? "ascending" : "descending");
      icon.classList.remove("inactive");
    } else {
      th.removeAttribute("aria-sort");
      icon.classList.add("inactive");
    }
  });
};

const renderBody = () => {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = state.data
    .map(
      (item) => `
      <tr>
        <td class="text-nowrap">${escapeHTML(item.brand)}</td>
        <td>${escapeHTML(item.flavor)}</td>
        <td class="text-center text-nowrap">
          <span role="img" aria-label="Оценка: ${item.rating} из 5">${"⭐".repeat(item.rating)}</span>
        </td>
        <td>${escapeHTML(item.description)}</td>
      </tr>
    `,
    )
    .join("");
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

  updateHeadersUI();
  renderBody();
};

const initEvents = () => {
  const tableRoot = document.getElementById("table-root");

  const onAction = (e) => {
    const header = e.target.closest("th.sortable-col");
    if (!header) return;

    if (e.type === "click" || (e.type === "keydown" && (e.key === "Enter" || e.key === " "))) {
      e.preventDefault();
      handleSort(header.dataset.sort);
    }
  };

  tableRoot.addEventListener("click", onAction);
  tableRoot.addEventListener("keydown", onAction);
};

initTable();
initEvents();
renderBody();
