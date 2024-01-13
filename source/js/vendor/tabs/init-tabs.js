import {Tabs} from '../../vendor/tabs/tabs.js';

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;
};

export {initTabs, tabs};
