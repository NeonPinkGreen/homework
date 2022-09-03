const root = document.querySelector(`ul#root`);

const setLastItemClassByLevel = (ul) => {

    let LiLast = ul.querySelector(`li:last-of-type`);
    LiLast.classList.add(`last`);

    const Lis = [...ul.children];

    Lis.forEach(li => {
        let InnerUls = [...li.children];

        InnerUls.forEach(innerUl => setLastItemClassByLevel(innerUl));
    })

}

const setFirstItemClassByLevel = (ul, level) => {
    level--;

    if (level > 0){
        const Lis = [...ul.children];

        Lis.forEach(li => {
            let InnerUls = [...li.children];

            InnerUls.forEach(innerUl => setFirstItemClassByLevel(innerUl, level));
        })
        }else {
        let LiFirst = ul.querySelector(`li:first-of-type`);
        LiFirst.classList.add(`first`);
    }


}

setTimeout(() => setFirstItemClassByLevel(root, 2), 2000);
setTimeout(() => setLastItemClassByLevel(root), 4000);