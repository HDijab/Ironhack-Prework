def solve_cipher(input, shift=3)
	array = input.split("")
	array.map! do |x|
		if x == " "
			x
		elsif x.ord + shift > 122 || (x.ord + shift > 90 && x.ord + shift < 95)
			(x.ord - 26 + shift).chr
		elsif x.ord + shift < 97 || x.ord + shift < 65
			(x.ord + 26 + shift).chr		
		else
			(x.ord + shift).chr
		end
	end
	array = array.join("")
	print array
end

solve_cipher("pb uhdo qdph lv grqdog gxfn", -3)