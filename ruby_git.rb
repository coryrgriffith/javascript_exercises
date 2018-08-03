# i = 1
# while i < 101
#   p i
#   i += 1
# end 

# i = 1
# while i < 100
#   p i
#   i += 2
# end

# def fifty_five_counter(numbers)
#   total = 0
#   numbers.each do |number|
#     if number == 55
#       total += 1
#     end
#   end
#   return total
# end

# p fifty_five_counter([23, 64, 55, 988, 1232, 55])

def awesomesauce_infusion(strings)
  i = 0
  infused_strings = []
  strings.length.times do
    infused_strings << strings[i]
    if i < strings.length - 1
      infused_strings << "awesomesauce"
    end
    i += 1
  end
  return infused_strings
end

p awesomesauce_infusion(["a", "b", "c", "d", "e"])