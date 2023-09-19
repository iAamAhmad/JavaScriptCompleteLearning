const menu = {
   _meal: '',
   _price: 0,
   set meal(mealToCheck) {
      if (mealToCheck === 'string') {
         return _meal = mealToCheck;
      }
   },
   set price(priceToCheck) {
      if (priceToCheck === 'number') {
         return _price = priceToCheck;
      }
   },
   get todaysSpecial() {
      if (_meal && _price) {
         return 'Today’s Special is Spaghetti for $5!';
      } else {
         return 'Meal or price was not set correctly!'
      }
      console.log('')
   },
}
menu._meal = 'Biryani';
menu._meal = 12;
menu._price = 'Hello';
console.log(menu)
