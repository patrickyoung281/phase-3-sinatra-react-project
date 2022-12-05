class CreateLanguages < ActiveRecord::Migration[6.1]
  def change
    create_table :languages do |t|
      t.string :language
      t.integer :number_of_speakers
      t.string :language_family
      t.boolean :endangered? 
      t.timestamps
    end
  end
end
