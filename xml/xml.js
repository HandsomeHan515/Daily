function parseXML (xml) {
    var root, xmldom;
    if (window.DOMParser) {
        xmldom = new DOMParser();
        var dom = xmldom.parseFromString(xml, "application/xml");
        if (!dom) return;

        root = dom.documentElement
    } else if (window.ActiveXObject) {
        xmldom = new ActiveXObject('Microsoft.XMLDOM');
        xmldom.async = false;
        xmldom.loadXML(xml);
        root = xmldom.documentElement;
    }
    return root
}
