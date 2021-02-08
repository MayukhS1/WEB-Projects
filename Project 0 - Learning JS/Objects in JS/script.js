var out = document.getElementById("output");

function simple_object() {
/*type 1
----------------------------------*/
  var obj1 = new Object();

  obj1.name = "Mayukh";
  obj1.roll = 102;
  obj1.semester = 8;
  obj1.isMember = true;

  console.log(obj1);


  /*type 2
  ----------------------------------*/
  var obj2 = {
    name :"Anonymous",
    isStudent: false,
    semester: null,
    isMember: true,
    updateStatus: function() {
      if (obj2.isMember&& !obj2.isStudent) {
        obj2.isMember = false;
      }
      return obj2;
    }
  }

  console.log(obj2);
  console.log(obj2.updateStatus());
}


/*custom 2
----------------------------------*/

function Custom_object(name,semester,roll,isStudent,isMember) {
  this.name = name;
  this.semester =semester;
  this.roll = roll;
  this.isStudent = isStudent;
  this.isMember = isMember;
  this.updateStatus = function () {
    if (this.isMember && !this.isStudent) {
      this.isMember = false;
    }
    return this.isMember;
  };
}

function try_custom_object() {
  var ob1 = new Custom_object("xyz", 5, 25, true, true);
  var ob2 = new Custom_object("xySDz", 3, 52, true, true);
  var ob3 = new Custom_object("SSkyz", 7, 2, true, true);
  var ob4 = new Custom_object("DFxyz", 1, 45, true, true);

  console.log(ob1);
  console.log(ob2);
}
