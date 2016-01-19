class ShackShop
  def initialize
    @milkshakes = []
  end

  def add_milkshake(milkshake)
    @milkshakes.push(milkshake)
  end

  def checkout
    @checkout = 0
    @milkshakes.each do |milkshake|
      @checkout += milkshake.price_of_milkshake
    end
    puts 'List of Milkshakes:'
    @milkshakes.each do |milkshake|
      puts "#{milkshake.name} costs #{milkshake.price_of_milkshake} dollars"
    end
    puts 'Total Price:'
    puts "#{@checkout} dollars"
  end
end

class MilkShake
  attr_reader :total_price_of_milkshake, :name
  def initialize(name)
    @name = name
    @base_price = 3
    @ingredients = []
  end

  def add_ingredient(ingredient)
    @ingredients.push(ingredient)
  end

  def price_of_milkshake
    @total_price_of_milkshake = @base_price
    @ingredients.each do |ingredient|
      @total_price_of_milkshake += ingredient.price
    end
    @total_price_of_milkshake
  end
end

class Ingredient
  attr_reader :flavor, :price
  def initialize(flavor, price)
    @flavor = flavor
    @price = price
  end
end

shop = ShackShop.new

my_milkshake = MilkShake.new("Halil's Milkshake")
my_milkshake_two = MilkShake.new("Silvana's Milkshake")
my_milkshake_three = MilkShake.new("Bob's Milkshake")

banana = Ingredient.new('Banana', 2)
chocolate_chips = Ingredient.new('Chocolate Chips', 1)
strawberry = Ingredient.new('Strawberry', 3)
peach = Ingredient.new('Peach', 4)
mango = Ingredient.new('Mango', 5)

my_milkshake.add_ingredient(banana)
my_milkshake.add_ingredient(chocolate_chips)
my_milkshake.add_ingredient(strawberry)
my_milkshake.add_ingredient(peach)
my_milkshake.add_ingredient(mango)

my_milkshake_two.add_ingredient(banana)
my_milkshake_two.add_ingredient(chocolate_chips)
my_milkshake_two.add_ingredient(strawberry)

my_milkshake_three.add_ingredient(banana)
my_milkshake_three.add_ingredient(chocolate_chips)
my_milkshake_three.add_ingredient(strawberry)

shop.add_milkshake(my_milkshake)
shop.add_milkshake(my_milkshake_two)
shop.add_milkshake(my_milkshake_three)

shop.checkout
