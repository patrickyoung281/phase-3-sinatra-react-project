class Dialect < ActiveRecord::Base

    belongs_to :language

    attr_accessor :dialect_name

def self.create_with_attributes(dialect_name, language_id)
    Dialect.new(dialect_name: name,
                language_id: language_id
    )
end


def self.total_number_of_dialects
    Dialect.count
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