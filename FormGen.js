var FormGen = /** @class */ (function () {
    function FormGen(DomElementID, UIElements) {
        // DomElementID will be the container for all the inserted form content
        var el = document.getElementById(DomElementID);
        var innerhtml = '<form> <br> ';
        for (var _i = 0, UIElements_1 = UIElements; _i < UIElements_1.length; _i++) {
            var THEEL = UIElements_1[_i];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT": {
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';
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
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';
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
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';
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
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';
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
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += '<select>';
                    var i = 0;
                    for (var _c = 0, _d = THEEL.elContent; _c < _d.length; _c++) {
                        var v = _d[_c];
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
                    innerhtml += '<div id="' + 'div_' + THEEL.elID + '">';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    var i = 0;
                    for (var _e = 0, _f = THEEL.elContent; _e < _f.length; _e++) {
                        var v = _f[_e];
                        i += 1;
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
    FormGen.prototype.DoFormGenInteraction = function (e) {
        var radios = document.getElementsByName('3');
        alert("Interacted Here current value of ");
    };
    return FormGen;
}());
var UIElement = /** @class */ (function () {
    function UIElement(elid, eltype, ellabel, ellabelbold, elcontent, elrequired, elinteractions) {
        this.elID = elid;
        this.elContent = elcontent;
        this.elLabel = ellabel;
        this.elRequired = elrequired;
        this.elType = eltype;
        this.elLabelBold = ellabelbold;
        this.elInteractions = elinteractions;
    }
    return UIElement;
}());
var UIInteraction = /** @class */ (function () {
    function UIInteraction(elid, elinteractiontype, elvaluetrigger) {
        this.elID = elid;
        this.elInteractionType = elinteractiontype;
        this.elValueTrigger = elvaluetrigger;
    }
    return UIInteraction;
}());
//# sourceMappingURL=FormGen.js.map