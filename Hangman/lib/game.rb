class Game # :nodoc:
  def initialize(player_1, player_2)
    @players = [player_1, player_2]
    @correct = []
    @incorrect = []
  end

  def launch!
    puts "\n#{@players[0].name} What's your phrase?"
    @players[0].phrase = STDIN.noecho(&:gets).chomp
    middle
  end

  def middle
    continue = true
    display
    while continue
      puts "\n#{@players[1].name}, what's your guess?"
      guess = gets.chomp
      check_guess(guess)
      if end_game
        continue = false
        puts 'Player 1 Wins!'
      end
    end
    again
  end

  def again
    @correct = []
    @incorrect = []
    puts 'Would you like to play again? y/n'
    answer = gets.chomp
    launch! if answer == 'y'
  end

  def end_game
    if @incorrect.length == 6
      return true
    else
      return false
    end
  end

  def check_guess(guess)
    if @players[0].phrase.include? guess
      @correct << guess
      puts 'Correct!'
      display
    else
      @incorrect << guess
      puts "Sorry, you only have #{6 - @incorrect.length} tries left!"
      puts @incorrect
      display
    end
  end

  def display
    display = ''
    @players[0].phrase.split('').each do |x|
      if @correct.include?(x.downcase) || /[^A-Za-z0-9[:blank:]]/.match(x)
        display << x
      elsif x == ' '
        display << '/'
      else
        display << '_'
      end
    end
    puts display
  end
end
