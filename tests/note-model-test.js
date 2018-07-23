(function(exports) {

  function testNoteIsObject() {
    var note = new Note();
    if(note.getText() !== 'favourite language is JavaScript') {
      throw new Error('is not correct')}
    };
    testNoteIsObject();

  })(this);




//
// (function(exports) {
//   function testCircleRadiusDefaultsTo10() {
//     var circle = new Circle();
//
//     if (circle.radius !== 10) {
//       throw new Error("Circle size is not 10");
//     }
//   };
//
//   testCircleRadiusDefaultsTo10();
// })(this);
