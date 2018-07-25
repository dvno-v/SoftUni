function reqValidator(object) {
    const validMethods = ['GET', 'POST', 'CONNECT', 'DELETE'];
    let uriPattern = /\*|^([a-zA-Z0-9\.]+)$/gm;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0' ];
    const massagePattern = /^[^<>\\&'"]*$/g;

    //chech props
    if(!object.hasOwnProperty('method') || !validMethods.includes(object.method)) throw new Error("Invalid request header: Invalid Method");
    if(!object.hasOwnProperty('uri') || !uriPattern.test(object.uri)) throw new Error("Invalid request header: Invalid URI");
    if(!object.hasOwnProperty('version') || !validVersions.includes(object.version) ) throw new Error("Invalid request header: Invalid Version");
    if(!object.hasOwnProperty('message' || !massagePattern.test(object.message))) throw new Error("Invalid request header: Invalid Message");
    return object;
}

reqValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})