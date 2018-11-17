# FormGen
Typescript Library to Use Data structures handed to it to interpret and create UI CRUD screens.

Takes a simple ARRAY of elements in the form of UIElement and the name of the container object in which to place the results.

##UIElement definition

```typescript
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
```

###Some Details:
- **elid** is a simple string that will be used to identify the element on the DOM. It can be any alpha numeric be unique for each elemet that is being placed into the form.

- **eltype** is a string representation of the kind of ui element desired. Valid types are
    - TEXT
    - NARRATIVE
    - DATE
    - RADIO
    - DROPDOWN
    - CHECKBOX

- **ellabel** is the string label to be applied to the element being placed on the page

- **ellabelbold** boolean indicating, yup you guessed it, draw the label bold or not

- **elcontent**  is an array of strings that get turned into a list of appropriate sub elements for things that have subelements. IE RadioButtons, DropDowns, and CheckBoxes.

- **elrequired** is a boolean used to trigger the required or not check for form validation methods

- **elinteractions** is an array of UIInteractions the denote what kind of interactions will be enforced by the forgen class. Primaryly used to show and hide other elements based on selected values. See UIInteractions definition below.

- **elinitialvisibility** is a boolean used to indicate if the element will be inserted into the DOM visible or hidden

- **elstyle** is a string that will be inserted as a style tag on the wrapping DIV tak for each element placed in the DOM

- **elscore** is an array of numbers used to associate a weight numerically with each element as its inserted into the page. Used by the GetFormScore method to return a  value if an associated element is populated or selected. So if you have a radiobutton list or checkboxlist or dropdown list, you will have a weight for subelement. Text, Dates and Narrative will have a singular value in this array.

#UIInteraction definition

```typescript
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
```
###Some Details:
- **elidsource** this represents the identifier for the element that will trigger the interaction. This is usually the elid of the element this is contained within but does not necessarily need to be. IE you can include a UIInteraction in an element that is not part of the UIInteraction chain.

- **elidtarget** this represents the identifier for the element that interacted with.

- **elinteractiontype** this represented the kind of interaction that will be performed valid types are
    - SHOW  will show based on trigger
    - HIDE  will hide based on trigger
    - REQUIRED will trigger a required status on target based on trigger
    - NOTREQUIRED will clear a required status on target based on trigger

- **elvaluetrigger** This represented the associated value that will do the triggering. For a selection list like RADIO BUTTONS, CHECKBOXES, and DROPDOWN LISTS this represented the specific item in those lists that will be doing the triggering. TEXT and NARRATIVES are simple BLANK or NOT triggers, DATES are anything entered or blank triggers

###SAMPLE HTML

```html
<!DOCTYPE html>
<html>

<head>
    <title>FormGen Test</title>
</head>
<body>
        
    <div id="FormGenBody" style="height:70vh; width: 98vw" >
        
    </div>
    <div id="testbuttons">
        <input type="button" onclick="alert(FG.GetFormDataAsString());" 
                id="btnValRetrieve" value="Retrieve the values">

        <input type="button" 
                onclick="FG.SetFormData([ new UIValue('3_3','true'),
                                          new UIValue('5','2018-11-01'),
                                          new UIValue('6_1','true'),
                                          new UIValue('6_3','true'),
                                          new UIValue('7','This is a test')
                                        ]);" 
                                
                id="btnValSet" value="Set Some Values">


        <input type="button" 
                onclick="PopulateFromString();" 
                id="btnValSet1" value="Set Some Values from a String">

        <input type="button" 
                onclick="alert(' The Score is: ' + FG.GetFormScore());" 
                id="btnScoreGet" value="Fetch Form Score">

    </div>

    <script src="FormGen.js"></script>
    <script type="text/javascript">
        var ELEs = new Array();

        ELEs.push(
            new UIElement("1","text","The Label for this piece of input",true,[],true,[],true,"",[0]));
        ELEs.push(
            new UIElement("2","narrative","The Label for this narrative",true,[],true,[],true,"",[1]));
        ELEs.push(
            new UIElement("3","radio","Gender",true,["Male","Female","Unknown"],true,
            [new UIInteraction("3","5","SHOW","Unknown")],true,"",[2,3,4]));
        ELEs.push(
            new UIElement("4","dropdown","Select from the dropdown",true,["unset","1","2","3","4"], true,[],true,"",[0,5,6,7,8]));
        ELEs.push(
            new UIElement("5","date","The Label Date",true,[],true,[],false,"",[9]));
        ELEs.push(
            new UIElement("6","checkbox","A bunch of check boxes",true,
            ["Checkbox option 1","Checkbox option 2","Checkbox option 3","Checkbox option 4","Checkbox option 5"],
            true,[new UIInteraction("6","7","SHOW","Checkbox option 3")],true,"",[10,11,12,13,14]));
        ELEs.push(
            new UIElement("7","narrative","Another Narrative is here",true,[],true,[],false,"",[15]));
        
        var FG = new FormGen('FormGenBody',ELEs);

        function DoFormGenInteraction(e)
        {
            FG.DoFormGenInteraction(e);
        }

        function PopulateFromString()
        {
            var x = '[{"uivID":"1","uivValue":"test data"},{"uivID":"2","uivValue":"sadfsadfsadf"},'+
                 '{"uivID":"3_1","uivValue":"false"},{"uivID":"3_2","uivValue":"false"},' +
                 '{"uivID":"3_3","uivValue":"true"},{"uivID":"4","uivValue":"3"},'+
                 '{"uivID":"5","uivValue":"2018-11-30"},{"uivID":"6_1","uivValue":"true"},'+
                 '{"uivID":"6_2","uivValue":"true"},{"uivID":"6_3","uivValue":"true"},'+
                 '{"uivID":"6_4","uivValue":"false"},{"uivID":"6_5","uivValue":"true"},'+
                 '{"uivID":"7","uivValue":"asdfsadfsadf\\nMultiLine\\nMultiLine"}]';

            FG.SetFormDataFromString(x);

        }

    
    </script>

</body>
</html>

```