const e=document.querySelector(".feedback-form");!function(){let t=localStorage.getItem("feedback-form-state");t&&(t=JSON.parse(t),Object.entries(t).forEach((([t,a])=>{e.elements[t].value=null!=a?a:""})))}(),e.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:a}=e.currentTarget.elements;console.log({email:t.value,message:a.value}),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),e.addEventListener("input",throttle((function(t){let a=localStorage.getItem("feedback-form-state");a=a?JSON.parse(a):{};let{email:l,message:r}=e.elements;a={email:l.value.trim(),message:r.value.trim()},localStorage.setItem("feedback-form-state",JSON.stringify(a))}),500));
//# sourceMappingURL=03-feedback.f0fb8934.js.map
