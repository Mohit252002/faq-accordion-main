const section = document.querySelectorAll('.sec');

section.forEach(function cb1(item){
    item.addEventListener('click' , function cb_inner1(){
        const childs = item.children;
        console.log(childs);
        const first_child = childs[0].children;
        const btn = first_child[1];
        btn.classList.toggle('open');
        childs[1].classList.toggle('open');

    });

});