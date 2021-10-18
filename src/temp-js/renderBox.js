function renderBox(){
	var img='',title='',link='';
	var css=`%%css%%`;
	var html=`%%html%%`;
	document.getElementById('information').innerHTML = `<style>${css}</style>${html}`;
}
renderBox();