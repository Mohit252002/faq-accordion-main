const bt_click = document.querySelectorAll('.btn');

bt_click.forEach(function cbforeach(bt){
    bt.addEventListener('click',function cb()
{
    bt.classList.toggle('open');
    const sib = bt.parentNode.nextElementSibling;
    sib.classList.toggle('open');
    console.log(sib);

})
}
)