class Dialect < ActiveRecord::Base

    belongs_to :language

def self.all_dialects
    dialects=Dialect.all
    dialects.map{|dialect| dialect.dialect_name}
end

def self.create_with_attributes(dialect_name, language_id)
    Dialect.create(dialect_name: dialect_name,
                language_id: language_id
    )
end

def self.dialects_alphabetically
    Dialect.order(dialect_name: :asc)
end

def self.delete_by_id(id)
    dialect=Dialect.find(id==id)
    dialect.destroy
end

def self.delete_all_dialects
    Dialect.destroy_all
end

end