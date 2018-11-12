class FormGen 
{

    constructor( DomElementID: string)
    {
        // DomElementID will be the container for all the inserted form content

        var el = document.getElementById(DomElementID);

        el.innerHTML = '<form> ' +
            'First name:<br> ' + 
            '<input type="text" name="firstname"><br> ' +
            'Last name:<br> ' +
            '<input type="text" name="lastname"> ' +
            '<br> ' + 
            'Gender <br> ' +
            '<input type="radio" name="gender" value="male" checked> Male<br> ' +
            '<input type="radio" name="gender" value="female"> Female<br> ' +
            '<input type="radio" name="gender" value="other"> Other<br> ' +
            'Select one of the options below <br> ' +
            '<select> ' + 
            '<option value="volvo">Volvo</option> ' +
            '<option value="saab">Saab</option> ' +
            '<option value="mercedes">Mercedes</option> ' +
            '<option value="audi">Audi</option> ' +
            '</select>' +
        '</form>'; 




    } 
}