class Language < ActiveRecord::Base
   
    has_many :dialects

def self.all_languages
    language=Language.all
    language.map {|language| language.language}
end

def self.total_speakers
    all=Language.all
    all1 = all.map {|entry| entry.number_of_speakers}
    all1.sum
end

def self.most_speakers
    language = Language.where("number_of_speakers=?", self.highest_number_of_speakers)[0]
    language.language_family
end

def self.first_language
    language=Language.all
    language.first
end

def self.last_language
    language=Language.all
    language.last
end

def self.find_by_id(id)
    Language.find(id==id)
end

def self.delete_by_id(id)
    language=Language.find(id==id)
    language.delete
end

def self.alpha_order
    Language.order(language: :asc)
end

end