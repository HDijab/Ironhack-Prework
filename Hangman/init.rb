APP_ROOT = File.dirname(__FILE__)

$LOAD_PATH << File.join(APP_ROOT, 'lib')

require 'guide'
require 'game'
require 'player'
require 'aiplayer'
require 'dictionary'
require 'pry'
require 'io/console'

# @guess = STDIN.noecho(&:gets).chomp

guide = Guide.new
guide.launch!
