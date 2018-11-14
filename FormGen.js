var FormGen = /** @class */ (function () {
    function FormGen(DomElementID, UIElements) {
        // DomElementID will be the container for all the inserted form content
        this.theUIInteractions = [];
        var el = document.getElementById(DomElementID);
        var innerhtml = '<form> <br> ';
        for (var _i = 0, UIElements_1 = UIElements; _i < UIElements_1.length; _i++) {
            var THEEL = UIElements_1[_i];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT": {
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';
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
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';
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
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';
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
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';
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
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += '<select>';
                    var i = 0;
                    for (var _e = 0, _f = THEEL.elContent; _e < _f.length; _e++) {
                        var v = _f[_e];
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
                    var VIS = "";
                    if (!THEEL.elInitialVisibility) {
                        VIS = "hidden";
                    }
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + ' >';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    var i = 0;
                    for (var _g = 0, _h = THEEL.elContent; _g < _h.length; _g++) {
                        var v = _h[_g];
                        i += 1;
                        if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                            innerhtml += '<input type="checkbox" ' +
                                'name = "' + THEEL.elID + '" id="' +
                                THEEL.elID + '_' + i.toString() + '" ' +
                                'value="' + v + '" >' + v + '<br> ';
                        }
                        else {
                            for (var _j = 0, _k = THEEL.elInteractions; _j < _k.length; _j++) {
                                var v_2 = _k[_j];
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
    }
    /**
     * DoFormGenInteraction
     */
    FormGen.prototype.DoFormGenInteraction = function (e) {
        for (var _i = 0, _a = this.theUIInteractions; _i < _a.length; _i++) {
            var UIi = _a[_i];
            // parse each noted interaction to see if we need to act on it
            if (e.name == UIi.elIDSource) {
                // we have a rule that is triggered by this potentially
                if (e.type == "radio" || e.type == "checkbox") {
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
            }
        }
        var radios = document.getElementsByName('3');
        //alert("Interacted Here current value of ");
    };
    return FormGen;
}());
var UIElement = /** @class */ (function () {
    function UIElement(elid, eltype, ellabel, ellabelbold, elcontent, elrequired, elinteractions, elinitialvisibility) {
        this.elID = elid;
        this.elContent = elcontent;
        this.elLabel = ellabel;
        this.elRequired = elrequired;
        this.elType = eltype;
        this.elLabelBold = ellabelbold;
        this.elInteractions = elinteractions;
        this.elInitialVisibility = elinitialvisibility;
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
//# sourceMappingURL=FormGen.js.map