var FormGen = /** @class */ (function () {
    function FormGen(DomElementID, UIElements) {
        // DomElementID will be the container for all the inserted form content
        this.theUIInteractions = [];
        // save the containerID for further use elsewhere
        this.theContainer = DomElementID;
        // save the handed in UIElements for further processing later
        this.theUIElements = UIElements;
        // get the actual html element where we will put all this stuff
        var el = document.getElementById(DomElementID);
        var innerhtml = '<form> <br> ';
        // iterate over all the defined elements and parse them and insert them into the dom
        for (var _i = 0, UIElements_1 = UIElements; _i < UIElements_1.length; _i++) {
            var THEEL = UIElements_1[_i];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += '<input type="text" name = "' + THEEL.elID + '" id="' + THEEL.elID + '" ><br> ';
                    innerhtml += '</div> ';
                    break;
                }
                case "DATE": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += '<input type="date" name = "' + THEEL.elID + '" id="' + THEEL.elID + '" ><br> ';
                    innerhtml += '</div> ';
                    break;
                }
                case "NARRATIVE": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += '<textarea rows="5" cols="40" name = "' + THEEL.elID + '" id="'
                        + THEEL.elID + '" ></textarea><br> ';
                    innerhtml += '</div> ';
                    break;
                }
                case "RADIO": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    var i = 0;
                    for (var _a = 0, _b = THEEL.elContent; _a < _b.length; _a++) {
                        var v = _b[_a];
                        i += 1;
                        if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                            innerhtml += '<input type="radio" ' +
                                'name = "' + THEEL.elID + '" id="' +
                                THEEL.elID + '_' + i.toString() + '" ' +
                                'value="' + v + '" >' + v + '<br> ';
                        }
                        else {
                            for (var _c = 0, _d = THEEL.elInteractions; _c < _d.length; _c++) {
                                var v_1 = _d[_c];
                                this.theUIInteractions.push(v_1);
                            }
                            innerhtml += '<input type="radio" ' +
                                'name = "' + THEEL.elID + '" id="' +
                                THEEL.elID + '_' + i.toString() + '" ' +
                                'value="' + v + '" onchange="DoFormGenInteraction(this)" >' + v + '<br> ';
                        }
                    }
                    innerhtml += '</div> ';
                    break;
                }
                case "DROPDOWN": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                        innerhtml += '<select name="' + THEEL.elID + '" id="' + THEEL.elID + '" >';
                    }
                    else {
                        for (var _e = 0, _f = THEEL.elInteractions; _e < _f.length; _e++) {
                            var v = _f[_e];
                            this.theUIInteractions.push(v);
                        }
                        innerhtml += '<select name="' + THEEL.elID +
                            '" id="' + THEEL.elID + '" onchange="DoFormGenInteraction(this)" >';
                    }
                    var i = 0;
                    for (var _g = 0, _h = THEEL.elContent; _g < _h.length; _g++) {
                        var v = _h[_g];
                        i += 1;
                        innerhtml += '<option ' +
                            'name = "' + THEEL.elID + '" id="' +
                            THEEL.elID + '_' + i.toString() + '" ' +
                            'value="' + v + '" >' + v + '</option> ';
                    }
                    innerhtml += '</select><br>';
                    innerhtml += '</div> ';
                    break;
                }
                case "CHECKBOX": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    var i = 0;
                    for (var _j = 0, _k = THEEL.elContent; _j < _k.length; _j++) {
                        var v = _k[_j];
                        i += 1;
                        if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                            innerhtml += '<input type="checkbox" ' +
                                'name = "' + THEEL.elID + '" id="' +
                                THEEL.elID + '_' + i.toString() + '" ' +
                                'value="' + v + '" >' + v + '<br> ';
                        }
                        else {
                            for (var _l = 0, _m = THEEL.elInteractions; _l < _m.length; _l++) {
                                var v_2 = _m[_l];
                                this.theUIInteractions.push(v_2);
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
        // now we want to iterate over everything again to set any scoring
        for (var _o = 0, UIElements_2 = UIElements; _o < UIElements_2.length; _o++) {
            var THEEL = UIElements_2[_o];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT": {
                    var el = (document.getElementById(THEEL.elID));
                    el.dataset.fgscore = THEEL.elScore[0].toString();
                    break;
                }
                case "DATE": {
                    var el = (document.getElementById(THEEL.elID));
                    el.dataset.fgscore = THEEL.elScore[0].toString();
                    break;
                }
                case "NARRATIVE": {
                    var el = (document.getElementById(THEEL.elID));
                    el.dataset.fgscore = THEEL.elScore[0].toString();
                    break;
                }
                case "RADIO": {
                    var i = 0;
                    for (var _p = 0, _q = THEEL.elScore; _p < _q.length; _p++) {
                        var v = _q[_p];
                        i += 1;
                        var el = (document.getElementById(THEEL.elID + '_' + i.toString()));
                        el.dataset.fgscore = v.toString();
                    }
                    break;
                }
                case "DROPDOWN": {
                    var i = 0;
                    for (var _r = 0, _s = THEEL.elScore; _r < _s.length; _r++) {
                        var v = _s[_r];
                        i += 1;
                        var ell = (document.getElementById(THEEL.elID + '_' + i.toString()));
                        ell.dataset.fgscore = v.toString();
                    }
                    break;
                }
                case "CHECKBOX": {
                    var i = 0;
                    for (var _t = 0, _u = THEEL.elScore; _t < _u.length; _t++) {
                        var v = _u[_t];
                        i += 1;
                        var el = (document.getElementById(THEEL.elID + '_' + i.toString()));
                        el.dataset.fgscore = v.toString();
                    }
                    break;
                }
            }
        }
    }
    /**
     * GetFormData
     */
    FormGen.prototype.GetFormData = function () {
        var UIValues = [];
        for (var _i = 0, _a = this.theUIElements; _i < _a.length; _i++) {
            var THEEL = _a[_i];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        var v = new UIValue(THEEL.elID, el.value);
                        UIValues.push(v);
                        break;
                    }
                case "DATE":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        var v = new UIValue(THEEL.elID, el.value);
                        UIValues.push(v);
                        break;
                    }
                case "NARRATIVE":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        var tv = el.value;
                        //tv.replace('\\','\\\\'); // Excape NewLines and other control characters
                        var v = new UIValue(THEEL.elID, tv);
                        UIValues.push(v);
                        break;
                    }
                case "RADIO":
                    {
                        var i = 0;
                        for (var _b = 0, _c = THEEL.elContent; _b < _c.length; _b++) {
                            var vv = _c[_b];
                            i += 1;
                            var theid = THEEL.elID + "_" + i.toString();
                            var el = (document.getElementById(theid));
                            if (el.checked) {
                                var v = new UIValue(THEEL.elID + "_" + i.toString(), "true");
                                UIValues.push(v);
                            }
                            else {
                                var v = new UIValue(THEEL.elID + "_" + i.toString(), "false");
                                UIValues.push(v);
                            }
                        }
                        break;
                    }
                case "DROPDOWN":
                    {
                        var eli = (document.getElementById(THEEL.elID));
                        var v = new UIValue(THEEL.elID, eli.options[eli.selectedIndex].text);
                        UIValues.push(v);
                        break;
                    }
                case "CHECKBOX":
                    {
                        var i = 0;
                        for (var _d = 0, _e = THEEL.elContent; _d < _e.length; _d++) {
                            var vv = _e[_d];
                            i += 1;
                            var theid = THEEL.elID + "_" + i.toString();
                            var el = (document.getElementById(theid));
                            if (el.checked) {
                                var v = new UIValue(THEEL.elID + "_" + i.toString(), "true");
                                UIValues.push(v);
                            }
                            else {
                                var v = new UIValue(THEEL.elID + "_" + i.toString(), "false");
                                UIValues.push(v);
                            }
                        }
                        break;
                    }
            }
        }
        return UIValues;
    };
    /**
     * GetFormDataAsString
     */
    FormGen.prototype.GetFormDataAsString = function () {
        return JSON.stringify(this.GetFormData());
    };
    /**
     * SetFormData
     *  UIValues: UIValue[]
     */
    FormGen.prototype.SetFormData = function (UIValues) {
        for (var _i = 0, _a = this.theUIElements; _i < _a.length; _i++) {
            var THEEL = _a[_i];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        for (var _b = 0, UIValues_1 = UIValues; _b < UIValues_1.length; _b++) {
                            var theval = UIValues_1[_b];
                            if (theval.uivID == THEEL.elID) {
                                el.value = theval.uivValue;
                                this.DoFormGenInteraction(el);
                                break;
                            }
                        }
                        break;
                    }
                case "DATE":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        for (var _c = 0, UIValues_2 = UIValues; _c < UIValues_2.length; _c++) {
                            var theval = UIValues_2[_c];
                            if (theval.uivID == THEEL.elID) {
                                el.value = theval.uivValue;
                                this.DoFormGenInteraction(el);
                                break;
                            }
                        }
                        break;
                    }
                case "NARRATIVE":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        for (var _d = 0, UIValues_3 = UIValues; _d < UIValues_3.length; _d++) {
                            var theval = UIValues_3[_d];
                            if (theval.uivID == THEEL.elID) {
                                el.value = theval.uivValue;
                                this.DoFormGenInteraction(el);
                                break;
                            }
                        }
                        break;
                    }
                case "RADIO":
                    {
                        var i = 0;
                        for (var _e = 0, _f = THEEL.elContent; _e < _f.length; _e++) {
                            var vv = _f[_e];
                            i += 1;
                            var el = (document.getElementById(THEEL.elID + "_" + i.toString()));
                            for (var _g = 0, UIValues_4 = UIValues; _g < UIValues_4.length; _g++) {
                                var theval = UIValues_4[_g];
                                if (theval.uivID == el.id) {
                                    if (theval.uivValue.toUpperCase() == "TRUE") {
                                        el.checked = true;
                                    }
                                    else {
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
                        var ell = (document.getElementById(THEEL.elID));
                        for (var _h = 0, UIValues_5 = UIValues; _h < UIValues_5.length; _h++) {
                            var theval = UIValues_5[_h];
                            if (theval.uivID == THEEL.elID) {
                                var i = 0;
                                for (var _j = 0, _k = THEEL.elContent; _j < _k.length; _j++) {
                                    var vv = _k[_j];
                                    if (theval.uivValue == vv) {
                                        ell.selectedIndex = i;
                                        break;
                                    }
                                    i += 1;
                                }
                                this.DoFormGenInteraction(ell);
                                break;
                            }
                        }
                        break;
                    }
                case "CHECKBOX":
                    {
                        var i = 0;
                        for (var _l = 0, _m = THEEL.elContent; _l < _m.length; _l++) {
                            var vv = _m[_l];
                            i += 1;
                            var el = (document.getElementById(THEEL.elID + "_" + i.toString()));
                            for (var _o = 0, UIValues_6 = UIValues; _o < UIValues_6.length; _o++) {
                                var theval = UIValues_6[_o];
                                if (theval.uivID == el.id) {
                                    if (theval.uivValue.toUpperCase() == "TRUE") {
                                        el.checked = true;
                                    }
                                    else {
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
    };
    /**
     * SetFormDataFromString
     *  theString: string
     */
    FormGen.prototype.SetFormDataFromString = function (theString) {
        var v = (JSON.parse(theString));
        this.SetFormData(v);
    };
    /**
     * GetFormScore
     */
    FormGen.prototype.GetFormScore = function () {
        var score = 0;
        for (var _i = 0, _a = this.theUIElements; _i < _a.length; _i++) {
            var THEEL = _a[_i];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        if (el.value != "") {
                            var v = Number(el.dataset.fgscore);
                            score += v;
                        }
                        break;
                    }
                case "DATE":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        if (el.value != "") {
                            var v = Number(el.dataset.fgscore);
                            score += v;
                        }
                        break;
                    }
                case "NARRATIVE":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        if (el.value != "") {
                            var v = Number(el.dataset.fgscore);
                            score += v;
                        }
                        break;
                    }
                case "RADIO":
                    {
                        var i = 0;
                        for (var _b = 0, _c = THEEL.elContent; _b < _c.length; _b++) {
                            var vv = _c[_b];
                            i += 1;
                            var theid = THEEL.elID + "_" + i.toString();
                            var el = (document.getElementById(theid));
                            if (el.checked) {
                                var v = Number(el.dataset.fgscore);
                                score += v;
                            }
                        }
                        break;
                    }
                case "DROPDOWN":
                    {
                        var eli = (document.getElementById(THEEL.elID));
                        var seltext = eli.options[eli.selectedIndex].text;
                        var i = 0;
                        for (var _d = 0, _e = THEEL.elContent; _d < _e.length; _d++) {
                            var vv = _e[_d];
                            i += 1;
                            if (vv == seltext) {
                                var eli1 = (document.getElementById(THEEL.elID + '_' + i.toString()));
                                var v = Number(eli1.dataset.fgscore);
                                score += v;
                                break;
                            }
                        }
                        break;
                    }
                case "CHECKBOX":
                    {
                        var i = 0;
                        for (var _f = 0, _g = THEEL.elContent; _f < _g.length; _f++) {
                            var vv = _g[_f];
                            i += 1;
                            var theid = THEEL.elID + "_" + i.toString();
                            var el = (document.getElementById(theid));
                            if (el.checked) {
                                var v = Number(el.dataset.fgscore);
                                score += v;
                            }
                        }
                        break;
                    }
            }
        }
        return score;
    };
    /**
     * DoFormGenInteraction
     */
    FormGen.prototype.DoFormGenInteraction = function (e) {
        for (var _i = 0, _a = this.theUIInteractions; _i < _a.length; _i++) {
            var UIi = _a[_i];
            // parse each noted interaction to see if we need to act on it
            if (e.name == UIi.elIDSource) {
                // we have a rule that is triggered by this potentially
                if (e.type.toUpperCase() == "RADIO" || e.type.toUpperCase() == "CHECKBOX") {
                    // there may be several so lets get them all to look at their values
                    var radios = document.getElementsByName(e.name);
                    for (var i = 0; i < radios.length; i++) {
                        var it = radios[i];
                        if (it.value == UIi.elValueTrigger) {
                            // we have the specific one that is supposed to trigger this action
                            // first lets get the thing we are gonna trigger
                            var thetriggeredelement = document.getElementById("div_" + UIi.elIDTarget);
                            if (it.checked && UIi.elInteractionType == "SHOW") {
                                // we are gonna make sure something is visible
                                thetriggeredelement.style.display = "block";
                            }
                            else {
                                if (it.checked && UIi.elInteractionType == "HIDE") {
                                    // we are gonna make sure something is hidden
                                    thetriggeredelement.style.display = "none";
                                }
                                else {
                                    if (!it.checked && UIi.elInteractionType == "HIDE") {
                                        // we are gonna make sure something is visible
                                        thetriggeredelement.style.display = "block";
                                    }
                                    else {
                                        // we are gonna make sure something is hidden
                                        thetriggeredelement.style.display = "none";
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    if (e.type.toUpperCase().startsWith("SELECT")) {
                        var v = e.value;
                        var thetriggeredelement = document.getElementById("div_" + UIi.elIDTarget);
                        if (v == UIi.elValueTrigger) {
                            if (UIi.elInteractionType == "SHOW") {
                                thetriggeredelement.style.display = "block";
                            }
                            else {
                                if (UIi.elInteractionType == "HIDE") {
                                    thetriggeredelement.style.display = "none";
                                }
                            }
                        }
                        else {
                            if (UIi.elInteractionType == "SHOW") {
                                thetriggeredelement.style.display = "none";
                            }
                            else {
                                if (UIi.elInteractionType == "HIDE") {
                                    thetriggeredelement.style.display = "block";
                                }
                            }
                        }
                    }
                }
            }
        }
        //alert("Interacted Here current value of ");
    };
    return FormGen;
}());
var UIElement = /** @class */ (function () {
    function UIElement(elid, eltype, ellabel, ellabelbold, elcontent, elrequired, elinteractions, elinitialvisibility, elstyle, elscore) {
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
    return UIElement;
}());
var UIInteraction = /** @class */ (function () {
    function UIInteraction(elidsource, elidtarget, elinteractiontype, elvaluetrigger) {
        this.elIDSource = elidsource;
        this.elIDTarget = elidtarget;
        this.elInteractionType = elinteractiontype;
        this.elValueTrigger = elvaluetrigger;
    }
    return UIInteraction;
}());
var UIValue = /** @class */ (function () {
    function UIValue(id, value) {
        this.uivID = id;
        this.uivValue = value;
    }
    return UIValue;
}());
//# sourceMappingURL=FormGen.js.map