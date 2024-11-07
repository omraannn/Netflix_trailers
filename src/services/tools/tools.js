export default class tools {
    // show & hide nav 
    static handleShow(navRef, status) {
        if(status) {
            navRef.current.style.backgroundColor = "black";
        }else {
            navRef.current.style.backgroundColor = "transparent";
        }
    }

    // truncate long text
    static truncate(str ="", n = 0) {
        return str.length > 10 ? str.substring(0, n) + "..." : str;
    }
}