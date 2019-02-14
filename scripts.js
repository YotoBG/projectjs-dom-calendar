domC.get("test");
domC.delete("test");

domC.text("test1","hello there ")

domC.addIn("h1","testp");

domC.chageAttributeId("testp","id-set-test");
domC.chageAttributeClass("test1","class-set-test");
domC.chageAttributeName("test1","name-set-test");

var dateO = new Date();
var mountNumber = dateO.getMonth() + 1;
var dayNumber = dateO.getDate();
console.log(dayNumber);
var mountText = "";

switch(mountNumber) {
    case 1:
    mountText = "January";
      break;
    case 2:
    mountText = "February";
      break;
    case 3:
    mountText = "March";
      break;
    case 4:
    mountText = "Aril";
      break;
    case 5:
    mountText = "May";
      break;
    case 6:
    mountText = "June";
      break;
    case 7:
    mountText = "July";
      break;
    case 8:
    mountText = "August";
      break;
    case 9:
    mountText = "September";
      break;
    case 10:
    mountText = "October";
      break;
    case 1:
    mountText = "November";
        break;
    case 2:
    mountText = "December";
        break;
    default:
    mountText = "Error";
  }

domC.get("mount-calendar").innerHTML = mountText;
console.log("==== Key Value Test ====");

var object2 = {
    color: "blue",
    "background-color": "red",
    "font-weight": "normal",
}

{
// for(var i in object2){
//     console.log("OBJECT2 Key:" + i + ". Value: " + object2[i]); 
//                //  key                     // key's value
// }
}
domC.changeStyle("key-value-test",object2);

//===============================================
console.log("==== Get Child Element Test ====");

var childElementArray = domC.getChildElement("table-tr");

for (let i = 1; i < childElementArray.length; i+=2) {

    domC.changeStyleExistingEl(childElementArray[i],object2);
    domC.textIn(childElementArray[i],dayNumber);
    
    //console.log(childElementArray[i]);
}

//console.log(domC.getChildElement("table-tr"))
