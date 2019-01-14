function Container() {
  this.id = "";
  this.className = "";
  this.htmlCode = "";
}
Container.prototype.render = function() {
  return this.htmlCode;
};


function Menu(myId, myClass, myItems) {
  Container.call(this);
  this.id = myId;
  this.className = myClass;
  this.items = myItems;
}
Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function() {
  var menuList = "";
    for (var i in this.items) {
      menuList += items[i].render();
    }
  return "<ul>" + menuList + "</ul>";
}

function MenuItem(myHref, myTitle) {
  Container.call(this);
  this.className = 'menu_class';
  this.href = myHref;
  this.title = myTitle;
}
MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function() {
  return "<li class='" + this.className + "'><a href='" + this.href + "'> - " + this.title + " - </a></li>";
};

var item1 = new MenuItem('/','Главная');
var item2 = new MenuItem('/catalog','Каталог');
var item3 = new MenuItem('/contacts','Контакты');
var items = [item1, item2, item3];

var menu = new Menu('my_menu', 'menu_class', items);

document.write(menu.render());