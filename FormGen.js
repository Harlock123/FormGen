var FormGen = /** @class */ (function () {
    function FormGen(DomElementID, UIElements) {
        // DomElementID will be the container for all the inserted form content
        this.theUIInteractions = [];
        this.theVersionString = "";
        // save the containerID for further use elsewhere
        this.theContainer = DomElementID;
        // save the handed in UIElements for further processing later
        this.theUIElements = UIElements;
        // get the actual html element where we will put all this stuff
        var el = document.getElementById(DomElementID);
        var innerhtml = '<form> <table style="width: 100%;"> ';
        // iterate over all the defined elements and parse them and insert them into the dom
        for (var _i = 0, UIElements_1 = UIElements; _i < UIElements_1.length; _i++) {
            var THEEL = UIElements_1[_i];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = ""; //'style="display:block"';
                    if (!THEEL.elInitialVisibility) {
                        VIS = 'style="display:none"';
                    }
                    //innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<tr id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<td>';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += "</td>";
                    innerhtml += "<td>";
                    if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                        innerhtml += '<input type="text" name = "' + THEEL.elID +
                            '" id="' + THEEL.elID + '" ><br> ';
                    }
                    else {
                        for (var _a = 0, _b = THEEL.elInteractions; _a < _b.length; _a++) {
                            var v = _b[_a];
                            this.theUIInteractions.push(v);
                        }
                        innerhtml += '<input type="text" name = "' + THEEL.elID +
                            '" id="' + THEEL.elID + '" onchange="DoFormGenInteraction(this)" ><br> ';
                    }
                    innerhtml += '</td></tr>';
                    //innerhtml += '</div> ';
                    break;
                }
                case "DATE": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = ""; //'style="display:block"';
                    if (!THEEL.elInitialVisibility) {
                        VIS = 'style="display:none"';
                    }
                    //innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<tr id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<td>';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += "</td>";
                    innerhtml += "<td>";
                    if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                        innerhtml += '<input type="date" name = "' + THEEL.elID +
                            '" id="' + THEEL.elID + '" ><br> ';
                    }
                    else {
                        for (var _c = 0, _d = THEEL.elInteractions; _c < _d.length; _c++) {
                            var v = _d[_c];
                            this.theUIInteractions.push(v);
                        }
                        innerhtml += '<input type="date" name = "' + THEEL.elID +
                            '" id="' + THEEL.elID + '" onchange="DoFormGenInteraction(this)" ><br> ';
                    }
                    innerhtml += '</td></tr>';
                    //innerhtml += '</div> ';
                    break;
                }
                case "NARRATIVE": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = ""; //'style="display:block"';
                    if (!THEEL.elInitialVisibility) {
                        VIS = 'style="display:none"';
                    }
                    //innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<tr id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<td>';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += "</td>";
                    innerhtml += "<td>";
                    if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                        innerhtml += '<textarea rows="5" cols="40" name = "' + THEEL.elID + '" id="'
                            + THEEL.elID + '" ></textarea><br> ';
                    }
                    else {
                        for (var _e = 0, _f = THEEL.elInteractions; _e < _f.length; _e++) {
                            var v = _f[_e];
                            this.theUIInteractions.push(v);
                        }
                        innerhtml += '<textarea rows="5" cols="40" name = "' + THEEL.elID + '" id="'
                            + THEEL.elID + '" onchange="DoFormGenInteraction(this)" ></textarea><br> ';
                    }
                    innerhtml += '</td></tr>';
                    //innerhtml += '</div> ';
                    break;
                }
                case "RADIO": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = ""; //'style="display:block"';
                    if (!THEEL.elInitialVisibility) {
                        VIS = 'style="display:none"';
                    }
                    //innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<tr id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<td>';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += "</td>";
                    innerhtml += "<td>";
                    var i = 0;
                    for (var _g = 0, _h = THEEL.elContent; _g < _h.length; _g++) {
                        var v = _h[_g];
                        i += 1;
                        if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                            innerhtml += '<input type="radio" ' +
                                'name = "' + THEEL.elID + '" id="' +
                                THEEL.elID + '_' + i.toString() + '" ' +
                                'value="' + v + '" >' + v + '<br> ';
                        }
                        else {
                            for (var _j = 0, _k = THEEL.elInteractions; _j < _k.length; _j++) {
                                var v_1 = _k[_j];
                                this.theUIInteractions.push(v_1);
                            }
                            innerhtml += '<input type="radio" ' +
                                'name = "' + THEEL.elID + '" id="' +
                                THEEL.elID + '_' + i.toString() + '" ' +
                                'value="' + v + '" onchange="DoFormGenInteraction(this)" >' + v + '<br> ';
                        }
                    }
                    innerhtml += '</td></tr>';
                    //innerhtml += '</div> ';
                    break;
                }
                case "DROPDOWN": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = ""; //'style="display:block"';
                    if (!THEEL.elInitialVisibility) {
                        VIS = 'style="display:none"';
                    }
                    // innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<tr id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<td>';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += "</td>";
                    innerhtml += "<td>";
                    if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                        innerhtml += '<select name="' + THEEL.elID + '" id="' + THEEL.elID + '" >';
                    }
                    else {
                        for (var _l = 0, _m = THEEL.elInteractions; _l < _m.length; _l++) {
                            var v = _m[_l];
                            this.theUIInteractions.push(v);
                        }
                        innerhtml += '<select name="' + THEEL.elID +
                            '" id="' + THEEL.elID + '" onchange="DoFormGenInteraction(this)" >';
                    }
                    var i = 0;
                    for (var _o = 0, _p = THEEL.elContent; _o < _p.length; _o++) {
                        var v = _p[_o];
                        i += 1;
                        innerhtml += '<option ' +
                            'name = "' + THEEL.elID + '" id="' +
                            THEEL.elID + '_' + i.toString() + '" ' +
                            'value="' + v + '" >' + v + '</option> ';
                    }
                    innerhtml += '</select><br>';
                    innerhtml += '</td></tr>';
                    //innerhtml += '</div> ';
                    break;
                }
                case "CHECKBOX": {
                    var STY = "";
                    if (THEEL.elStyle != "") {
                        STY = ' style="' + THEEL.elStyle + '" ';
                    }
                    var VIS = ""; //'style="display:block"';
                    if (!THEEL.elInitialVisibility) {
                        VIS = 'style="display:none"';
                    }
                    // innerhtml += '<div id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<tr id="' + 'div_' + THEEL.elID + '" ' + VIS + STY + ' >';
                    innerhtml += '<td>';
                    if (THEEL.elLabel.trim() != "") {
                        if (THEEL.elLabelBold)
                            innerhtml += "<b>" + THEEL.elLabel + "</b><br>";
                        else
                            innerhtml += THEEL.elLabel + "<br>";
                    }
                    innerhtml += "</td>";
                    innerhtml += "<td>";
                    var i = 0;
                    for (var _q = 0, _r = THEEL.elContent; _q < _r.length; _q++) {
                        var v = _r[_q];
                        i += 1;
                        if (!Array.isArray(THEEL.elInteractions) || !THEEL.elInteractions.length) {
                            innerhtml += '<input type="checkbox" ' +
                                'name = "' + THEEL.elID + '" id="' +
                                THEEL.elID + '_' + i.toString() + '" ' +
                                'value="' + v + '" >' + v + '<br> ';
                        }
                        else {
                            for (var _s = 0, _t = THEEL.elInteractions; _s < _t.length; _s++) {
                                var v_2 = _t[_s];
                                this.theUIInteractions.push(v_2);
                            }
                            innerhtml += '<input type="checkbox" ' +
                                'name = "' + THEEL.elID + '" id="' +
                                THEEL.elID + '_' + i.toString() + '" ' +
                                'value="' + v + '" onchange="DoFormGenInteraction(this)" >' + v + '<br> ';
                        }
                    }
                    innerhtml += '</td></tr>';
                    //innerhtml += '</div> ';
                    break;
                }
            }
        }
        innerhtml += "</table></form>";
        el.innerHTML = innerhtml;
        // Ok now all of the elements should be in the DOM
        // now we want to iterate over everything again to set any scoring and any required bits
        for (var _u = 0, UIElements_2 = UIElements; _u < UIElements_2.length; _u++) {
            var THEEL = UIElements_2[_u];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT": {
                    var el = (document.getElementById(THEEL.elID));
                    el.dataset.fgscore = THEEL.elScore[0].toString();
                    if (THEEL.elRequired) {
                        el.dataset.fgrequired = "YES";
                    }
                    else {
                        el.dataset.fgrequired = "NO";
                    }
                    break;
                }
                case "DATE": {
                    var el = (document.getElementById(THEEL.elID));
                    el.dataset.fgscore = THEEL.elScore[0].toString();
                    if (THEEL.elRequired) {
                        el.dataset.fgrequired = "YES";
                    }
                    else {
                        el.dataset.fgrequired = "NO";
                    }
                    break;
                }
                case "NARRATIVE": {
                    var el = (document.getElementById(THEEL.elID));
                    el.dataset.fgscore = THEEL.elScore[0].toString();
                    if (THEEL.elRequired) {
                        el.dataset.fgrequired = "YES";
                    }
                    else {
                        el.dataset.fgrequired = "NO";
                    }
                    break;
                }
                case "RADIO": {
                    var i = 0;
                    for (var _v = 0, _w = THEEL.elScore; _v < _w.length; _v++) {
                        var v = _w[_v];
                        i += 1;
                        var el = (document.getElementById(THEEL.elID + '_' + i.toString()));
                        el.dataset.fgscore = v.toString();
                        if (THEEL.elRequired) {
                            el.dataset.fgrequired = "YES";
                        }
                        else {
                            el.dataset.fgrequired = "NO";
                        }
                    }
                    break;
                }
                case "DROPDOWN": {
                    var i = 0;
                    for (var _x = 0, _y = THEEL.elScore; _x < _y.length; _x++) {
                        var v = _y[_x];
                        i += 1;
                        var ell = (document.getElementById(THEEL.elID + '_' + i.toString()));
                        ell.dataset.fgscore = v.toString();
                        if (THEEL.elRequired) {
                            ell.dataset.fgrequired = "YES";
                        }
                        else {
                            ell.dataset.fgrequired = "NO";
                        }
                    }
                    break;
                }
                case "CHECKBOX": {
                    var i = 0;
                    for (var _z = 0, _0 = THEEL.elScore; _z < _0.length; _z++) {
                        var v = _0[_z];
                        i += 1;
                        var el = (document.getElementById(THEEL.elID + '_' + i.toString()));
                        el.dataset.fgscore = v.toString();
                        if (THEEL.elRequired) {
                            el.dataset.fgrequired = "YES";
                        }
                        else {
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
    FormGen.prototype.GetFormData = function () {
        var UIValues = [];
        // first we want to echo the version as one of the elements
        var theversion = new UIValue("FORMVERSIONSTRING", this.theVersionString + "");
        UIValues.push(theversion);
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
        // look for the  version string first and set it
        for (var _i = 0, UIValues_1 = UIValues; _i < UIValues_1.length; _i++) {
            var uivs = UIValues_1[_i];
            if (uivs.uivID.toLocaleUpperCase() == "FORMVERSIONSTRING") {
                this.theVersionString = uivs.uivValue;
                break;
            }
        }
        for (var _a = 0, _b = this.theUIElements; _a < _b.length; _a++) {
            var THEEL = _b[_a];
            switch (THEEL.elType.toUpperCase()) {
                case "TEXT":
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
                case "DATE":
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
                case "NARRATIVE":
                    {
                        var el = (document.getElementById(THEEL.elID));
                        for (var _e = 0, UIValues_4 = UIValues; _e < UIValues_4.length; _e++) {
                            var theval = UIValues_4[_e];
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
                        for (var _f = 0, _g = THEEL.elContent; _f < _g.length; _f++) {
                            var vv = _g[_f];
                            i += 1;
                            var el = (document.getElementById(THEEL.elID + "_" + i.toString()));
                            for (var _h = 0, UIValues_5 = UIValues; _h < UIValues_5.length; _h++) {
                                var theval = UIValues_5[_h];
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
                        for (var _j = 0, UIValues_6 = UIValues; _j < UIValues_6.length; _j++) {
                            var theval = UIValues_6[_j];
                            if (theval.uivID == THEEL.elID) {
                                var i = 0;
                                for (var _k = 0, _l = THEEL.elContent; _k < _l.length; _k++) {
                                    var vv = _l[_k];
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
                        for (var _m = 0, _o = THEEL.elContent; _m < _o.length; _m++) {
                            var vv = _o[_m];
                            i += 1;
                            var el = (document.getElementById(THEEL.elID + "_" + i.toString()));
                            for (var _p = 0, UIValues_7 = UIValues; _p < UIValues_7.length; _p++) {
                                var theval = UIValues_7[_p];
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
     * IsFormValid
     */
    FormGen.prototype.IsFormValid = function () {
        var isvalid = true;
        for (var _i = 0, _a = this.theUIElements; _i < _a.length; _i++) {
            var THEEL = _a[_i];
            if (THEEL.elRequired) {
                switch (THEEL.elType.toUpperCase()) {
                    case "TEXT":
                        {
                            var del = (document.getElementById("div_" + THEEL.elID));
                            if (!del.hidden) {
                                var el = (document.getElementById(THEEL.elID));
                                if (el.value + "" == "") {
                                    isvalid = false;
                                }
                            }
                            break;
                        }
                    case "DATE":
                        {
                            var del = (document.getElementById("div_" + THEEL.elID));
                            if (!del.hidden) {
                                var el = (document.getElementById(THEEL.elID));
                                if (el.value + "" == "") {
                                    isvalid = false;
                                }
                            }
                            break;
                        }
                    case "NARRATIVE":
                        {
                            var del = (document.getElementById("div_" + THEEL.elID));
                            if (!del.hidden) {
                                var el = (document.getElementById(THEEL.elID));
                                if (el.value + "" == "") {
                                    isvalid = false;
                                }
                            }
                            break;
                        }
                    case "RADIO":
                        {
                            var del = (document.getElementById("div_" + THEEL.elID));
                            if (!del.hidden) {
                                var i = 0;
                                var newvalid = false;
                                for (var _b = 0, _c = THEEL.elContent; _b < _c.length; _b++) {
                                    var vv = _c[_b];
                                    i += 1;
                                    var theid = THEEL.elID + "_" + i.toString();
                                    var el = (document.getElementById(theid));
                                    if (el.checked) {
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
                            var del = (document.getElementById("div_" + THEEL.elID));
                            if (!del.hidden) {
                                var eli = (document.getElementById(THEEL.elID));
                                var seltext = eli.options[eli.selectedIndex].text;
                                if (seltext + "" == "") {
                                    isvalid = false;
                                }
                            }
                            break;
                        }
                    case "CHECKBOX":
                        {
                            var del = (document.getElementById("div_" + THEEL.elID));
                            if (!del.hidden) {
                                var i = 0;
                                var newvalid = false;
                                for (var _d = 0, _e = THEEL.elContent; _d < _e.length; _d++) {
                                    var vv = _e[_d];
                                    i += 1;
                                    var theid = THEEL.elID + "_" + i.toString();
                                    var el = (document.getElementById(theid));
                                    if (el.checked) {
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
    };
    /**
     * DoFormGenInteraction
     */
    FormGen.prototype.DoFormGenInteraction = function (e) {
        for (var _i = 0, _a = this.theUIInteractions; _i < _a.length; _i++) {
            var UIi = _a[_i];
            // parse each noted interaction to see if we need to act on it
            if (e.name == UIi.elIDSource) {
                switch (e.type.toUpperCase()) {
                    case "RADIO":
                    case "CHECKBOX":
                        {
                            var radios = document.getElementsByName(e.name);
                            for (var i = 0; i < radios.length; i++) {
                                var it = radios[i];
                                if (it.value == UIi.elValueTrigger || it.hidden) {
                                    // we have the specific one that is supposed to trigger this action
                                    // first lets get the thing we are gonna trigger
                                    var thetriggeredelement = document.getElementById("div_" + UIi.elIDTarget);
                                    if (it.checked && UIi.elInteractionType == "SHOW") {
                                        // we are gonna make sure something is visible
                                        thetriggeredelement.style.display = ""; //"block";
                                    }
                                    else {
                                        if (it.checked && UIi.elInteractionType == "HIDE") {
                                            // we are gonna make sure something is hidden
                                            thetriggeredelement.style.display = "none";
                                            // here we want to recursively call itself to propigate UIInteractions down the chain
                                            var telement = document.getElementById(UIi.elIDTarget);
                                            this.DoFormGenInteraction(telement);
                                        }
                                        else {
                                            if (!it.checked && UIi.elInteractionType == "HIDE") {
                                                // we are gonna make sure something is visible
                                                thetriggeredelement.style.display = ""; // "block";
                                            }
                                            else {
                                                // we are gonna make sure something is hidden
                                                thetriggeredelement.style.display = "none";
                                                // here we want to recursively call itself to propigate UIInteractions down the chain
                                                var telement = document.getElementById(UIi.elIDTarget);
                                                this.DoFormGenInteraction(telement);
                                            }
                                        }
                                    }
                                }
                            }
                            break;
                        }
                    case "TEXT":
                    case "TEXTAREA":
                        {
                            var v = e.value.toUpperCase();
                            var thetriggeredelement = document.getElementById("div_" + UIi.elIDTarget);
                            if (v == UIi.elValueTrigger.toUpperCase()) {
                                if (UIi.elInteractionType == "SHOW") {
                                    thetriggeredelement.style.display = ""; //"block";
                                }
                                else {
                                    if (UIi.elInteractionType == "HIDE") {
                                        thetriggeredelement.style.display = "none";
                                        // here we want to recursively call itself to propigate UIInteractions down the chain
                                        var telement = document.getElementById(UIi.elIDTarget);
                                        this.DoFormGenInteraction(telement);
                                    }
                                }
                            }
                            else {
                                if (UIi.elInteractionType == "SHOW") {
                                    thetriggeredelement.style.display = "none";
                                    // here we want to recursively call itself to propigate UIInteractions down the chain
                                    var telement = document.getElementById(UIi.elIDTarget);
                                    this.DoFormGenInteraction(telement);
                                }
                                else {
                                    if (UIi.elInteractionType == "HIDE") {
                                        thetriggeredelement.style.display = ""; //"block";
                                    }
                                }
                            }
                            break;
                        }
                    case "DATE":
                        {
                            var v = e.value.toUpperCase();
                            var thetriggeredelement = document.getElementById("div_" + UIi.elIDTarget);
                            var vis = this.isVisible(e);
                            if (!vis)
                                v = "";
                            if (v != "") {
                                if (UIi.elInteractionType == "SHOW") {
                                    thetriggeredelement.style.display = ""; //"block";
                                }
                                else {
                                    if (UIi.elInteractionType == "HIDE") {
                                        thetriggeredelement.style.display = "none";
                                        e.value = "";
                                        // here we want to recursively call itself to propigate UIInteractions down the chain
                                        //var telement = document.getElementById(UIi.elIDTarget);
                                        this.DoFormGenInteraction(e);
                                    }
                                }
                            }
                            else {
                                if (UIi.elInteractionType == "SHOW") {
                                    thetriggeredelement.style.display = "none";
                                    e.value = "";
                                    // here we want to recursively call itself to propigate UIInteractions down the chain
                                    //var telement = document.getElementById(UIi.elIDTarget);
                                    this.DoFormGenInteraction(e);
                                }
                                else {
                                    if (UIi.elInteractionType == "HIDE") {
                                        thetriggeredelement.style.display = ""; //"block";
                                    }
                                }
                            }
                            break;
                        }
                    default: // SELECT HANDLED HERE
                        {
                            // this will be the select check for dropdowns
                            if (e.type.toUpperCase().startsWith("SELECT")) {
                                var v = e.value;
                                var thetriggeredelement = document.getElementById("div_" + UIi.elIDTarget);
                                if (v == UIi.elValueTrigger) {
                                    if (UIi.elInteractionType == "SHOW") {
                                        thetriggeredelement.style.display = ""; //"block";
                                    }
                                    else {
                                        if (UIi.elInteractionType == "HIDE") {
                                            thetriggeredelement.style.display = "none";
                                            // here we want to recursively call itself to propigate UIInteractions down the chain
                                            var telement = document.getElementById(UIi.elIDTarget);
                                            this.DoFormGenInteraction(telement);
                                        }
                                    }
                                }
                                else {
                                    if (UIi.elInteractionType == "SHOW") {
                                        thetriggeredelement.style.display = "none";
                                        // here we want to recursively call itself to propigate UIInteractions down the chain
                                        var telement = document.getElementById(UIi.elIDTarget);
                                        this.DoFormGenInteraction(telement);
                                    }
                                    else {
                                        if (UIi.elInteractionType == "HIDE") {
                                            thetriggeredelement.style.display = ""; //"block";
                                        }
                                    }
                                }
                            }
                            break;
                        }
                }
            }
        }
        //alert("Interacted Here current value of ");
    };
    // use in propigation of UIInteractions on visibiliy checks
    FormGen.prototype.isVisible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
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