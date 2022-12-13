class Language < ActiveRecord::Base
   
    has_many :dialects

def self.all_languages
    language=Language.all
    language.map {|language| language.language}
end

def self.create_with_attributes(language, number_of_speakers)
    Language.create(language: language,
                number_of_speakers: number_of_speakers
    )
end

def self.total_speakers
    all=Language.all
    all1 = all.map {|entry| entry.number_of_speakers}
    all1.sum
end

def self.most_speakers
    language = Language.where("number_of_speakers=?", self.maximum(:number_of_speakers))[0]
    language.language
end

def self.find_id_by_name(name)
    target = Language.find{|language|language.language===name}
    target.id
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
    language = Language.find {|language|language.id==id}
    language
end

def self.delete_by_id(id)
    language=Language.find(id===id)
    language.delete
end

def self.alpha_order
    Language.order(language: :asc)
end

def self.delete_by_id(id)
    language=Language.find(id==id)
    language.destroy
end

def self.delete_all_languages
    Language.destroy_all
end

end