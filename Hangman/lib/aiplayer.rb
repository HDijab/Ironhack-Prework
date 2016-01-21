class Aiplayer < Player #:nodoc:
  attr_reader :chosen_word

  def initialize(dictionary)
    @chosen_word = Dictionary.pick_random_word(dictionary)
  end
end
