def check_one(x)
  x = x.to_s.split('')
  if x[0].to_i == 1
    return true
  else
    return false
  end
end

(1..100).each do |x|
  result = ''
  result << 'Fizz' if x % 3 == 0
  result << 'Buzz' if x % 5 == 0
  result << 'Bang' if check_one(x)
  if result == ''
    puts x
  else
    puts result
  end
end
