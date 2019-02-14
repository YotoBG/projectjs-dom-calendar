//domC custom mini framework
var domC = { 

    
    // 1. Gets existing element (by id) method
    get: function(id) {
        return document.getElementById(id);
    
    },

    // 3. Deletes element by id method
    delete: function(id){
        this.get(id).remove();
    },

    // 4c. Adding text to element by id 
     text: function(id, text) {
         var innerElement = this.get(id);
         var textNode = document.createTextNode(text);
         innerElement.appendChild(textNode);
     },

    textIn: function(existingEl, text) {
        var textNode1 = document.createTextNode(text);
        existingEl.appendChild(textNode1);
    },

    // 2. Adding a non-existing element to an existing one 
    addIn: function(newElType,existingElementID,newElInnerHTML){
        
        var newElement = document.createElement(newElType);
        
        // If value is entered for inner element text, add it in the newElement
        if(newElInnerHTML !== undefined){
            var node = document.createTextNode(newElInnerHTML);
            newElement.appendChild(node);
        }

        var existingElement = this.get(existingElementID);
        existingElement.appendChild(newElement);
        //return existingElement;
    },

    // 4. Altering html element
    // a. Atributes 
    // Change ID by ID
    chageAttributeId: function(AlterAtrbId,newId){
        let alterElement = this.get(AlterAtrbId);
        
        if (validStringCheck(newId)){
           alterElement.id=newId;  
        }
        
    },

    // Change Class by ID
    chageAttributeClass: function(AlterAtrbId,newClass){
        let alterElement = this.get(AlterAtrbId);
        
        if (validStringCheck(newClass)){
           alterElement.className = newClass;
        }
        
    },

    // Changes attribute name by ID
    chageAttributeName: function(AlterAtrbId,newName){
            let alterElement = this.get(AlterAtrbId);
            
            if (validStringCheck(newName)){
               alterElement.setAttribute("name",newName);
            }
            
        },
    
    //TODO : data attribute

    // 4d. Changing an element's existing style/s by it's ID
    // Adding styles from an object
    changeStyle: function(elemId,objectStyles){
        var alterElementSt = this.get(elemId);
        

        if (typeof(objectStyles)==='object'){
            var styleValue = "";
            for(i in objectStyles){
                styleValue += i + ": " + objectStyles[i] +";";
                //console.log("ST VALUE: "+styleValue);    
                alterElementSt.setAttribute("style",styleValue);
            }

        }
        
        //return alterElementSt;
    },

    // 4d. Changing element's existing styles by passing the element itself as a argument
    changeStyleExistingEl: function(elementExisting,objectStyles){
        
        if ((typeof(objectStyles)==='object') && (elementExisting instanceof HTMLElement)){
            var styleValue = "";
            for(i in objectStyles){
                styleValue += i + ": " + objectStyles[i] +";";   
                elementExisting.setAttribute("style",styleValue);
            }
        }
        return this;
    },

    // 4b. ?

    // 5d gets child el array
    getChildElement: function(parElId){
        var parEl = document.getElementById(parElId);
        var chNodes = parEl.childNodes;
        return chNodes;
    }


};

domC.proto

var validStringCheck = function(myString){
if((myString !== "") && (myString !== undefined)){
return true;
}
}