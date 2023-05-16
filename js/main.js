let {scrollTop,clientHeight,clientWidth}=document.documentElement;
document.querySelector('#menu1').style.display='block'; 
document.querySelector('#menu2').style.display='none'; 
document.querySelector('.navResponsive').style.top=document.querySelector('header').getBoundingClientRect().height+"px";
document.querySelector('#menu1').addEventListener('click',()=>{
    document.querySelector('.navResponsive').style.marginLeft='0';
    document.querySelector('#menu1').style.display='none';
    document.querySelector('#menu2').style.display='block'; 
    document.querySelector('.navResponsive').style.top=document.querySelector('header').getBoundingClientRect().height+"px";

    if(document.querySelector('header').id == 'manga'){
        document.querySelector('.navResponsive').style.background = 'rgba(78,78,78,0.95)';
    }
    else if(document.querySelector('header').id == 'gris'){
        document.querySelector('.navResponsive').style.background = 'rgba(0,28,49,)';
    }
    else{
        document.querySelector('.tousService').style.background = 'rgba(78,78,78,0.8)';
    }
        
});
document.querySelector('#menu2').addEventListener('click',()=>{
    document.querySelector('.navResponsive').style.marginLeft='-100%';
    document.querySelector('#menu2').style.display='none';
    document.querySelector('#menu1').style.display='block';
});


document.querySelector('#sous-service').addEventListener('click',()=>{
    let teste = document.querySelector('#teste').innerHTML;
    if(teste == '0'){
        document.querySelector('#teste').innerHTML = '1';
        document.querySelector('.mitsinjo ul').style.marginTop = '0%';
        document.querySelector('#texte-i').style.transform = 'rotate(90deg)';
    }
    else{
        document.querySelector('#teste').innerHTML = '0';
        document.querySelector('.mitsinjo ul').style.marginTop = '-100%';
        document.querySelector('#texte-i').style.transform = 'rotate(0deg)';
        document.querySelector('.menu-fille-fille-sante').style.marginTop = '-100%';
        document.querySelector('.reserve3').id = 'none';
        document.querySelector('.menu-fille-fille-reservation').style.marginTop = '-100%';
        document.querySelector('.reserve4').id = 'none';
    }
}); 
document.querySelector('#sante').addEventListener('click',()=>{
    let teste1 = document.querySelector('#teste1').innerHTML;
    if(teste1 == '0'){
        document.querySelector('#teste1').innerHTML = '1';
        document.querySelector('.menu-fille-fille-sante').style.marginTop = '0%';
        document.querySelector('.reserve3').id = 'active';
    }
    else{
        document.querySelector('#teste1').innerHTML = '0';
        document.querySelector('.menu-fille-fille-sante').style.marginTop = '-100%';
        document.querySelector('.reserve3').id = 'none';
    }
}); 
document.querySelector('#reservation').addEventListener('click',()=>{
    let teste1 = document.querySelector('#teste2').innerHTML;
    if(teste1 == '0'){
        document.querySelector('#teste2').innerHTML = '1';
        document.querySelector('.menu-fille-fille-reservation').style.marginTop = '0%';
        document.querySelector('.reserve4').id = 'active1';
    }
    else{
        document.querySelector('#teste2').innerHTML = '0';
        document.querySelector('.menu-fille-fille-reservation').style.marginTop = '-100%';
        document.querySelector('.reserve4').id = 'none';
    }
});

window.addEventListener('scroll',()=>{
    document.querySelector('.navResponsive').style.top=document.querySelector('header').getBoundingClientRect().height+"px";
    document.querySelector('.service').style.height = document.querySelector('header').getBoundingClientRect().height + 'px';
    document.querySelector('.tousService').style.top = document.querySelector('header').getBoundingClientRect().height+2+ 'px';
    
    //variable izay ilaina rehetra
    let imageTop =parseInt(document.querySelector('.image').getBoundingClientRect().top.toFixed());
    let section2Hauteur = parseInt(document.querySelector('.section2').getBoundingClientRect().height.toFixed());   
    let headerHauteur = parseInt(document.querySelector('header').getBoundingClientRect().height.toFixed());  
    let topGauche = parseInt(document.querySelector('.gauche').getBoundingClientRect().top.toFixed());  
    let topSection2 = parseInt(document.querySelector('.section2').getBoundingClientRect().top.toFixed());
    let topSection3 = parseInt(document.querySelector('.section3').getBoundingClientRect().top.toFixed());
    let header = document.querySelector('header');
    
    // document.querySelector('.navResponsive ul').style.marginTop=
    if(imageTop < clientHeight*0.5 && imageTop>(-headerHauteur)){
        for(let i=1;i<6;i++){
            let classe='.anim'+i;
            let id = 'animation'+i;
            if(document.querySelector(classe)!=null){
                document.querySelector(classe).id=id;
            }
        }
    }
    if((parseInt(imageTop)+parseInt(section2Hauteur))<=0 || imageTop > clientHeight*0.9){
        for(let i=1;i<6;i++){
            let classe='.anim'+i;
            let id_apres = '#animation'+i;
            
            if(document.querySelector(classe)!=null){
                document.querySelector(classe).id='none';
            }
        }
    }
    if(imageTop > clientHeight*0.9){
        for(let i=1;i<6;i++){
            let classe='.anim'+i;
            let id_apres = '#animation'+i;
            
            if(document.querySelector(classe)!=null){
                document.querySelector(classe).id='none';
            }
        }
    }


    let topFormation=document.querySelector('.formation').getBoundingClientRect().top.toFixed();
    if(topFormation<=(clientHeight*0.9)){
        document.querySelector('.formation').classList.add('animationFormation');
        document.querySelector('.manakona').classList.add('animationManakona');
        document.querySelector('.span1').classList.add('animationSpan');
        document.querySelector('.span2').classList.add('animationSpan');
        document.querySelector('.span3').classList.add('animationSpan');
        document.querySelector('.span4').classList.add('animationSpan');
        document.querySelector('.span5').classList.add('animationSpan');
        document.querySelector('.span6').classList.add('animationSpan');
        document.querySelector('.span7').classList.add('animationSpan');
        document.querySelector('.span8').classList.add('animationSpan');
        document.querySelector('.span9').classList.add('animationSpan');
        document.querySelector('.span10').classList.add('animationSpan');
        document.querySelector('.span11').classList.add('animationSpan');
      
    }
    else{
        document.querySelector('.formation').classList.remove('animationFormation');
        document.querySelector('.manakona').classList.remove('animationManakona');
        document.querySelector('.span1').classList.remove('animationSpan');
        document.querySelector('.span2').classList.remove('animationSpan');
        document.querySelector('.span3').classList.remove('animationSpan');
        document.querySelector('.span4').classList.remove('animationSpan');
        document.querySelector('.span5').classList.remove('animationSpan');
        document.querySelector('.span6').classList.remove('animationSpan');
        document.querySelector('.span7').classList.remove('animationSpan');
        document.querySelector('.span8').classList.remove('animationSpan');
        document.querySelector('.span9').classList.remove('animationSpan');
        document.querySelector('.span10').classList.remove('animationSpan');
        document.querySelector('.span11').classList.remove('animationSpan');
    }


    if(topGauche <= headerHauteur){
        header.id ='gris';
    }
    else{
        header.id = 'none';
    }

    if(topSection2 <= headerHauteur){
        header.id ='manga';
        document.querySelector('.demande').style.animation = 'animation-demande 1s ease-out';
    }
    else{
        document.querySelector('.demande').style.animation = 'none';
    }


    if(topSection3 <= headerHauteur){
        header.id ='gris';
    }
    
    if(document.querySelector('header').id == 'manga'){
        document.querySelector('.navResponsive').style.background = 'rgba(78,78,78,0.95)';
    }
    else if(document.querySelector('header').id == 'gris'){
        document.querySelector('.navResponsive').style.background = 'rgba(0,28,49,0.95)';
    }
    else{
        document.querySelector('.tousService').style.background = 'rgba(78,78,78,0.8)';
    }
});

for(let i=1;i<7;i++){
    let id_a='#java'+i;
    let id_span='#python'+i;
    let largeur=document.querySelector(id_span).getBoundingClientRect().width;
    document.querySelector(id_a).style.width=largeur+'px';
}
document.querySelector('.petit').style.height=document.querySelector('.jejo').getBoundingClientRect().height+'px';
   

//BORIBORY
for(let i=1;i<7;i++){
    let id_rond='.rond'+i;
    let nouveauId='#nouv'+i;
    let nouvId="nouv"+i;
    let image='.image'+i;
    let lava=parseInt(document.querySelector(id_rond).getBoundingClientRect().left);
    let fohy=parseInt(document.querySelector('.grand').getBoundingClientRect().left);
    let diametre=parseInt(document.querySelector(id_rond).getBoundingClientRect().width)
    let total=-(lava-fohy+diametre);
    document.querySelector(id_rond).style.transform='translate('+total+'px)'; 
    window.addEventListener('scroll',()=>{
    let hauteurGrand=parseInt(document.querySelector('.grand').getBoundingClientRect().height);
    let topGrand=parseInt(document.querySelector('.grand').getBoundingClientRect().top);
    if(topGrand<clientHeight*0.4){
        document.querySelector(id_rond).style.transform='translate(0)';
        document.querySelector(image).id='roule';
    }
    else{
            document.querySelector(image).id='tourne';
            document.querySelector(id_rond).style.transform='translate('+total+'px)'; 
    }
    if(topGrand<(-hauteurGrand)*0.4){
        document.querySelector(image).id='tourne';
        document.querySelector(id_rond).style.transform='translate('+total+'px)'; 
       }
   });
}

//CHECKBOX
document.querySelector('#safidy').addEventListener('click',()=>{
    if(document.querySelector('#safidy').checked == true){
        document.querySelector('.mietsika').id='power';
        document.querySelector('.no').style.display='none';
        document.querySelector('.yes').style.display='block';

    }
    
    else{
        document.querySelector('.mietsika').id='poweroff';
        document.querySelector('.yes').style.display='none';
        document.querySelector('.no').style.display='block';
    }
});

//CONNEXION
document.querySelector('.connexion').addEventListener('click',()=>{
    document.querySelector('.support').style.transform='scale(1)';
});
// document.querySelector('.connexionBas').addEventListener('click',()=>{
//     document.querySelector('.support').style.transform='scale(1)';
// });
document.querySelector('.mialaAmbony').addEventListener('click',()=>{
    document.querySelector('.support').style.transform='scale(0)';
});

//HOVER HEADER
document.querySelector('header').addEventListener('mouseover',()=>{
    document.querySelector('.service').style.height = document.querySelector('header').getBoundingClientRect().height + 'px';
    document.querySelector('.tousService').style.top = document.querySelector('header').getBoundingClientRect().height +2+ 'px';
 
    if(document.querySelector('header').id == 'gris'){
        document.querySelector('.tousService').style.background = 'rgba(78,78,78,0.95)';
        document.querySelector('.menu-menu').style.background = 'rgba(78,78,78,0.95)';
        document.querySelector('#menu-menu').style.background = 'rgba(78,78,78,0.95)';
    }
    else if(document.querySelector('header').id == 'manga'){
        document.querySelector('.tousService').style.background = 'rgba(0,28,49,0.95)';
        document.querySelector('.menu-menu').style.background = 'rgba(0,28,49,0.95)';
        document.querySelector('#menu-menu').style.background = 'rgba(0,28,49,0.95)';
    }
    else{
        document.querySelector('.tousService').style.background = 'rgba(78,78,78,0.8)';
        document.querySelector('.menu-menu').style.background = 'rgba(78,78,78,0.8)';
        document.querySelector('#menu-menu').style.background = 'rgba(78,78,78,0.8)';
        document.querySelector('header').id = 'gris';
    }
});

//SOUS-MENU
document.querySelector('#misosa-kely').addEventListener('mouseover',()=>{
    document.querySelector('.tousService').style.overflow = 'visible';
    console.log('jkfjdkfjkdjfkdjfkdjfkdjfkjkdjfkjdfkjdk');
});
document.querySelector('#misosa-kely').addEventListener('mouseout',()=>{
    document.querySelector('.tousService').style.overflow = 'hidden';
});
document.querySelector('#misosa-kely1').addEventListener('mouseover',()=>{
    document.querySelector('.tousService').style.overflow = 'visible';
});
document.querySelector('#misosa-kely1').addEventListener('mouseout',()=>{
    document.querySelector('.tousService').style.overflow = 'hidden';
});
