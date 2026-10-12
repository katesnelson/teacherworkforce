(() => {
  const browser = document.querySelector('[data-resource-browser]');
  if (!browser) return;

  const form = browser.querySelector('[data-resource-filters]');
  const items = Array.from(browser.querySelectorAll('.publication-item'));
  const years = Array.from(browser.querySelectorAll('.publication-year'));
  const count = browser.querySelector('.resource-result-count');
  const empty = browser.querySelector('.resource-empty');
  const selects = Array.from(form.querySelectorAll('select'));
  const initialParams = new URLSearchParams(window.location.search);
  // Validate URL values against available options; absent filters mean All.
  for (const select of selects) {
    const value = initialParams.get(select.name) || '';
    select.value = !select.disabled && Array.from(select.options).some(option => option.value === value)
      ? value : '';
  }

  function syncUrl() {
    const url = new URL(window.location.href);
    for (const select of selects) {
      if (select.value) url.searchParams.set(select.name, select.value);
      else url.searchParams.delete(select.name);
    }
    window.history.replaceState(null, '', url);
  }

  function updateResults() {
    const selected = new FormData(form);
    let visible = 0;
    for (const item of items) {
      const matches = (!selected.get('topic') || item.dataset.topic === selected.get('topic'))
        && (!selected.get('sub_topic') || item.dataset.subTopic === selected.get('sub_topic'))
        && (!selected.get('education_level') || item.dataset.educationLevel === selected.get('education_level'));
      item.hidden = !matches;
      if (matches) visible++;
    }
    for (const year of years) {
      year.hidden = !Array.from(year.querySelectorAll('.publication-item')).some(item => !item.hidden);
    }
    count.textContent = `Showing ${visible} of ${items.length} resources`;
    empty.hidden = visible > 0;
  }

  form.addEventListener('change', () => {
    updateResults();
    syncUrl();
  });
  form.addEventListener('submit', event => event.preventDefault());
  // The reset event runs before the browser restores select values.
  form.addEventListener('reset', () => {
    for (const select of selects) select.value = '';
    updateResults();
    syncUrl();
  });
  browser.classList.add('filters-ready');
  browser.querySelector('.resource-filters').hidden = false;
  count.hidden = false;
  updateResults();
})();
