// function TESTS
domC.get("test");
domC.delete("test");
domC.text("test1", "hello from domC function ")
domC.addIn("h1", "testp");
domC.chageAttributeId("testp", "id-set-test");
domC.chageAttributeClass("test1", "class-set-test");
domC.chageAttributeName("test1", "name-set-test");
//==== Get Child Element Test ====
//var childElementArray = domC.getChildElement("table-tr1");

var object2 = {
  color: "blue",
  "background-color": "red",
  "font-weight": "normal",
}
// for(var i in object2){
//     console.log("OBJECT2 Key:" + i + ". Value: " + object2[i]); 
//                //  key                     // key's value
// }
domC.changeStyle("key-value-test", object2);
// TESTS END

var trNumber; // table row number 
var childElementsDays; // td in tr

var dateO = new Date();
var mountNumber = dateO.getMonth() + 1;
var mountText = "";
var perviousMountButton = domC.get("pervious-mount-button");
var nextMountButton = domC.get("next-mount-button");
// Osnovni zadachi 1,2,3
showMountName();
perviousMountButton.addEventListener("click", function () {
  mountNumber--;
  daysInMonth(mountNumber);
  showMountName();
  displayDaysInCalendar();
  //console.log(mountNumber);
});

nextMountButton.addEventListener("click", function () {
  mountNumber++;
  daysInMonth(mountNumber);
  showMountName();
  displayDaysInCalendar();
  //console.log(mountNumber);
});


// H1 in calendar head , shows mount as text
function showMountName() {
  if (mountNumber < 1) {
    mountNumber = 1;
  }
  if (mountNumber > 12) {
    mountNumber = 12;
  }
  switch (mountNumber) {
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
    case 11:
      mountText = "November";
      break;
    case 12:
      mountText = "December";
      break;
    default:
      mountText = "Error";
      break;
  }

  domC.textNew("mount-calendar", mountText);
}
// H1 in calendar head END

function daysInMonth(mountNumber) {
  return new Date(2019, mountNumber, 0).getDate();
}



//console.log("Days in Mount: " + daysInMonth(mountNumber));

// TODO: REMAKE

function displayDaysInCalendar() {
  var weeksInMount = Math.ceil(daysInMonth(mountNumber) / 7);

  console.log("Weeks in Mount: " + weeksInMount);
  console.log("Days in Mount: " + daysInMonth(mountNumber));

  for (let i = 1; i <= weeksInMount + 1; i++) {
    //console.log("i= " + i);
    trNumber = document.getElementById("table-tr" + i);
    childElementsDays = domC.getChildElement("table-tr" + i);
    for (let j = 1; j <= (daysInMonth(mountNumber)); j += 2) {

      if (childElementsDays[j] === undefined) {
        continue
      }
      //
    
      if ((daysInMonth(mountNumber) == 28) && (i == 5)) {
        domC.textInNew(childElementsDays[1], "");
        domC.textInNew(childElementsDays[3], "");
        domC.textInNew(childElementsDays[5], "");
      }

      console.log("j= " + j);
      if ((((i - 1) * 7) + Math.ceil(j / 2)) >= daysInMonth(mountNumber) + 1) {
        domC.textInNew(childElementsDays[j], "");
        break; //Stops the loop if DAY display > daysInMounth
      }
      domC.textInNew(childElementsDays[j], (((i - 1) * 7) + Math.ceil(j / 2)));

    }
  }
}


