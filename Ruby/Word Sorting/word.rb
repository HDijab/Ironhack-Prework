def word_sort(string)
	array = string.split(" ")
	array.each do |x|
		x.gsub!(/[^0-9A-Za-z]/, "")
	end
	array.sort_by! {|string| string.downcase}
	print array
end

word_sort("Zis is a test!")