(() => {
  const browser = document.querySelector('[data-resource-browser]');
  if (!browser) return;

  const pageSize = 10;
  const form = browser.querySelector('[data-resource-filters]');
  const search = form.querySelector('[name="q"]');
  const selects = Array.from(form.querySelectorAll('select'));
  const sort = browser.querySelector('[name="sort"]');
  const list = browser.querySelector('[data-resource-list]');
  const items = Array.from(list.querySelectorAll('.publication-item'));
  const count = browser.querySelector('.resource-result-count');
  const empty = browser.querySelector('.resource-empty');
  const tags = browser.querySelector('.resource-active-filters');
  const pagination = browser.querySelector('.resource-pagination');
  let page = 1;

  // Match every search term across titles, authors, descriptions, and keywords.
  const normalize = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const searchable = new Map(items.map(item => [item, normalize(item.dataset.search)]));

  function readUrl() {
    const params = new URLSearchParams(window.location.search);
    for (const select of selects) {
      const value = params.get(select.name) || '';
      select.value = !select.disabled && Array.from(select.options).some(option => option.value === value)
        ? value : '';
    }
    search.value = params.get('q') || '';
    const order = params.get('sort');
    sort.value = Array.from(sort.options).some(option => option.value === order) ? order : 'date-desc';
    const requestedPage = params.get('page') || '1';
    page = /^\d+$/.test(requestedPage) && Number.isSafeInteger(Number(requestedPage))
      ? Math.max(1, Number(requestedPage)) : 1;
  }

  function stateUrl(targetPage = page) {
    const url = new URL(window.location.href);
    for (const select of selects) {
      if (select.value) url.searchParams.set(select.name, select.value);
      else url.searchParams.delete(select.name);
    }
    const query = search.value.trim();
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    if (sort.value !== 'date-desc') url.searchParams.set('sort', sort.value);
    else url.searchParams.delete('sort');
    if (targetPage > 1) url.searchParams.set('page', String(targetPage));
    else url.searchParams.delete('page');
    return url;
  }

  function syncUrl(method = 'replaceState') {
    window.history[method](null, '', stateUrl());
  }

  function renderTags() {
    tags.replaceChildren();
    const active = selects.filter(select => select.value).map(select => ({
      text: select.value,
      label: `${select.labels[0].textContent}: ${select.value}`,
      clear: () => { select.value = ''; }
    }));
    if (search.value.trim()) active.push({
      text: `Search: ${search.value.trim()}`,
      label: `Search: ${search.value.trim()}`,
      clear: () => { search.value = ''; }
    });
    for (const filter of active) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'resource-filter-tag';
      button.textContent = `${filter.text} ×`;
      button.setAttribute('aria-label', `Remove ${filter.label}`);
      button.addEventListener('click', () => {
        filter.clear();
        page = 1;
        render();
        syncUrl();
        count.focus({preventScroll: true});
      });
      tags.append(button);
    }
    tags.hidden = active.length === 0;
  }

  function renderPagination(totalPages) {
    pagination.replaceChildren();
    pagination.hidden = totalPages <= 1;
    if (totalPages <= 1) return;

    function addLink(label, targetPage, accessibleLabel) {
      const link = document.createElement('a');
      link.href = stateUrl(targetPage).href;
      link.textContent = label;
      if (accessibleLabel) link.setAttribute('aria-label', accessibleLabel);
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        page = targetPage;
        render();
        syncUrl('pushState');
        count.focus({preventScroll: true});
        count.scrollIntoView({block: 'start'});
      });
      pagination.append(link);
    }

    if (page > 1) addLink('Previous', page - 1, 'Previous page');
    const pages = Array.from({length: totalPages}, (_, index) => index + 1)
      .filter(number => totalPages <= 7 || number === 1 || number === totalPages || Math.abs(number - page) <= 1);
    let previous = 0;
    for (const number of pages) {
      if (previous && number - previous > 1) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '…';
        ellipsis.setAttribute('aria-hidden', 'true');
        pagination.append(ellipsis);
      }
      if (number === page) {
        const current = document.createElement('span');
        current.textContent = String(number);
        current.setAttribute('aria-current', 'page');
        current.setAttribute('aria-label', `Page ${number}`);
        pagination.append(current);
      } else addLink(String(number), number, `Page ${number}`);
      previous = number;
    }
    if (page < totalPages) addLink('Next', page + 1, 'Next page');
  }

  function render() {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    const selected = new FormData(form);
    const matches = items.filter(item =>
      (!selected.get('topic') || JSON.parse(item.dataset.topic).includes(selected.get('topic')))
      && (!selected.get('sub_topic') || JSON.parse(item.dataset.subTopic).includes(selected.get('sub_topic')))
      && (!selected.get('education_level') || JSON.parse(item.dataset.educationLevel).includes(selected.get('education_level')))
      && terms.every(term => searchable.get(item).includes(term))
    );
    const titleOrder = (a, b) => a.dataset.title.localeCompare(b.dataset.title, 'en', {sensitivity: 'base'});
    matches.sort((a, b) => {
      if (sort.value === 'title') return titleOrder(a, b);
      const dateOrder = a.dataset.date.localeCompare(b.dataset.date);
      return (sort.value === 'date-asc' ? dateOrder : -dateOrder) || titleOrder(a, b);
    });
    const totalPages = Math.max(1, Math.ceil(matches.length / pageSize));
    page = Math.min(page, totalPages);
    const start = (page - 1) * pageSize;
    for (const item of items) item.hidden = true;
    for (const item of matches.slice(start, start + pageSize)) {
      item.hidden = false;
      list.append(item);
    }
    count.textContent = matches.length
      ? `Showing ${start + 1}–${Math.min(start + pageSize, matches.length)} of ${matches.length} resources`
      : 'Showing 0 resources';
    empty.hidden = matches.length > 0;
    renderTags();
    renderPagination(totalPages);
  }

  function applyFilters() {
    page = 1;
    render();
    syncUrl();
  }
  form.addEventListener('change', applyFilters);
  search.addEventListener('input', applyFilters);
  sort.addEventListener('change', applyFilters);
  form.addEventListener('submit', event => { event.preventDefault(); applyFilters(); });
  form.addEventListener('reset', event => {
    event.preventDefault();
    for (const select of selects) select.value = '';
    search.value = '';
    applyFilters();
  });
  window.addEventListener('popstate', () => { readUrl(); render(); syncUrl(); });
  readUrl();
  browser.classList.add('filters-ready');
  browser.querySelector('.resource-filters').hidden = false;
  browser.querySelector('.resource-results-toolbar').hidden = false;
  render();
  syncUrl();
})();
