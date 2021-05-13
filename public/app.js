const elemnt = document.getElementById("state");
const info =  document.getElementById("show");
async function Indianstates(){
	const response = await fetch('/api/states');
	const states = await response.json();
	states.forEach(state=>{ 
		const option = document.createElement('option');
		option.setAttribute('value',state.State);
		option.textContent = state.State;
		elemnt.append(option);

		option.addEventListener('click',()=>{
			info.innerHTML =  `<pre>${JSON.stringify(state,null,2)}</pre>`;
		});
	});
}

Indianstates();