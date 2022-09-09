function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    localStorage.setItem('UserName',name);
    localStorage.setItem('EmailID',email);
    localStorage.setItem('PhoneNumber',phone);
}