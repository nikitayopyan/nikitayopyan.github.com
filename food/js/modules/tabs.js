function tabs(tabsSelector, tabParentSelector, contentSelector, active){

    const tabs = document.querySelectorAll(tabsSelector),
          tabParent = document.querySelector(tabParentSelector),
          content = document.querySelectorAll(contentSelector);
    
    function hideContent(){
        content.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        });
        tabs.forEach(tab => {
            tab.classList.remove(active);
        });
    }

    hideContent();
    showContent(0);

    function showContent(i){
        tabs[i].classList.add(active);
        content[i].classList.remove('hide');
        content[i].classList.add('show');
    }
   
    tabParent.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((tab, i) => {
                if(tab == event.target){
                    hideContent();
                    showContent(i);
                }
            });
        }
    }); 
}

export default tabs;