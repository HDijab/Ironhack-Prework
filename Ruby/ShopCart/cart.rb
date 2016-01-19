class ShoppingCart
  def initialize
    @items = []
  end

  def add_item(item)
    @items << item
  end

  def checkout
    @total = 0
    @items.each do |item|
      @total += item.price
    end
    @total -= @total / 10 if @items.length > 5
    puts "Your total is $#{@total}. Have a nice day!"
  end
end

class Item
  attr_reader :price
  def initialize(name, price)
    @name = name
    @price = price
  end
end

class Houseware < Item
  def price
    if @price > 100
      @price -= @price / 20
      @price
    else
      @price
    end
  end
end

class Fruit < Item
  def price
    if Time.now.saturday? || Time.now.sunday?
      @price -= @price / 10
      @price
    else
      @price
    end
  end
end

banana = Fruit.new('Banana', 10)
orange_juice = Item.new('Orange Juice', 10)
rice = Item.new('Rice', 1)
vacuum_cleaner = Houseware.new('Vacuum Cleaner', 150)
anchovie = Item.new('Anchovie', 2)

my_cart = ShoppingCart.new

2.times { my_cart.add_item(banana) }
my_cart.add_item(orange_juice)
my_cart.add_item(rice)
my_cart.add_item(vacuum_cleaner)
my_cart.add_item(anchovie)

my_cart.checkout
