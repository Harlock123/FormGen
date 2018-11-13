class FormGen 
{

    constructor( DomElementID: string, UIElements: UIElement[])
    {
        // DomElementID will be the container for all the inserted form content

        var el = document.getElementById(DomElementID);
        var innerhtml = '<form> <br> ';

        for (let THEEL of UIElements)
        {
            switch (THEEL.elType.toUpperCase())
            {
                case "TEXT": {

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';

                    if (THEEL.elLabel.trim()!= "")
                    {

                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += '<input type="text" name = "' + THEEL.elID +'" id="' + THEEL.elID + '" ><br> ';

                    innerhtml += '</div> ';

                    break;

                }
                case "DATE": {

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';

                    if (THEEL.elLabel.trim()!= "")
                    {

                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += '<input type="date" name = "' + THEEL.elID +'" id="' + THEEL.elID + '" ><br> ';

                    innerhtml += '</div> ';

                    break;

                }
                case "NARRATIVE": {

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';

                    if (THEEL.elLabel.trim()!= "")
                    {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += '<textarea rows="5" cols="40" name = "' + THEEL.elID +'" id="' 
                    + THEEL.elID + '" ></textarea><br> ';

                    innerhtml += '</div> ';

                    break;

                }
                case "RADIO": {

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';

                    if (THEEL.elLabel.trim()!= "")
                    {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    let i = 0;
                    for(let v of THEEL.elContent)
                    {
                        i+=1;

                        if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length )
                        {
                            innerhtml += '<input type="radio" ' +
                            'name = "' + THEEL.elID +'" id="' + 
                            THEEL.elID + '_' + i.toString() + '" ' +
                            'value="' + v + '" >' + v + '<br> ';
                        }
                        else
                        {
                            innerhtml += '<input type="radio" ' +
                            'name = "' + THEEL.elID +'" id="' + 
                            THEEL.elID + '_' + i.toString() + '" ' +
                            'value="' + v + '" onchange="DoFormGenInteraction(this)" >' + v + '<br> ';
                        }
                    }

                    innerhtml += '</div> ';

                    break;
                }
                case "DROPDOWN": {

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';

                    if (THEEL.elLabel.trim()!= "")
                    {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }

                    innerhtml += '<select>';

                    let i = 0;
                    for(let v of THEEL.elContent)
                    {
                        i+=1;
                        innerhtml += '<option ' +
                        'name = "' + THEEL.elID +'" id="' + 
                        THEEL.elID + '_' + i.toString() + '" ' +
                        'value="' + v + '" >' + v + '</option> ';
                    }
                    innerhtml += '</select><br>';

                    innerhtml += '</div> ';

                    break;

                }
                case "CHECKBOX": {

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';

                    if (THEEL.elLabel.trim()!= "")
                    {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    let i = 0;
                    for(let v of THEEL.elContent)
                    {
                        i+=1;
                        innerhtml += '<input type="checkbox" ' +
                        'name = "' + THEEL.elID + '_' + i.toString() + '" id="' + 
                        THEEL.elID + '_' + i.toString() + '" ' +
                        'value="' + v + '" >' + v + '<br> ';
                    }

                    innerhtml += '</div> ';

                    break;

                }
            }
        }

        innerhtml += "</form>";

        el.innerHTML = innerhtml;
    } 

    /**
     * DoFormGenInteraction
     */
    public DoFormGenInteraction(e) {

        var radios = document.getElementsByName('3');
        

        alert("Interacted Here current value of ");
    }
}

class UIElement
{
    public elID: string;
    public elType: string;
    public elLabel: string;
    public elLabelBold: boolean;
    public elContent: string[];
    public elRequired: boolean;
    public elInteractions: UIInteraction[];

    constructor(elid: string, eltype: string, ellabel: string, 
        ellabelbold: boolean, elcontent: string[],elrequired: boolean,
        elinteractions: UIInteraction[])
    {
        this.elID = elid;
        this.elContent = elcontent;
        this.elLabel = ellabel;
        this.elRequired = elrequired;
        this.elType = eltype;
        this.elLabelBold = ellabelbold;
        this.elInteractions = elinteractions;

    }
}

class UIInteraction
{
    public elID: string;
    public elInteractionType: string;
    public elValueTrigger: string;

    constructor(elid: string, elinteractiontype: string, elvaluetrigger: string)
    {
        this.elID = elid;
        this.elInteractionType = elinteractiontype;
        this.elValueTrigger = elvaluetrigger;
    }
}