class FormGen 
{

    private theUIInteractions: UIInteraction[] = [];
    private theContainer: string;
    private theUIElements: UIElement[];

    constructor( DomElementID: string, UIElements: UIElement[])
    {
        // DomElementID will be the container for all the inserted form content

        // save the containerID for further use elsewhere
        this.theContainer = DomElementID;

        // save the handed in UIElements for further processing later
        this.theUIElements = UIElements;

        // get the actual html element where we will put all this stuff
        var el = document.getElementById(DomElementID);
        var innerhtml = '<form> <br> ';

        // iterate over all the defined elements and parse them and insert them into the dom
        for (let THEEL of UIElements)
        {
            switch (THEEL.elType.toUpperCase())
            {
                case "TEXT": {

                    var STY = "";

                    if (THEEL.elStyle != "")
                    {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';

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

                    var STY = "";

                    if (THEEL.elStyle != "")
                    {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';

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

                    var STY = "";

                    if (THEEL.elStyle != "")
                    {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';

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

                    var STY = "";

                    if (THEEL.elStyle != "")
                    {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';

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

                    var STY = "";

                    if (THEEL.elStyle != "")
                    {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';

                    if (THEEL.elLabel.trim()!= "")
                    {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }

                    if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length )
                    {
                        innerhtml += '<select name="' + THEEL.elID + '" id="' + THEEL.elID + '" >';
                    }
                    else
                    {
                        for (let v of THEEL.elInteractions)
                        {
                            this.theUIInteractions.push(v);
                        }

                        innerhtml += '<select name="' + THEEL.elID + 
                            '" id="' + THEEL.elID + '" onchange="DoFormGenInteraction(this)" >';
                    }

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

                    var STY = "";

                    if (THEEL.elStyle != "")
                    {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }

                    var VIS = "";

                    if (!THEEL.elInitialVisibility)
                    {
                        VIS = "hidden";
                    }

                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';

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

        // Ok now all of the elements should be in the DOM
        // now we want to iterate over everything again to set any scoring and any required bits
        for (let THEEL of UIElements)
        {
            switch (THEEL.elType.toUpperCase())
            {
                case "TEXT": {

                    var el = <HTMLElement>(document.getElementById(THEEL.elID));

                    el.dataset.fgscore = THEEL.elScore[0].toString();

                    if (THEEL.elRequired)
                    {
                        el.dataset.fgrequired = "YES";
                    }
                    else
                    {
                        el.dataset.fgrequired = "NO";
                    }

                    break;
                }
                case "DATE": {
                    var el = <HTMLElement>(document.getElementById(THEEL.elID));

                    el.dataset.fgscore = THEEL.elScore[0].toString();

                    if (THEEL.elRequired)
                    {
                        el.dataset.fgrequired = "YES";
                    }
                    else
                    {
                        el.dataset.fgrequired = "NO";
                    }

                    break;

                }
                case "NARRATIVE": {
                    var el = <HTMLElement>(document.getElementById(THEEL.elID));

                    el.dataset.fgscore = THEEL.elScore[0].toString();

                    if (THEEL.elRequired)
                    {
                        el.dataset.fgrequired = "YES";
                    }
                    else
                    {
                        el.dataset.fgrequired = "NO";
                    }

                    break;
                }
                case "RADIO": {

                    let i=0;
                    for (let v of THEEL.elScore)
                    {
                        i+= 1;

                        var el = <HTMLElement>(document.getElementById(THEEL.elID + '_' + i.toString())); 
                        
                        el.dataset.fgscore = v.toString();

                        if (THEEL.elRequired)
                        {
                            el.dataset.fgrequired = "YES";
                        }
                        else
                        {
                            el.dataset.fgrequired = "NO";
                        }
                    }

                    break;
                }
                case "DROPDOWN": {

                    let i=0;
                    for (let v of THEEL.elScore)
                    {
                        i+= 1;

                        var ell = <HTMLOptionElement>(document.getElementById(THEEL.elID + '_' + i.toString())); 
                        
                        ell.dataset.fgscore = v.toString();

                        if (THEEL.elRequired)
                        {
                            ell.dataset.fgrequired = "YES";
                        }
                        else
                        {
                            ell.dataset.fgrequired = "NO";
                        }
                    }

                    break;
                }
                case "CHECKBOX": {

                    let i=0;
                    for (let v of THEEL.elScore)
                    {
                        i+= 1;

                        var el = <HTMLElement>(document.getElementById(THEEL.elID + '_' + i.toString())); 
                        
                        el.dataset.fgscore = v.toString();

                        if (THEEL.elRequired)
                        {
                            el.dataset.fgrequired = "YES";
                        }
                        else
                        {
                            el.dataset.fgrequired = "NO";
                        }
                    }

                    break;
                }

            }

        }

        
    } 

    /**
     * GetFormData
     */
    public GetFormData() {
        var UIValues: UIValue[] = [];

        for (let THEEL of this.theUIElements)
        {
            switch (THEEL.elType.toUpperCase())
            {
                case "TEXT":
                {
                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    var v = new UIValue(THEEL.elID,el.value);

                    UIValues.push(v);

                    break;
                }
                case "DATE":
                {
                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    var v = new UIValue(THEEL.elID,el.value);

                    UIValues.push(v);

                    break;
                }
                case "NARRATIVE":
                {
                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    var tv = el.value;

                    //tv.replace('\\','\\\\'); // Excape NewLines and other control characters

                    var v = new UIValue(THEEL.elID,tv);

                    UIValues.push(v);

                    break;
                }
                case "RADIO":
                {
                    let i=0;

                    for (let vv of THEEL.elContent)
                    {
                        i+=1;

                        var theid = THEEL.elID + "_" + i.toString();

                        var el = <HTMLInputElement>(document.getElementById(theid));

                        if (el.checked)
                        {
                            var v = new UIValue(THEEL.elID + "_" + i.toString(),"true");

                            UIValues.push(v);
                        }
                        else
                        {
                            var v = new UIValue(THEEL.elID + "_" + i.toString(),"false");

                            UIValues.push(v);
                        }
                    }

                    break;
                }
                case "DROPDOWN":
                {
                    var eli = <HTMLSelectElement>(document.getElementById(THEEL.elID));

                    var v = new UIValue(THEEL.elID,eli.options[eli.selectedIndex].text);

                    UIValues.push(v);

                    break;
                }
                case "CHECKBOX":
                {
                    let i=0;

                    for (let vv of THEEL.elContent)
                    {
                        i+=1;

                        var theid = THEEL.elID + "_" + i.toString();

                        var el = <HTMLInputElement>(document.getElementById(theid));

                        if (el.checked)
                        {
                            var v = new UIValue(THEEL.elID + "_" + i.toString(),"true");

                            UIValues.push(v);
                        }
                        else
                        {
                            var v = new UIValue(THEEL.elID + "_" + i.toString(),"false");

                            UIValues.push(v);
                        }
                    }

                    break;
                }
            }
        }
        return UIValues;
    }

    /**
     * GetFormDataAsString
     */
    public GetFormDataAsString() {
        return JSON.stringify(this.GetFormData());
    }

    /**
     * SetFormData
     *  UIValues: UIValue[]
     */
    public SetFormData(UIValues: UIValue[]) {
        
        for (let THEEL of this.theUIElements)
        {
            switch (THEEL.elType.toUpperCase())
            {
                case "TEXT":
                {
                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    for (let theval of UIValues)
                    {
                        if (theval.uivID == THEEL.elID)
                        {
                            el.value = theval.uivValue;
                            this.DoFormGenInteraction(el);
                            break;
                        }
                    }

                    break;
                }
                case "DATE":
                {
                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    for (let theval of UIValues)
                    {
                        if (theval.uivID == THEEL.elID)
                        {
                            el.value = theval.uivValue;
                            this.DoFormGenInteraction(el);
                            break;
                        }
                    }

                    break;
                }
                case "NARRATIVE":
                {
                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    for (let theval of UIValues)
                    {
                        if (theval.uivID == THEEL.elID)
                        {
                            el.value = theval.uivValue;
                            this.DoFormGenInteraction(el);
                            break;
                        }
                    }

                    break;
                }
                case "RADIO":
                {
                    let i=0;

                    for (let vv of THEEL.elContent)
                    {
                        i+=1;

                        var el = <HTMLInputElement>(document.getElementById(THEEL.elID + "_" + i.toString()));

                        for (let theval of UIValues)
                        {
                            if (theval.uivID == el.id)
                            {
                                if (theval.uivValue.toUpperCase() == "TRUE")
                                {
                                    el.checked = true;
                                }
                                else
                                {
                                    el.checked = false;
                                }
                                this.DoFormGenInteraction(el);

                                break;
                            }
                        }
                    }

                    break;
                }
                case "DROPDOWN":
                {
                    var ell = <HTMLSelectElement>(document.getElementById(THEEL.elID));
                    
                    for (let theval of UIValues)
                    {
                        if (theval.uivID == THEEL.elID)
                        {

                            let i=0;

                            for (let vv of THEEL.elContent)
                            {
                                if (theval.uivValue == vv)
                                {
                                    ell.selectedIndex = i;
                                    break;
                                }
                                i+=1;
                            }
                            this.DoFormGenInteraction(ell);

                            break;
                        }
                    }
                    break;
                }
                case "CHECKBOX":
                {
                    let i=0;

                    for (let vv of THEEL.elContent)
                    {
                        i+=1;

                        var el = <HTMLInputElement>(document.getElementById(THEEL.elID + "_" + i.toString()));

                        for (let theval of UIValues)
                        {
                            if (theval.uivID == el.id)
                            {
                                if (theval.uivValue.toUpperCase() == "TRUE")
                                {
                                    el.checked = true;
                                }
                                else
                                {
                                    el.checked = false;
                                }
                                this.DoFormGenInteraction(el);

                                break;
                            }
                        }
                    }

                    break;
                }
            }
        }
    }

    /**
     * SetFormDataFromString
     *  theString: string
     */
    public SetFormDataFromString(theString: string) {

        var v = <UIValue[]>(JSON.parse(theString));
        
        this.SetFormData(v);
    }

    /**
     * GetFormScore
     */
    public GetFormScore() {
        
        var score: number = 0;

        for (let THEEL of this.theUIElements)
        {
            switch (THEEL.elType.toUpperCase())
            {
                case "TEXT":
                {
                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    if (el.value != "")
                    {
                        var v = Number(el.dataset.fgscore);

                        score += v;
                    }

                    break;
                }
                case "DATE":
                {
                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    if (el.value != "")
                    {
                        var v = Number(el.dataset.fgscore);

                        score += v;
                    }
                    
                    break;
                }
                case "NARRATIVE":
                {
                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    if (el.value != "")
                    {
                        var v = Number(el.dataset.fgscore);

                        score += v;
                    }
                    
                    break;
                }
                case "RADIO":
                {
                    let i=0;

                    for (let vv of THEEL.elContent)
                    {
                        i+=1;

                        var theid = THEEL.elID + "_" + i.toString();

                        var el = <HTMLInputElement>(document.getElementById(theid));

                        if (el.checked)
                        {
                            var v = Number(el.dataset.fgscore);

                            score += v;
                        }
                        
                    }

                    break;
                }
                case "DROPDOWN":
                {
                    var eli = <HTMLSelectElement>(document.getElementById(THEEL.elID));

                    var seltext = eli.options[eli.selectedIndex].text;

                    let i =0;

                    for (let vv of THEEL.elContent )
                    {
                        i += 1;

                        if (vv == seltext)
                        {
                            var eli1 = <HTMLOptionElement>(document.getElementById(THEEL.elID + '_' + i.toString()));
                            
                            var v = Number(eli1.dataset.fgscore);

                            score += v;

                            break;

                        }
                    }
                    
                    break;
                }
                case "CHECKBOX":
                {
                    let i=0;

                    for (let vv of THEEL.elContent)
                    {
                        i+=1;

                        var theid = THEEL.elID + "_" + i.toString();

                        var el = <HTMLInputElement>(document.getElementById(theid));

                        if (el.checked)
                        {
                            var v = Number(el.dataset.fgscore);

                            score += v;
                        }
                        
                    }

                    break;
                }
            }
        }

        return score;
    }

    /**
     * IsFormValid
     */
    public IsFormValid() {

        var isvalid: boolean = true;
        
        for (let THEEL of this.theUIElements)
        {
            if(THEEL.elRequired)
            {
            switch (THEEL.elType.toUpperCase())
            {
                case "TEXT":
                {
                    var del = <HTMLElement>(document.getElementById("div_" + THEEL.elID));

                    if (!del.hidden) {

                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    if (el.value + "" == "")
                    {
                       isvalid = false;
                    }
                    }

                    break;
                }
                case "DATE":
                {
                    var del = <HTMLElement>(document.getElementById("div_" + THEEL.elID));

                    if (!del.hidden) {

                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    if (el.value + "" == "")
                    {
                       isvalid = false;
                    }
                    }
                    
                    break;
                }
                case "NARRATIVE":
                {
                    var del = <HTMLElement>(document.getElementById("div_" + THEEL.elID));

                    if (!del.hidden) {

                    var el = <HTMLInputElement>(document.getElementById(THEEL.elID));

                    if (el.value + "" == "")
                    {
                       isvalid = false;
                    }
                    }

                    break;
                }
                case "RADIO":
                {
                    var del = <HTMLElement>(document.getElementById("div_" + THEEL.elID));

                    if (!del.hidden) {

                    let i=0;

                    let newvalid = false;

                    for (let vv of THEEL.elContent)
                    {
                        i+=1;

                        var theid = THEEL.elID + "_" + i.toString();

                        var el = <HTMLInputElement>(document.getElementById(theid));

                        if (el.checked)
                        {
                            newvalid = true;
                        }
                        
                    }

                    if (isvalid && !newvalid)
                        isvalid = newvalid;
                    }
                    break;
                }
                case "DROPDOWN":
                {
                    var del = <HTMLElement>(document.getElementById("div_" + THEEL.elID));

                    if (!del.hidden) {

                    var eli = <HTMLSelectElement>(document.getElementById(THEEL.elID));

                    var seltext = eli.options[eli.selectedIndex].text;

                    if (seltext+"" == "")
                    {
                        isvalid = false;
                    }
                    }
                    
                    break;
                }
                case "CHECKBOX":
                {
                    var del = <HTMLElement>(document.getElementById("div_" + THEEL.elID));

                    if (!del.hidden) {

                    let i=0;

                    let newvalid = false;

                    for (let vv of THEEL.elContent)
                    {
                        i+=1;

                        var theid = THEEL.elID + "_" + i.toString();

                        var el = <HTMLInputElement>(document.getElementById(theid));

                        if (el.checked)
                        {
                            newvalid = true;
                        }
                        
                    }

                    if (isvalid && !newvalid)
                        isvalid = newvalid;
                    }
                    break;
                }
            }
            }
        }


        return isvalid;
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
                if (e.type.toUpperCase() == "RADIO" || e.type.toUpperCase() == "CHECKBOX")
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
                else
                {

                    if (e.type.toUpperCase().startsWith("SELECT"))
                    {
                        var v = e.value;

                        var thetriggeredelement = document.getElementById("div_" + UIi.elIDTarget);

                        if (v == UIi.elValueTrigger )
                        {
                            
                            if (UIi.elInteractionType=="SHOW")
                            {
                                thetriggeredelement.style.display = "block";
                            }
                            else
                            {
                                if (UIi.elInteractionType=="HIDE")
                                {
                                    thetriggeredelement.style.display = "none";
                                }
                            }

                        }
                        else
                        {
                            if (UIi.elInteractionType=="SHOW")
                            {
                                thetriggeredelement.style.display = "none";
                            }
                            else
                            {
                                if (UIi.elInteractionType=="HIDE")
                                {
                                    thetriggeredelement.style.display = "block";
                                }
                            }

                        }
                    }
                }
            }
        }
        

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
    public elStyle: string;
    public elScore: number[];

    constructor(elid: string, eltype: string, ellabel: string, 
        ellabelbold: boolean, elcontent: string[],elrequired: boolean,
        elinteractions: UIInteraction[],elinitialvisibility: boolean, elstyle: string,
        elscore: number[])
    {
        this.elID = elid;
        this.elContent = elcontent;
        this.elLabel = ellabel;
        this.elRequired = elrequired;
        this.elType = eltype;
        this.elLabelBold = ellabelbold;
        this.elInteractions = elinteractions;
        this.elInitialVisibility = elinitialvisibility;
        this.elStyle = elstyle;
        this.elScore = elscore;

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

class UIValue
{
    public uivID: string;
    public uivValue: string;

    constructor(id: string, value: string)
    {
        this.uivID = id;
        this.uivValue = value;
    }
}