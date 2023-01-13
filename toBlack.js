function toBlack(document){
if(!document) document = this;
  document.body.style.backgroundColor = "black;";
  document.body.style.color = "white;";
  return true;
}
document.body.toBlack = toBlack();
