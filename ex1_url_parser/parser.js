var form = document.getElementById('url-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var uri = document.getElementById('uri-box').value;
    var uriParts = parseUri(uri);
    render(uriParts);
});

function render(uriParts) {
    document.getElementById('parts').className = '';
    for (var key in uriParts) {
        document.getElementById(key + '-value').innerHTML = uriParts[key];
    }
}

function parseUri(uri) {
    var uriParts = {
        scheme: '',
        authority: '',
        path: '',
        query: '',
        fragment: ''
    };
    // add your code here
    var str = uri;

    var pos = str.indexOf(":");
    if(pos > -1){
        uriParts.scheme = str.slice(0,pos);
        str = str.slice(pos+3, str.length+1);
    }
    else{
        uriParts.scheme = str.slice(0,str.length);
        str = '';
    }

    pos = str.indexOf("/");
    if(pos > -1){
        uriParts.authority = str.slice(0,pos);
        str = str.slice(pos, str.length);
    }
    else{
        uriParts.authority = str.slice(0, str.length);
        str = '';
    }

    pos = str.indexOf("?");
    if(pos > -1){
        uriParts.path = str.slice(0,pos);
        str = str.slice(pos+1, str.length);
    }
    else{
        uriParts.path = str.slice(0,str.length);
        str = '';
    }

    pos = str.indexOf("#")
    if(pos > -1){
        uriParts.query = str.slice(0,pos);
        str = str.slice(pos+1, str.length);
    }
    else{
        uriParts.query = str.slice(0,str,length);
        str = '';
    }


    if(pos > -1){
        uriParts.fragment = str.slice(0,str.length);
    }
    
    return uriParts;
}