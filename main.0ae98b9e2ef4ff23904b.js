(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+h2y":function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title">Results:</h2>\r\n<p class="question-condition"><strong>Condition:</strong> Your child`s teeth at low risk.</p>\r\n<p class="question-recomendation"><strong>Recomendation:</strong> Please make an appointment for your child by pediatric dentist for checkup and fluoride varnish application.</p>\r\n<form class="question-form js-form">\r\n    <input class="question-input js-input-name" type="text" placeholder="Your name...">\r\n    <input class="question-input js-input-email" type="email" placeholder="Your email...">\r\n    <button class="btn btn-standart" type="submit">Send</button>\r\n</form>'},useData:!0})},"4tel":function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title js-question-title" data-question="8">\r\n    8. Does your child received fluoride varnish in the last 6 months?   \r\n</h2>\r\n<div class="buttons-container js-buttons-container">\r\n    <button type="button" class="btn btn-answer" data-answer="Yes"><i class="fas fa-check"></i> Yes</button>\r\n    <button type="button" class="btn btn-answer" data-answer="No"><i class="fas fa-times"></i> No</button>\r\n</div>'},useData:!0})},LnDX:function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title js-question-title" data-question="2">\r\n    2. Have child’s mother or primary caregiver regular checkups during the last 2 years?\r\n</h2>\r\n<div class="buttons-container js-buttons-container">\r\n    <button type="button" class="btn btn-answer" data-answer="Yes"><i class="fas fa-check"></i> Yes</button>\r\n    <button type="button" class="btn btn-answer" data-answer="No"><i class="fas fa-times"></i> No</button>\r\n</div>'},useData:!0})},NMbj:function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title js-question-title" data-question="1">\r\n    1. Have child’s mother or primary caregiver had active decay (cavity) in\r\n    the past 12 months?\r\n</h2>\r\n<div class="buttons-container js-buttons-container">\r\n    <button type="button" class="btn btn-answer" data-answer="Yes"><i class="fas fa-check"></i> Yes</button>\r\n    <button type="button" class="btn btn-answer" data-answer="No"><i class="fas fa-times"></i> No</button>\r\n</div>'},useData:!0})},"O/WZ":function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title">How old is your child?</h2>\r\n<input class="question-input js-age-input" type="number" placeholder="Type age here...">\r\n<button type="button" class="btn btn-standart js-next-button">Next</button>'},useData:!0})},QfWi:function(t,n,e){"use strict";e.r(n);e("u0UJ"),e("fp7Y");function s(t,n){t.innerHTML="",t.innerHTML=n()}e("wCa+");var a=e("SzhR");e("SHTW");a.a.initializeApp({apiKey:"AIzaSyDctEiKvjtEtULead0W81NIxV6dLCmXpEY",authDomain:"clingo-db.firebaseapp.com",databaseURL:"https://clingo-db.firebaseio.com",projectId:"clingo-db",storageBucket:"clingo-db.appspot.com",messagingSenderId:"354568219398",appId:"1:354568219398:web:890f0f74a5cd0351814c87"});var o=a.a.database();var i=function(t){o.ref("quiz/"+Date.now()).set(Object.assign({},t))},r=e("O/WZ"),u=e.n(r),c=e("NMbj"),l=e.n(c),d=e("LnDX"),p=e.n(d),b=e("dcJG"),m=e.n(b),f=e("poVT"),h=e.n(f),q=e("kobE"),y=e.n(q),v=e("cJ33"),w=e.n(v),j=e("nBM/"),k=e.n(j),g=e("4tel"),Y=e.n(g),N=e("+h2y"),D=e.n(N),S=e("wXti"),x=e.n(S),L={container:document.querySelector(".js-container"),startButton:document.querySelector(".js-start-button")},E={name:null,email:null,age:null,risk:null,questions:[]},T=!1;function H(){var t=L.inputAge.value;E.age=Number(t),s(L.container,l.a),L.questionTitle=document.querySelector(".js-question-title"),L.buttonsContainer=document.querySelector(".js-buttons-container"),L.buttonsContainer.addEventListener("click",C)}function C(t){var n=E.questions,e=L.questionTitle.dataset.question,a=t.target.dataset.answer;if(a){var o={question:L.questionTitle.innerText,answer:t.target.dataset.answer};switch(n.push(o),e){case"1":"Yes"===a&&(T=!0),s(L.container,p.a),J();break;case"2":"Yes"===a&&(T=!0),s(L.container,m.a),J();break;case"3":"Yes"===a&&(T=!0),s(L.container,h.a),J();break;case"4":"Yes"===a&&(T=!0),s(L.container,y.a),J();break;case"5":s(L.container,w.a),J();break;case"6":s(L.container,k.a),J();break;case"7":s(L.container,Y.a),J();break;case"8":T?(L.container.innerHTML=x()(),L.questionForm=document.querySelector(".js-form"),L.inputName=document.querySelector(".js-input-name"),L.inputEmail=document.querySelector(".js-input-email"),L.questionForm.addEventListener("submit",M)):(L.container.innerHTML=D()(),L.questionForm=document.querySelector(".js-form"),L.inputName=document.querySelector(".js-input-name"),L.inputEmail=document.querySelector(".js-input-email"),L.questionForm.addEventListener("submit",M))}}}function J(){L.questionTitle=document.querySelector(".js-question-title"),L.buttonsContainer=document.querySelector(".js-buttons-container"),L.buttonsContainer.addEventListener("click",C)}function M(t){t.preventDefault(),E.name=L.inputName.value,E.email=L.inputEmail.value,E.risk=T?"High":"Low",i(E)}L.startButton.addEventListener("click",(function(){s(L.container,u.a),L.initialQuestionBtn=document.querySelector(".js-next-button"),L.inputAge=document.querySelector(".js-age-input"),L.initialQuestionBtn.addEventListener("click",H)}))},cJ33:function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title js-question-title" data-question="6">\r\n    6. Does your child drinks fluoridated water or takes fluoride supplements? \r\n</h2>\r\n<div class="buttons-container js-buttons-container">\r\n    <button type="button" class="btn btn-answer" data-answer="Yes"><i class="fas fa-check"></i> Yes</button>\r\n    <button type="button" class="btn btn-answer" data-answer="No"><i class="fas fa-times"></i> No</button>\r\n</div>'},useData:!0})},dcJG:function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title js-question-title" data-question="3">\r\n    3. Does your child has snacks or beverages (other than water) between meals?\r\n</h2>\r\n<div class="buttons-container js-buttons-container">\r\n    <button type="button" class="btn btn-answer" data-answer="Yes"><i class="fas fa-check"></i> Yes</button>\r\n    <button type="button" class="btn btn-answer" data-answer="No"><i class="fas fa-times"></i> No</button>\r\n</div>'},useData:!0})},kobE:function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title js-question-title" data-question="5">\r\n    5. Does your child had a dental checkup during the last 12 months?\r\n</h2>\r\n<div class="buttons-container js-buttons-container">\r\n    <button type="button" class="btn btn-answer" data-answer="Yes"><i class="fas fa-check"></i> Yes</button>\r\n    <button type="button" class="btn btn-answer" data-answer="No"><i class="fas fa-times"></i> No</button>\r\n</div>'},useData:!0})},"nBM/":function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title js-question-title" data-question="7">\r\n    7. Does your child has his/her teeth brushed twice a day with fluoride toothpaste?  \r\n</h2>\r\n<div class="buttons-container js-buttons-container">\r\n    <button type="button" class="btn btn-answer" data-answer="Yes"><i class="fas fa-check"></i> Yes</button>\r\n    <button type="button" class="btn btn-answer" data-answer="No"><i class="fas fa-times"></i> No</button>\r\n</div>'},useData:!0})},poVT:function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title js-question-title" data-question="4">\r\n    4. Does your child ever had cavities or fillings?\r\n</h2>\r\n<div class="buttons-container js-buttons-container">\r\n    <button type="button" class="btn btn-answer" data-answer="Yes"><i class="fas fa-check"></i> Yes</button>\r\n    <button type="button" class="btn btn-answer" data-answer="No"><i class="fas fa-times"></i> No</button>\r\n</div>'},useData:!0})},u0UJ:function(t,n,e){},wXti:function(t,n,e){var s=e("mp5j");t.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,s,a){return'<h2 class="question-title">Results:</h2>\r\n<p class="question-condition"><strong>Condition:</strong> Your child`s teeth at high risk.</p>\r\n<p class="question-recomendation"><strong>Recomendation:</strong> Please contact pediatric dentist your area for a checkup and further assessments as soon as possible! You child needs professional dental support.</p>\r\n<form class="question-form js-form">\r\n    <input class="question-input js-input-name" type="text" placeholder="Your name...">\r\n    <input class="question-input js-input-email" type="text" placeholder="Your email...">\r\n    <button class="btn btn-standart" type="submit">Send</button>\r\n</form>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.0ae98b9e2ef4ff23904b.js.map