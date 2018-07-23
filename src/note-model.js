(function(exports) {
  function Note() {
    this.text =  'favourite language is JavaScript'
  };
  exports.Note = Note;
})(this);
Note.prototype.getText = function(){
  return this.text
}




// (function(exports) {
//   function Circle() {
//     this.radius = 10;
//   };
//
//   exports.Circle = Circle;
// })(this);
