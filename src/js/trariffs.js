document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs__item');
  const tabBlocks = document.querySelectorAll('.tabs__block');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      tabBlocks.forEach(block => block.classList.remove('active'));

      
      tab.classList.add('active');
      const tabId = tab.getAttribute('href').substring(1);
      document.getElementById(tabId).classList.add('active');
    });
  });
});