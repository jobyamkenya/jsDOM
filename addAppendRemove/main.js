function createParagraph(){
	'use strict'
	var para = document.createElement('P');
	para.textContent = 'You have clicked a button';
	document.body.appendChild(para)

}

var clckBtn = document.querySelectorAll('Button');
    
    for(i=0 ; i < clickBtn.length ; i++){
        clckBtn[i].addEventListener('click', createParagraph);
    }