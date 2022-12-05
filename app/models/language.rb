class Language < ActiveRecord::Base
   
    has_many :dialects

def self.most_speakers
    Language.maximum(:number_of_speakers)
end


end