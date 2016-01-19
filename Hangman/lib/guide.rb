class Guide #:nodoc:
  class Config #:nodoc:
    class << self; attr_reader :options, :actions, :difficulty end
    @options = %w(Person Computer)
    @actions = %w(Quit)
    @difficulty = %w(Easy Hard)
  end

  def initialize
    @options = Guide::Config.options
    @actions = Guide::Config.actions
    @difficulty = Guide::Config.difficulty
  end

  def launch!
    introduction
    human_or_robot
    conclusion
  end

  def human_or_robot
    puts 'Options: ' + @options.join(' / ')
    user_response = get_action(@options)
    case user_response.downcase
    when 'person'
      return create_people
    when 'computer'
      return difficulty
    end
  end

  def create_people
    puts "\nPlayer 1 what is your name?"
    player_1 = Player.new(gets.chomp)
    puts "\nPlayer 2 what is your name?"
    player_2 = Player.new(gets.chomp)
    game = Game.new(player_1, player_2)
    game.launch!
  end

  def difficulty
    puts "\nWhat difficulty would you like?"
    puts 'Difficulty: ' + @difficulty.join(' / ')
    user_response = get_action(@difficulty)
    case user_response.downcase
    when 'easy'
      computer('support/english_words_basic.txt')
    when 'hard'
      computer('support/english_words.txt')
    end
  end

  def person
    choice = nil
    until choice == :quit
      action = get_action(@actions)
      choice = do_action(action)
    end
  end

  def computer(difficulty)
    player = Player.new('Player')
    computer = Aiplayer.new(difficulty)
    game = Game.new(player, computer)
    game.launch!
  end

  def get_action(branch)
    user_response = nil
    until branch.include?(user_response)
      print '> '
      user_response = gets.chomp.capitalize
    end
    user_response
  end

  def do_action(action)
    case action.downcase
    when 'quit'
      :quit
    end
  end

  def introduction
    puts "\n\n<<< Hello and welcome to Hangman! >>>\n\n"
    puts 'How would you like to play?'
  end

  def conclusion
    puts "\n\n<<< Thanks for playing! >>>\n\n"
  end
end
