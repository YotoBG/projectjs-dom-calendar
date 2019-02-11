//domC custom mini framework
var domC = { 

    //1. Gets existing element (by id) method
    get: function(id) {
        return document.getElementById(id);
    
    },

    //3. Deletes element by id method
    delete: function(id){
        this.get(id).remove();
    },

    //Adding text to element by id 
    text: function(id, text) {
        var innerElement = this.get(id);
        var textNode = document.createTextNode(text);
        innerElement.appendChild(textNode);
    },

    //2. Adding a non-existing element to an existing one 
    addIn(newElType,existingElementID,newElInnerHTML){
        
        var newElement = document.createElement(newElType);
        
        //If value is entered for inner element text, add it in the newElement
        if(newElInnerHTML !== undefined){
            var node = document.createTextNode(newElInnerHTML);
            newElement.appendChild(node);
        }

        var existingElement = this.get(existingElementID);
        existingElement.appendChild(newElement);
        //return existingElement;
    },


};

