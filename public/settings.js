let setContentBtn = document.querySelectorAll('.settings-list')
let tabsItems = document.querySelectorAll('.list-settings-menu')
setContentBtn.forEach(onTabClick)
function onTabClick(item) {
    item.addEventListener('click', () => {
        let itemBtn = item
        let tabId = itemBtn.getAttribute("set-number-id")
        let currentTab = document.querySelector(tabId)
        if (!itemBtn.classList.contains('active')) {
            setContentBtn.forEach(function (item) {
                item.classList.remove('active')
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active')
            });
            itemBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    })
}
document.querySelector('.settings-list').click()

