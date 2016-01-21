class Dictionary #:nodoc:
  def self.pick_random_word(dictionary)
    chosen_word = nil
    File.foreach(dictionary).each_with_index do |line, number|
      if line.chomp.length.between?(5, 12)
        chosen_word = line if rand < 1.0 / (number + 1)
      end
    end
    chosen_word.chomp
  end
end
