class Language < ActiveRecord::Base
   
    has_many :dialects

#     @@language_count=0

# def initialize
#     @@language_count += 1
# end

def self.most_speakers
    Language.maximum(:number_of_speakers)
end

# def self.count
#     @@language_count
# end

end