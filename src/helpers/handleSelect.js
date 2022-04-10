const handleSelect = (e) =>{
    e.preventDefault();
        
    for(let i of e.target.parentNode.children){
        if(i === e.target){
            i.classList.add('btn-background-slide-click');
           
        }else{
            i.classList.remove('btn-background-slide-click'); 
        };
    };
};

export default handleSelect;