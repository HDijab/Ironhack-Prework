class Player #:nodoc:
  attr_accessor :name, :phrase

  def initialize(name)
    @name = name
    @phrase = nil
  end
end

# Holds the name of the player
# Allows the user to set the word or phrase that will be guessed
# Creates the guesses by getting the player's choices from keyboard
