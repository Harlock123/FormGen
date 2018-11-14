class FormGen 
{

    private theUIInteractions: UIInteraction[] = [];

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

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';

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

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';

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

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';

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

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';

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
                            for (let v of THEEL.elInteractions)
                            {
                                this.theUIInteractions.push(v);
                            }

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

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';

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

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';

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
                            innerhtml += '<input type="checkbox" ' +
                            'name = "' + THEEL.elID + '" id="' + 
                            THEEL.elID + '_' + i.toString() + '" ' +
                            'value="' + v + '" >' + v + '<br> ';
                        }
                        else
                        {
                            for (let v of THEEL.elInteractions)
                            {
                                this.theUIInteractions.push(v);
                            }
                            
                            innerhtml += '<input type="checkbox" ' +
                            'name = "' + THEEL.elID + '" id="' + 
                            THEEL.elID + '_' + i.toString() + '" ' +
                            'value="' + v + '" onchange="DoFormGenInteraction(this)" >' + v + '<br> ';
                        }
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

        for (let UIi of this.theUIInteractions)
        {
            // parse each noted interaction to see if we need to act on it

            if (e.name == UIi.elIDSource)
            {
                // we have a rule that is triggered by this potentially
                if (e.type == "radio" || e.type == "checkbox")
                {
                    // there may be several so lets get them all to look at their values
                    var radios = document.getElementsByName(e.name);

                    for (let i=0;i<radios.length;i++)
                    {
                        var it = (<HTMLInputElement>radios[i]);

                        if (it.value == UIi.elValueTrigger)
                        {
                            // we have the specific one that is supposed to trigger this action

                            // first lets get the thing we are gonna trigger

                            var thetriggeredelement = document.getElementById("div_" + UIi.elIDTarget);

                            if (it.checked && UIi.elInteractionType == "SHOW")
                            {
                                // we are gonna make sure something is visible

                                thetriggeredelement.style.display = "block";
                            }
                            else
                            {
                                if (it.checked && UIi.elInteractionType == "HIDE")
                                {
                                    // we are gonna make sure something is hidden
                                    thetriggeredelement.style.display = "none";
                                }
                                else
                                {
                                    if (!it.checked && UIi.elInteractionType == "HIDE")
                                    {
                                        // we are gonna make sure something is visible
                                        thetriggeredelement.style.display = "block";
                                    }
                                    else
                                    {
                                        // we are gonna make sure something is hidden
                                        thetriggeredelement.style.display = "none";

                                    }
                                }
                            }

                            
                        }

                    }
                }
            }
        }

        var radios = document.getElementsByName('3');
        

        //alert("Interacted Here current value of ");
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
    public elInitialVisibility: boolean;

    constructor(elid: string, eltype: string, ellabel: string, 
        ellabelbold: boolean, elcontent: string[],elrequired: boolean,
        elinteractions: UIInteraction[],elinitialvisibility: boolean)
    {
        this.elID = elid;
        this.elContent = elcontent;
        this.elLabel = ellabel;
        this.elRequired = elrequired;
        this.elType = eltype;
        this.elLabelBold = ellabelbold;
        this.elInteractions = elinteractions;
        this.elInitialVisibility = elinitialvisibility;

    }
}

class UIInteraction
{
    public elIDSource: string;
    public elIDTarget: string;
    public elInteractionType: string;
    public elValueTrigger: string;

    constructor(elidsource: string, elidtarget: string, elinteractiontype: string, elvaluetrigger: string)
    {
        this.elIDSource = elidsource;
        this.elIDTarget = elidtarget;
        this.elInteractionType = elinteractiontype;
        this.elValueTrigger = elvaluetrigger;
    }
}